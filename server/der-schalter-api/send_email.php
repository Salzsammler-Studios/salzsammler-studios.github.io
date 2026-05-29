<?php

/*************************************************
 * CONFIG — CHANGE THESE
 *************************************************/

// Your secret API key (same as in frontend)
$API_KEY = "1d96b22110c7bf8eb8b834a214c60564bf5d22a03b123d44c2d01a49bd173acc";

// Your website (no trailing slash)
$ALLOWED_ORIGIN = "https://salzsammler.de";

// Where emails should go
$RECEIVER_EMAIL = "info@salzsammler.de";

// From address (must exist on your domain ideally)
$FROM_EMAIL = "gewinnspiel@salzsammler.de";

/*************************************************
 * HEADERS
 *************************************************/

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: $ALLOWED_ORIGIN");
header("Access-Control-Allow-Headers: Content-Type, X-API-KEY");
header("Access-Control-Allow-Methods: POST");

// Handle preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

/*************************************************
 * SECURITY
 *************************************************/

// API key check
if (
    !isset($_SERVER["HTTP_X_API_KEY"]) ||
    $_SERVER["HTTP_X_API_KEY"] !== $API_KEY
) {
    http_response_code(401);
    echo json_encode(["error" => "Invalid API key"]);
    exit();
}

/*************************************************
 * READ INPUT
 *************************************************/

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit();
}

// Required fields
$required = ["name", "address", "subject", "content"];

foreach ($required as $field) {
    if (empty($data[$field]) || !is_string($data[$field])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing or invalid: $field"]);
        exit();
    }
}

/*************************************************
 * SANITIZE
 *************************************************/

$name = trim(strip_tags($data["name"]));
$address = trim(strip_tags($data["address"]));
$subject = trim(strip_tags($data["subject"]));
$content = trim(strip_tags($data["content"]));

// Prevent header injection
$subject = str_replace(["\r", "\n"], "", $subject);

/*************************************************
 * BUILD EMAIL
 *************************************************/

$body =
    "Name: $name\n" .
    "Address: $address\n\n" .
    "-------------------------\n" .
    "$content\n";

$headers = "From: $FROM_EMAIL\r\n";
$headers .= "Reply-To: $FROM_EMAIL\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

/*************************************************
 * SEND MAIL
 *************************************************/

$sent = mail($RECEIVER_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["status" => "ok"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Mail failed"]);
}
