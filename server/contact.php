<?php
// ── Config ────────────────────────────────────────────────────────────────────
$to             = 'info@salzsammler.de';
$allowed_origin = 'https://salzsammler.de';
$rate_file      = sys_get_temp_dir() . '/ss_contact_rate.json';
$max_per_window = 3;    // max submissions per IP
$rate_window    = 600;  // seconds (10 min)
$min_seconds    = 3;    // minimum time to fill out the form (bot guard)
// ─────────────────────────────────────────────────────────────────────────────

// CORS
header('Access-Control-Allow-Origin: ' . $allowed_origin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// ── Honeypot ──────────────────────────────────────────────────────────────────
// Silently succeed so bots don't know they were caught
if (!empty($data['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

// ── Timing check ─────────────────────────────────────────────────────────────
$load_time = isset($data['_t']) ? (int)$data['_t'] : 0;
if ((time() - $load_time) < $min_seconds) {
    http_response_code(429);
    echo json_encode(['error' => 'Bitte warten Sie einen Moment.']);
    exit;
}

// ── Rate limiting by IP ───────────────────────────────────────────────────────
$ip  = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$now = time();

$limits = [];
if (file_exists($rate_file)) {
    $limits = json_decode(file_get_contents($rate_file), true) ?: [];
}

// Purge expired entries
$limits = array_values(array_filter(
    $limits,
    fn($e) => ($now - $e['time']) < $rate_window
));

$ip_count = count(array_filter($limits, fn($e) => $e['ip'] === $ip));
if ($ip_count >= $max_per_window) {
    http_response_code(429);
    echo json_encode(['error' => 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.']);
    exit;
}

$limits[] = ['ip' => $ip, 'time' => $now];
file_put_contents($rate_file, json_encode($limits), LOCK_EX);

// ── Validation ────────────────────────────────────────────────────────────────
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$subject = 'Neue Kontaktanfrage über salzsammler.de';
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte füllen Sie alle Felder aus.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
    exit;
}

// Reject messages with excessive links (common spam pattern)
if (substr_count($message, 'http') > 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Ihre Nachricht enthält zu viele Links.']);
    exit;
}

// ── Sanitize ──────────────────────────────────────────────────────────────────
$name    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
// $email already validated by filter_var

// ── Send ──────────────────────────────────────────────────────────────────────
$body = "Name: $name\nE-Mail: $email\n\n$message";

$headers = implode("\r\n", [
    'From: noreply@salzsammler.de',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.']);
}
