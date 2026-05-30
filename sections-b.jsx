/* sections-b.jsx — Skills, Projects, Metrics, Writing, Certifications, Contact */

function Skills({ d }) {
  return (
    <section className="section wrap" id="skills">
      <Reveal><span className="kicker">03 — Stack</span></Reveal>
      <Reveal delay={60}><h2 className="section-title">Tools I reach for.</h2></Reveal>
      <div className="skills-grid">
        {d.skills.map((col, i) => (
          <Reveal key={i} delay={80 + i * 80} className="skill-col" as="div">
            <div className="skill-head"><Ico name={col.icon} /><h3>{col.title}</h3></div>
            <div className="tags">
              {col.items.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects({ d }) {
  return (
    <section className="section wrap" id="projects">
      <Reveal><span className="kicker">04 — Projects</span></Reveal>
      <Reveal delay={60}><h2 className="section-title">Selected work.</h2></Reveal>
      <div className="proj-grid">
        {d.projects.map((p, i) => (
          <Reveal key={i} delay={80 + (i % 2) * 80} className="proj" as="article">
            <div className="proj-top">
              <span className="proj-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="proj-badge">{p.domain}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="proj-tech">{p.items.map((t) => <span className="t" key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Metric({ m }) {
  const [ref, display] = useCountUp(m.value, { decimals: m.decimals, money: m.money });
  return (
    <div className="metric">
      <div className="v" ref={ref}>
        {m.prefix && <span className="u">{m.prefix}</span>}
        {display}
        {m.suffix && <span className="u">{m.suffix}</span>}
      </div>
      <div className="k">{m.label}</div>
    </div>
  );
}

function Metrics({ d }) {
  return (
    <section className="metrics">
      <div className="wrap">
        <div className="metrics-head">
          <span className="kicker" style={{ margin: 0 }}>Impact, measured</span>
          <span className="metrics-sub">Selected, real results from my work — receipts in the timeline below.</span>
        </div>
        <div className="metrics-grid">
          {d.metrics.map((m, i) => <Metric m={m} key={i} />)}
        </div>
      </div>
    </section>
  );
}

function Writing({ d }) {
  const w = d.writing;
  return (
    <section className="section wrap" id="writing">
      <Reveal><span className="kicker">05 — Writing</span></Reveal>
      <div className="write-grid">
        <div>
          <Reveal delay={60}>
            <h2 className="section-title" style={{ marginBottom: "var(--sp-5)" }}>I write about the JVM &amp; backend.</h2>
          </Reveal>
          <Reveal delay={110}><p className="write-blurb">{w.blurb}</p></Reveal>
          <Reveal delay={170}>
            <a className="btn btn-primary" href={d.medium} target="_blank" rel="noopener" style={{ marginTop: "var(--sp-6)" }}>
              Read on Medium <span className="ar">→</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={140} className="write-topics" as="div">
          {w.topics.map((t, i) => (
            <div className="write-topic" key={i}>
              <span className="wt-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{t}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Certifications({ d }) {
  return (
    <section className="section wrap" id="certs">
      <Reveal><span className="kicker">06 — Credentials</span></Reveal>
      <Reveal delay={60}><h2 className="section-title">Certified &amp; multilingual.</h2></Reveal>
      <div className="cert-grid">
        {d.certs.map((c, i) => (
          <Reveal key={i} delay={80 + i * 70} className="cert" as="div">
            <div className="ico"><Ico name={c.icon} /></div>
            <div><h4>{c.title}</h4><p>{c.sub}</p></div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={160}>
        <div className="langs">
          {d.languages.map((x) => (
            <span className="lang" key={x.l}>{x.l} <b>{x.lvl}</b></span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact({ d }) {
  return (
    <React.Fragment>
      <section className="contact wrap" id="contact">
        <div className="contact-vignette"></div>
        <Reveal><span className="kicker" style={{ justifyContent: "center" }}>07 — Contact</span></Reveal>
        <Reveal delay={60}>
          <h2>Let's build something<br /><span className="em">reliable.</span></h2>
        </Reveal>
        <Reveal delay={120}>
          <p>Open to backend and infrastructure roles — remote or relocation. The fastest way to reach me is email.</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${d.email}`}>{d.email} <span className="ar">→</span></a>
            <a className="btn btn-ghost" href={d.cv} target="_blank" rel="noopener">Download CV <Ico name="download" /></a>
          </div>
        </Reveal>
      </section>
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} {d.name}</span>
            <span style={{ color: "var(--c-fg-4)" }}>·</span>
            <span>{d.phone}</span>
          </div>
          <div className="footer-social">
            <a href={`mailto:${d.email}`} title="Email"><Ico name="mail" /></a>
            <a href={d.linkedin} target="_blank" rel="noopener" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href={d.medium} target="_blank" rel="noopener" title="Medium">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

Object.assign(window, { Skills, Projects, Metrics, Writing, Certifications, Contact });
