export function smoothScrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;

  const lenis = (window as any).lenis;

  if (lenis) {
    lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
