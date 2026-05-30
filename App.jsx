/* App.jsx — composition + global effects */

function ScrollBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-bar" style={{ width: w + "%" }}></div>;
}

function App() {
  const d = window.DATA;
  useReveal();
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
  }, []);
  return (
    <React.Fragment>
      <div className="bg-texture"></div>
      <ScrollBar />
      <Nav />
      <main>
        <Hero d={d} />
        <Metrics d={d} />
        <About d={d} />
        <Experience d={d} />
        <Skills d={d} />
        <Projects d={d} />
        <Writing d={d} />
        <Certifications d={d} />
        <Contact d={d} />
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
