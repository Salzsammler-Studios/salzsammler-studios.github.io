import { useEffect, useState } from "preact/hooks";

interface Props {
  spreadLeft?: number;
  spreadRight?: number;
  topHalfWidth?: number;
  /** Fixed apex position (0–100 %). Omit to follow the active nav item. */
  apex?: number;
  /** Translate the whole cone left (negative) or right (positive) along the x-axis, in % of viewport width. */
  offset?: number;
  /** Where the solid colour begins (% of element height). Default 0. */
  gradientStart?: number;
  /** Where the colour becomes fully transparent (% of element height). Default 50. */
  gradientEnd?: number;
}

function cone(
  apex: number,
  spreadLeft: number,
  spreadRight: number,
  topHalfWidth: number,
): string {
  const tl = Math.max(0, apex - topHalfWidth);
  const tr = Math.min(100, apex + topHalfWidth);
  const bl = apex - spreadLeft;
  const br = apex + spreadRight;
  return `polygon(${tl.toFixed(2)}% 0%, ${tr.toFixed(2)}% 0%, ${br.toFixed(2)}% 100%, ${bl.toFixed(2)}% 100%)`;
}

/** Ease-out gradient: solid at `start`, smoothly transparent at `end`. */
function gradient(start: number, end: number): string {
  const s = (t: number) => (start + (end - start) * t).toFixed(1);
  return [
    `var(--color-primary) ${s(0)}%`,
    `rgba(167,77,74,0.75) ${s(0.25)}%`,
    `rgba(167,77,74,0.4) ${s(0.55)}%`,
    `rgba(167,77,74,0.1) ${s(0.8)}%`,
    `transparent ${s(1)}%`,
  ].join(", ");
}

export default function Cone({
  spreadLeft = 20,
  spreadRight = 32,
  topHalfWidth = 4,
  apex: fixedApex,
  offset = 0,
  gradientStart = 0,
  gradientEnd = 50,
}: Props) {
  const [clipPath, setClipPath] = useState(
    cone(fixedApex ?? 10, spreadLeft, spreadRight, topHalfWidth),
  );

  function measure() {
    if (fixedApex !== undefined) return;
    const el = document.querySelector<HTMLElement>("[data-nav-active]");
    if (!el) return;
    const pct =
      ((el.getBoundingClientRect().left + el.offsetWidth / 2) /
        window.innerWidth) *
      100;
    setClipPath(cone(pct, spreadLeft, spreadRight, topHalfWidth));
  }

  useEffect(() => {
    if (fixedApex !== undefined) return;
    measure();
    window.addEventListener("resize", measure);
    document.addEventListener("astro:after-swap", measure);
    return () => {
      window.removeEventListener("resize", measure);
      document.removeEventListener("astro:after-swap", measure);
    };
  }, []);

  return (
    <div
      class="absolute inset-0 pointer-events-none transition-[clip-path] duration-500 ease-in-out"
      style={{
        clipPath,
        transform: offset !== 0 ? `translateX(${offset}%)` : undefined,
        background: `linear-gradient(to bottom, ${gradient(gradientStart, gradientEnd)})`,
      }}
    />
  );
}
