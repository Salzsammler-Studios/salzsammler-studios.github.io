import { useEffect, useState } from "preact/hooks";

interface Props {
  imageSrc: string;
  imageAlt: string;
}

const SPREAD_LEFT = 16;
const SPREAD_RIGHT = 30;
const TOP_HALF_WIDTH = 6;

function cone(apex: number): string {
  const tl = Math.max(0, apex - TOP_HALF_WIDTH);
  const tr = Math.min(100, apex + TOP_HALF_WIDTH);
  const bl = apex - SPREAD_LEFT;
  const br = Math.min(100, apex + SPREAD_RIGHT);
  return `polygon(${tl.toFixed(2)}% 0%, ${tr.toFixed(2)}% 0%, ${br.toFixed(2)}% 100%, ${bl.toFixed(2)}% 100%)`;
}

export default function Cone({ imageSrc, imageAlt }: Props) {
  const [clipPath, setClipPath] = useState(cone(8));

  function measure() {
    const el = document.querySelector<HTMLElement>("[data-nav-active]");
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setClipPath(cone(((left + width / 2) / window.innerWidth) * 100));
  }

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    document.addEventListener("astro:after-swap", measure);
    return () => {
      window.removeEventListener("resize", measure);
      document.removeEventListener("astro:after-swap", measure);
    };
  }, []);

  return (
    <img
      src={imageSrc}
      alt={imageAlt}
      class="absolute inset-0 w-full h-full object-cover transition-[clip-path] duration-500 ease-in-out"
      style={{ clipPath }}
    />
  );
}
