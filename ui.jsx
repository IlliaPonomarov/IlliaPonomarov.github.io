/* ui.jsx — shared primitives for the portfolio kit */
const { useState, useEffect, useRef, useCallback } = React;

/* Lucide icon as <i data-lucide>; App calls lucide.createIcons() after mount */
function Ico({ name, ...rest }) {
  return <i data-lucide={name} {...rest}></i>;
}

/* Scroll-reveal: adds .in when element enters viewport */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    // Deterministically reveal anything already in view on mount (don't rely on IO here).
    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((e) => {
        if (e.classList.contains("in")) return;
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.96 && r.bottom > 0) e.classList.add("in");
      });
    };
    revealInView();
    requestAnimationFrame(revealInView);

    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => { if (!e.classList.contains("in")) io.observe(e); });
    // Safety net: if IO never fires (some capture/headless contexts), reveal all.
    const safety = setTimeout(() => els.forEach((e) => e.classList.add("in")), 2500);
    return () => { io.disconnect(); clearTimeout(safety); };
  });
}

/* staggered reveal wrapper */
function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  return (
    <Tag className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/* count-up that fires when scrolled into view */
function useCountUp(target, { decimals = 0, money = false, duration = 1400 } = {}) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) run(); });
    }, { threshold: 0.4 });
    io.observe(el);
    // immediate trigger if already in view on mount
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) run();
    // safety: never leave the number stuck at 0
    const safety = setTimeout(() => { if (!done.current) { done.current = true; setVal(target); } }, 2600);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [target]);

  let display;
  if (money) display = Math.round(val).toLocaleString("en-US");
  else display = val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return [ref, display];
}

Object.assign(window, { Ico, useReveal, Reveal, useCountUp });
