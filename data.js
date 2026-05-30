/* Portfolio content — sourced from Illia Ponomarov's CV. */
window.DATA = {
  name: "Illia Ponomarov",
  role: "Java / Kotlin Software Engineer",
  location: "Bratislava, Slovakia",
  tz: "UTC+01:00 · Remote / Relocate",
  email: "ponomarovilliajob@gmail.com",
  phone: "+421 951 460 930",
  // NOTE: exact URLs were not in the CV — update these.
  linkedin: "https://www.linkedin.com/",
  medium: "https://medium.com/",
  cv: "Illia_Ponomarov_Java_Software_Engineer.pdf",

  lede: "I build and harden high-load backend systems — from biometric platforms processing tens of millions of transactions a month to 20-year-old government infrastructure that can't go down.",

  about: [
    "I'm a Java/Kotlin engineer with 3+ years of commercial experience, working on teams of 10 to 23 people. I've built high-load products from scratch and kept decades-old systems alive and fast.",
    "Most of my work lives where reliability really matters: biometric identification, government and labor platforms, and telecom. I care about the unglamorous wins — a race condition fixed, a latency curve flattened, an infrastructure bill cut — because that's what users actually feel."
  ],

  facts: [
    { k: "Experience", v: "3+ years commercial" },
    { k: "Team sizes", v: "10 – 23 people" },
    { k: "Based in", v: "Bratislava, SK" },
    { k: "Availability", v: "Remote / Relocate" },
    { k: "Focus", v: "Backend · Infra · High-load" },
  ],

  experience: [
    {
      when: "AUG 2024 — PRESENT",
      role: "Java / Kotlin Software Engineer",
      company: "Innovatrics s.r.o",
      url: "https://www.innovatrics.com",
      place: "Bratislava, Slovakia",
      bullets: [
        "Led a transaction-counting SaaS as **sole developer** inside a high-load biometric system — integrating the Countly SDK/API and a Kinesis consumer over a RabbitMQ architecture, processing **82.4M+ transactions/month** with **$71,850** in annual savings.",
        "Fixed a race condition in the authorization server causing immediate login failures; reworked the Spring Security strategy and **cut failed logins by 47.3%**.",
        "Implemented a **tattoo modality** for forensic identification — designed the DB schemas and integrated AI extraction, **boosting matching accuracy by 21.8%** for criminal teams.",
        "Optimized latent fingerprint segmentation for large images with R&D and Criminal teams, **cutting response times 22.6%** (4.2s → 3.25s).",
        "Upgraded Redis and added photo endpoints in DIS microservices; patched Extractor/Matcher vulnerabilities — **+38.4% security** and **42% fewer incidents**.",
      ],
    },
    {
      when: "OCT 2022 — AUG 2024 · 2 YEARS",
      role: "Java Application Developer",
      company: "Atos IT Solutions → Eviden s.r.o",
      url: "https://eviden.com",
      place: "Bratislava, Slovakia",
      bullets: [
        "Built a **WebP image service** for inefficient government platforms; benchmarked libraries to **reduce load size 32.79%** and **increase delivery speed 43.17%**.",
        "Migrated file data to **S3** from bloated databases — **improved latency 14.1%** and **cut infrastructure costs $9,450/year**.",
        "Upgraded **116 services from Java 8 → 17** through complex legacy bottlenecks; improved GC/CPU utilization and **boosted throughput up to 27.89%**.",
      ],
    },
  ],

  skills: [
    { icon: "server", title: "Backend", items: ["Java","Kotlin","Spring Boot","Spring Security","Hibernate","RabbitMQ","REST","GraphQL","gRPC","PostgreSQL","MSSQL","OracleDB"] },
    { icon: "cloud", title: "AWS", items: ["EKS","ECR","Lambda","EC2","S3","Kinesis Firehose"] },
    { icon: "git-branch", title: "DevOps", items: ["Kubernetes","Docker","ArgoCD","Helm","Minio","GitLab CI/CD","Bitbucket","Linux","Bash"] },
  ],

  projects: [
    { domain: "Biometrics", title: "Biometric identity systems",
      desc: "Identity and forensic biometrics under high load — a tattoo modality for forensic identification, optimized latent fingerprint segmentation for crime-scene work, and large-scale identity verification.",
      items: ["Guinea Elections", "Identity Verification Toolkit", "Fingerprint & tattoo ID"] },
    { domain: "Government & Labor", title: "Public-sector platforms",
      desc: "Systems for the Slovak public sector — modernizing aging government infrastructure for speed, delivery and scale.",
      items: ["Ministry of Labor of Slovakia", "Labor Exchange platforms"] },
    { domain: "Telecom", title: "A1 Telekom",
      desc: "Backend engineering within the A1 Telekom ecosystem.",
      items: ["A1 Telekom"] },
    { domain: "Infrastructure", title: "High-load services",
      desc: "Core services built to meter and serve at scale — including a transaction counter handling 82.4M+ events a month.",
      items: ["Transaction Counting System", "Data Service", "Digital Document Service", "Biometric Record Service"] },
  ],

  metrics: [
    { value: 71850, prefix: "$", suffix: "", decimals: 0, label: "annual savings delivered", money: true },
    { value: 82.4, suffix: "M+", decimals: 1, label: "transactions metered / month" },
    { value: 47.3, suffix: "%", decimals: 1, label: "fewer failed logins" },
    { value: 116, prefix: "", suffix: "", decimals: 0, label: "services upgraded Java 8 → 17" },
  ],

  writing: {
    blurb: "I publish technical articles on Medium about backend development and the Java ecosystem — what I learn building and fixing high-load systems.",
    topics: ["JVM & the Java memory model", "High-load architecture", "Java 8 → 17 migrations", "Spring & backend patterns"],
  },

  certs: [
    { icon: "award", title: "Oracle Certified Associate, Java SE 8 Programmer", sub: "Oracle" },
  ],

  languages: [
    { l: "English", lvl: "B2" }, { l: "Slovak", lvl: "B2" },
    { l: "Ukrainian", lvl: "Native" }, { l: "Russian", lvl: "C2" },
  ],
};
