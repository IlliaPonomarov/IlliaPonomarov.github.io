/* sections-a.jsx — Nav, Hero, About, Experience */

function Nav({ d }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const links = [
    ["01", "About", "#about"], ["02", "Work", "#experience"],
    ["03", "Projects", "#projects"], ["04", "Writing", "#writing"],
    ["05", "Contact", "#contact"],
  ];
  return (
    <React.Fragment>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#top" onClick={() => setOpen(false)}>
            <b>Illia Ponomarov</b>
          </a>
          <div className="nav-links">
            {links.slice(0, 4).map(([n, t, h]) => (
              <a key={h} href={h}><span className="n">{n}</span>{t}</a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">Get in touch</a>
          <button className="nav-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-sheet ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="nav-sheet-links">
          {links.map(([n, t, h], i) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{ transitionDelay: `${open ? 120 + i * 55 : 0}ms` }}>
              <span className="n">{n}</span><span className="t">{t}</span>
              <span className="ar">→</span>
            </a>
          ))}
        </nav>
        <div className="nav-sheet-foot" style={{ transitionDelay: `${open ? 120 + links.length * 55 : 0}ms` }}>
          <a href={`mailto:${d.email}`}>{d.email}</a>
          <div className="nav-sheet-social">
            <a href={d.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <span>·</span>
            <a href={d.medium} target="_blank" rel="noopener">Medium</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero({ d }) {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-vignette"></div>
      <div className="hero-grid">
        <Reveal delay={0}>
          <span className="status"><span className="dot"></span>Available for new roles</span>
        </Reveal>
        <Reveal delay={80}>
          <h1>{d.name}<span className="cursor">_</span></h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="hero-role">{d.role}</div>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-lede">{d.lede}</p>
        </Reveal>
        <Reveal delay={320}>
          <div className="hero-meta">
            <span><Ico name="map-pin" />{d.location}</span>
            <span><Ico name="globe" />{d.tz}</span>
            <span><Ico name="mail" />{d.email}</span>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Get in touch <span className="ar">→</span></a>
            <a className="btn btn-ghost" href={d.cv} target="_blank" rel="noopener">Download CV <Ico name="download" /></a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

function About({ d }) {
  return (
    <section className="section wrap" id="about">
      <Reveal><span className="kicker">01 — About</span></Reveal>
      <div className="about-grid">
        <div>
          <Reveal delay={60}>
            <p className="about-lede">
              I build and harden <span className="hl">high-load backend systems</span> where reliability isn't optional.
            </p>
          </Reveal>
          <div className="about-body" style={{ marginTop: "var(--sp-6)" }}>
            {d.about.map((p, i) => (
              <Reveal key={i} delay={120 + i * 80}><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={160} className="about-facts-wrap">
          <div className="about-facts">
            {d.facts.map((f, i) => (
              <div className="about-fact" key={i}>
                <span className="k">{f.k}</span><span className="v">{f.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience({ d }) {
  // bold markers in bullet text -> <b>
  const render = (txt) => {
    const parts = txt.split(/\*\*(.+?)\*\*/g);
    return parts.map((p, i) => (i % 2 === 1 ? <b key={i}>{p}</b> : <React.Fragment key={i}>{p}</React.Fragment>));
  };
  return (
    <section className="section wrap" id="experience">
      <Reveal><span className="kicker">02 — Experience</span></Reveal>
      <Reveal delay={60}><h2 className="section-title">Where I've shipped.</h2></Reveal>
      <div className="timeline">
        {d.experience.map((job, i) => (
          <Reveal key={i} delay={80 + i * 60} className="tl-item" as="div">
            <div className="tl-when">{job.when}</div>
            <h3 className="tl-role">{job.role}</h3>
            <div className="tl-co">
              {job.url
                ? <a className="tl-link" href={job.url} target="_blank" rel="noopener">{job.company} <Ico name="external-link" /></a>
                : <span>{job.company}</span>}
              <span className="dotsep">·</span>{job.place}
            </div>
            <ul className="tl-bullets">
              {job.bullets.map((b, j) => <li key={j}>{render(b)}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, About, Experience });
