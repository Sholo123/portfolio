// Single source of truth for everything on the site.
// Edit here and every section updates.

export const profile = {
  name: "Sholo Ramatshego",
  fullName: "Sholo Realeboga Ramatshego",
  role: "Cybersecurity and Software Development",
  degree: "BSc (Hons) Computer Science with Cybersecurity",
  university: "University of Johannesburg",
  location: "Johannesburg, South Africa",
  email: "rearamatshego277@gmail.com",
  phone: "+27 79 656 1812",
  phoneHref: "+27796561812",
  github: "https://github.com/Sholo123",
  githubHandle: "github.com/Sholo123",
  linkedin: "https://linkedin.com/in/sholo-ramatshego",
  linkedinHandle: "linkedin.com/in/sholo-ramatshego",
  cv: "/Sholo_Ramatshego_CV.pdf",
  tagline:
    "I build security tooling and full-stack systems. My Honours research project, KubernetesSentinel, scans Kubernetes clusters for CIS benchmark compliance and maps attack paths using RBAC data.",
  summary: [
    "I am a Computer Science Honours student at the University of Johannesburg specialising in cybersecurity, with hands-on experience developing full-stack applications and security tooling using Python, JavaScript, React, Node.js, SQL, Docker and Kubernetes.",
    "I am currently building KubernetesSentinel as my Honours research project. It scans Kubernetes clusters for CIS benchmark compliance, checks manifests for misconfigurations before deployment, and maps out possible attack paths using RBAC data.",
    "My focus is penetration testing, application security and secure system design, and I am looking to start my career in a software development or cybersecurity role.",
  ],
};

export const stats = [
  { value: "131", label: "CIS controls automated" },
  { value: "50+", label: "Students tutored" },
  { value: "74%", label: "BSc IT average" },
  { value: "NQF 8", label: "Honours level" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "JavaScript", "Java", "SQL", "C++", "C#"],
  },
  {
    title: "Software Development",
    icon: "layers",
    items: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "REST APIs",
      "OOP",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "shield",
    items: [
      "Penetration Testing",
      "Ethical Hacking",
      "OWASP Top 10",
      "Network Security",
      "Web & Application Security",
      "CIS Benchmark Compliance",
      "RBAC Auditing",
      "Attack Path Analysis",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    items: ["Docker", "Kubernetes", "Cloud Deployment", "Linux", "Kali Linux"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["PostgreSQL", "SQL", "Database Design"],
  },
  {
    title: "Tools & Networking",
    icon: "terminal",
    items: [
      "Git",
      "GitHub",
      "Streamlit",
      "TCP/IP",
      "DNS",
      "DHCP",
      "HTTP/HTTPS",
      "Network Troubleshooting",
    ],
  },
];

export const flagship = {
  name: "KubernetesSentinel",
  period: "Jan 2026 - Present",
  kicker: "Honours Research Project",
  summary:
    "A Kubernetes security posture and compliance platform that combines live cluster scanning, pre-deployment checks and remediation workflows in one tool.",
  stack: ["Python", "Streamlit", "Kubernetes API", "PostgreSQL", "Docker"],
  highlights: [
    {
      title: "Live CIS benchmark scanning",
      body: "Scans live clusters against 131 CIS Kubernetes Benchmark controls with pass/fail tracking and audit reporting, tested and validated on a deliberately vulnerable cluster.",
    },
    {
      title: "CIS document parser",
      body: "A PDF parser that reads official CIS Benchmark documents and converts the control text into rules the tool can test automatically.",
    },
    {
      title: "Pre-deployment scanner",
      body: "Checks Kubernetes manifests for misconfigurations before they reach the cluster.",
    },
    {
      title: "Attack path graph",
      body: "Maps possible privilege escalation and lateral movement paths based on RBAC and workload configuration.",
    },
    {
      title: "Role-based access and rollback",
      body: "Role-based login and a rollback feature so that risky changes can be undone on the live cluster.",
    },
    {
      title: "Audit reporting",
      body: "Generates audit reports summarising compliance results and remediation steps.",
    },
  ],
};

export const video = {
  id: "3KmUOtiPlZc",
  url: "https://youtu.be/3KmUOtiPlZc",
  title: "KubernetesSentinel: Honours Research Project Walkthrough",
  description:
    "A walkthrough of KubernetesSentinel covering how the CIS benchmark scanner works, what the pre-deployment checks catch, and how the RBAC attack path graph is built.",
  chapters: [
    "How Kubernetes clusters drift out of compliance",
    "Scanning a live cluster against 131 CIS controls",
    "Catching misconfigured manifests before deployment",
    "Mapping privilege escalation paths from RBAC data",
    "Remediation, rollback and audit reporting",
  ],
};

export const projects = [
  {
    name: "Eskom Expo Judging System",
    period: "Feb 2025 - Oct 2025",
    kicker: "Full-stack and mobile application",
    desc: "A digital judging platform that replaced the paper-based process used for national science expo administration, showcased at ACSSE Project Days, University of Johannesburg.",
    points: [
      "Built the React Native app judges use to log in, view assigned projects and submit marksheets",
      "Built the Node.js, Express and SQL backend managing judges, projects, events and marksheets for nearly all participating primary and high schools",
      "Set up the evaluation and ethics review workflow, which reduced the amount of manual paperwork involved",
    ],
    stack: ["React Native", "Node.js", "Express", "SQL"],
  },
  {
    name: "Artis At Auction",
    period: "Jul 2024 - Oct 2024",
    kicker: "E-commerce auction platform",
    desc: "An online auction platform connecting local artists with buyers nationwide. It was rated one of the top second-year projects at UJ.",
    points: [
      "Co-built the platform as part of a small team",
      "Built the product listing and bidding features",
      "Collaborated on system design and implementation of core auction functionality",
    ],
    stack: ["JavaScript", "SQL"],
  },
];

export const experience = [
  {
    org: "University of Johannesburg",
    role: "Student Assistant, Computer Science (ISFAP Bursary Tutor)",
    period: "Feb 2025 - Oct 2025",
    points: [
      "Selected for the role based on academic performance and reliability",
      "Helped 50+ undergraduate students with programming assignments, debugging and exam preparation",
      "Taught data structures, algorithms and programming fundamentals in one-on-one and group sessions",
      "Supported lecturers with day-to-day academic tasks",
    ],
  },
  {
    org: "SANReN Cybersecurity Challenge 2026",
    role: "Competitor",
    period: "Aug 2026 - Sep 2026",
    points: [
      "Worked through the MISC, Stranger Things application security and Vulnerability Assessment challenge scenarios",
      "Applied practical enumeration, exploitation and vulnerability assessment techniques against realistic attack scenarios",
    ],
  },
];

export const education = [
  {
    qualification: "BSc Honours in Computer Science with Cybersecurity",
    org: "University of Johannesburg",
    period: "Jan 2026 - Present",
    detail:
      "NQF Level 8. Focus areas: Cloud Security, Network Security, Web & Application Security, System & Software Security.",
  },
  {
    qualification: "BSc Information Technology in Computer Science and Informatics",
    org: "University of Johannesburg",
    period: "Feb 2023 - Nov 2025, 74%",
    detail:
      "NQF Level 7. Data Structures & Algorithms, Software Engineering, Object-Oriented Programming, Data Communications.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#sentinel", label: "Sentinel" },
  { href: "#video", label: "Video" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
