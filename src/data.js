// =======================================================
//  data.js — ✏️ EDIT THIS FILE to update your content
//  All your personal info lives here. No need to touch
//  the component files for most updates.
// =======================================================
import myphoto from './assets/myphoto.jpg'
import asrs from './assets/asrs.png'
import emnlp from './assets/emnlp.jpg'
import surf from './assets/surf.png'
import augornot from './assets/augornot.jpg'
import doc2query from './assets/doc2query++.png'
import token_weight from './assets/token_weight.png'
export const profile = {
  name: "Wei-Ning(William) Chiu",
  tagline: "Researcher · Engineer · MS Student",
  bio: `I am currently an MS in Machine Learning student at Carnegie Mellon University, and I hold an MS in Computer Science and Information Engineering from National Taiwan University (GPA 4.27/4.3) and a BS in Computer Science from National Tsing Hua University (GPA 4.23/4.3, ranked 3/138). My research spans information retrieval, recommender systems, natural language processing, data mining, computer vision, and agent systems, with work published at EMNLP, ICASSP, NAACL, and CIKM. Alongside research, I've built ML systems and products at Google, Academia Sinica, LINE, and VICI Holdings. I am actively seeking full-time and internship opportunities where I can apply my research and engineering skills to impactful, real-world problems.`,
  photo: myphoto, // ✏️ Replace with: import photo from './assets/photo.jpg'  →  photo: photo
  photoAlt: "Photo of Your Name",

  contact: {
    linkedin: "https://www.linkedin.com/in/wei-ning-william-chiu-54b81b250/",
    email: "wchiu2@cs.cmu.edu",
    scholar: "https://scholar.google.com/citations?view_op=list_works&hl=zh-TW&hl=zh-TW&user=nVhkbPsAAAAJ",
    github: "https://github.com/CHIUWEINING",
  },
};

export const publications = [
  // ✏️ Duplicate this object to add more papers.
  // Note: Home.jsx shows publications.slice(0, 3) as "Selected Publications" — keep the top 3 as the ones you want featured.
  {
    id: "pub-1",
    venue: "CIKM 2026",
    badge: "Full Paper",
    title: "Beyond Uniform Token Training: A Multi-Target Framework for Learning Token-Weighted Objectives in Generative Recommenders",
    authors: ["Wei-Ning Chiu", "Song-Duo Ma", "Han-Jay Shu", "Chuan-Ju Wang", "Pu-Jen Cheng"],
    tags: ["Generative Recommender", "Token-Weighting", "Multi-Target Learning"],
    summary: `Proposes two complementary information-gain–based token-weighting strategies that capture conditional (positional) and marginal (frequency) effects given the fact that tokens in semantic-ID–based generative recommenders contribute unequal information. By integrating these objectives with curriculum learning in a multi-target framework, our method enables stable training and adaptive emphasis over time, leading to more accurate and less biased recommendations.`,
    image: token_weight, // ✏️ Replace with: import img1 from './assets/pub1.png'  →  image: img1
    links: {
      paper: "https://arxiv.org/pdf/2601.17787",
      code:  "https://github.com/CHIUWEINING/Token-Weighted-Multi-Target-Learning-for-Generative-Recommenders-with-Curriculum-Learning?tab=readme-ov-file",
      // demo: "https://your-demo-url.com",
      // slides: "https://your-slides-url.com",
    },
  },
  {
    id: "pub-2",
    venue: "EMNLP 2025",
    badge: "Full Paper",
    title: "Financial Risk Relation Identification through Dual-view Adaptation",
    authors: ["Wei-Ning Chiu", "Yu-Hsiang Wang", "Andy Hsiao", "Yu-Shiang Huang", "Chuan-Ju Wang"],
    tags: ["Financial NLP", "Retrieval-based Relation", "Relation Identification"],
    summary: `Presents a novel method for identifying inter-firm risk relations from 10-K filings using a dual-view fine-tuned encoder and a transparent Risk Relation Score (RRS). By modeling both lexical and chronological patterns, our approach captures implicit risk links and outperforms strong baselines. Also presented at the FinIR workshop of SIGIR 2025.`,
    image: emnlp, // ✏️ Replace with: import img1 from './assets/pub1.png'  →  image: img1
    links: {
      paper: "https://aclanthology.org/2025.emnlp-main.1336/",
      code:  "https://github.com/cnclabs/codes.fin.relation",
      // demo: "https://your-demo-url.com",
      // slides: "https://your-slides-url.com",
    },
  },
  {
    id: "pub-3",
    venue: "ICASSP 2026",
    badge: "Full Paper",
    title: "Uncovering Overconfident Failures in CXR Models via Augmentation-Sensitivity Risk Scoring",
    authors: ["Han-Jay Shu*", "Wei-Ning Chiu*", "Shun-Ting Chang", "Meng-Ping Huang", "Takeshi Tohyama", "Ahram Han", "Po-Chih Kuo"],
    tags: ["Medical AI", "Computer Vision", "Error Detection"],
    summary: `Proposes an augmentation-sensitivity risk scoring (ASRS) framework to identify error-prone CXR cases. Sensitivity scores stratify samples into stability quartiles, where highly sensitive cases show substantially lower recall (–0.2 to –0.3) despite high AUROC and confidence. ASRS provides a label-free means for selective prediction and clinician review, improving fairness and safety in medical AI.`,
    image: asrs,
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/11463914",
      slides: "https://drive.google.com/file/d/1R-msBcNTDkKmoX-R7ShK90Vn08-fPr2P/view?usp=sharing",
    },
  },
  {
    id: "pub-4",
    venue: "NAACL 2025",
    badge: "Demo",
    title: "SURF: A System to Unveil Explainable Risk Relations between Firms",
    authors: ["Yu-Hsiang Wang*", "Wei-Ning Chiu*", "Yi-Tai Hsiao", "Yu-Shiang Huang", "Yi-Shyuan Chiang", "Shuo-En Wu", "Chuan-Ju Wang"],
    tags: ["Financial NLP", "Explainability", "User-Friendly"],
    summary: `Introduces a self-supervised dual-view contrastive encoder that retrieves Mutual Risk Paragraphs from 10-K filings and quantifies inter-firm risk via a novel scoring function. Combines LLM-based rationale generation with an interactive graph UI, achieving state-of-the-art precision–recall on firm-risk benchmarks.`,
    image: surf,
    links: {
      paper: "https://aclanthology.org/2025.naacl-demo.22/",
      demo:  "https://surf-firm-risk-relations.onrender.com/",
    },
  },
  {
    id: "pub-5",
    venue: "Preprint (Under Review)",
    badge: "Full Paper",
    title: "Doc2Query++: Topic-Coverage based Document Expansion and its Application to Dense Retrieval via Dual-Index Fusion",
    authors: ["Tzu-Lin Kuo*", "Wei-Ning Chiu*", "Wei-Yun Ma", "Pu-Jen Cheng"],
    tags: ["Information Retrieval", "Document Expansion", "Topic Coverage", "Dual-Index"],
    summary: `Proposes an LLM-based method to perform document expansion through query generation. We especially focus on the topic-coverage of the generated query and devise a new Dual-Index Fusion Strategy for Dense Retrieval. We prove that our method outperform several existed baseline in extensive experiments.`,
    image: doc2query, // ✏️ Replace with: import img1 from './assets/pub1.png'  →  image: img1
    links: {
      paper: "https://arxiv.org/pdf/2510.09557",
      // code:  "https://github.com/CHIUWEINING/Token-Weighted-Multi-Target-Learning-for-Generative-Recommenders-with-Curriculum-Learning?tab=readme-ov-file",
      // demo: "https://your-demo-url.com",
      // slides: "https://your-slides-url.com",
    },
  },
  {
    id: "pub-6",
    venue: "Preprint (arXiv 2025)",
    badge: "Full Paper",
    title: "Augment or Not? A Comparative Study of Pure and Augmented Large Language Model Recommenders",
    authors: ["Wei-Hsiang Huang*", "Chen-Wei Ke*", "Wei-Ning Chiu*", "Yu-Xuan Su", "Chun-Chun Yang", "Chieh-Yuan Cheng", "Yun-Nung Chen", "Pu-Jen Cheng"],
    tags: ["LLM Recommender", "Benchmark", "Comparative Study"],
    summary: `Proposes the first taxonomy distinguishing "Pure" vs. "Augmented" LLM recommenders and establishes a unified benchmark platform. Controlled experiments reveal how identifier semantics, external knowledge injection, and collaborative signals shape recommendation effectiveness, offering a roadmap for next-generation LLM recommenders.`,
    image: augornot,// ✏️ No teaser image yet — add one, e.g. import img6 from './assets/pub6.png' → image: img6
    links: {
      paper: "https://arxiv.org/abs/2505.23053", // ✏️ Fill in the actual arXiv link — not visible in the CV text extraction
    },
  },
];

export const experience = [
  // ✏️ Duplicate this object to add more roles.
  // {
  //   date: "July 2025 - Aug 2026",
  //   role: "Co-founder",
  //   org: "Solvyn AI",
  //   description:

  //     `- Partnered with the largest cram school in Taiwan to develop AI-driven management App.
  //     - Helped traditional engineering companies to build the AI real-time voice chatbots which help them manage factories.
  //     - Partnered with 8 hospitals to design fairness-aware AI workflows and customized detection models (e.g., fractures, pneumothorax) for real clinical use.`,
  // },
  {
    date: "Jun 2026 - Aug 2026",
    role: "Software Engineer Intern",
    org: "Google",
    description:
      `- Gold Standard Diagnostic Reference App: Architected a "Gold Standard" Diagnostics Reference App by auditing legacy test suites and developing 8 full-stack APIs, resolving 80% partner hardware validation requests.
      - Secure ADB Shell Authentication: Implemented the full 3-way ADB handshake protocol to enable shell access on low-privileged User Build images, bypassing prior constraints and greatly expanding hardware test coverage.`,
  },
  {
    date: "July 2024 – Jan 2026",
    role: "Research Assistant",
    org: "Academia Sinica - CFDA Lab",
    description:
      `– Financial Relation Extraction: Extracted firm-level risk relations from 10-K reports using retrieval-augmented models; accepted to NAACL 2025 Demo; extensive full-research paper is accepted by EMNLP2025
      – Full-Stack Demo: Developed an interactive web demo visualizing research findings.`
  },
  {
    date: "Mar 2024 – Feb 2025",
    role: "Machine Learning Engineer Intern",
    org: "LINE(Largest Communication App in East Asia)",
    description:
      `– Automated MLOps Pipeline: Engineered an end-to-end object detection pipeline using BentoML, Airflow, and MLflow; automated data labeling and retraining pipeline to reduce update cycles by 30% on e-commerce platform.
      – Full-Stack Model Deployment: Architected an inference system using FastAPI and Docker, paired with a React-based interactive showroom; accelerated internal cross-team model evaluation and selection by 15%.`,
  },
  {
    date: "Apr 2025 – Jun 2025",
    role: "Quantitative Researcher Intern",
    org: "Vici Holdings.",
    description: `– Alpha Signal Development: Designed, backtested, and optimized 15+ high-frequency trading (HFT) alpha signals across multi-asset order book data, improving signal Sharpe ratio by 15%.
    – Feature Selection Models: Implemented automated feature selection pipeline using LASSO and tree-based models, filtering out 40% of redundant alpha features to reduce signal noise and pipeline latency.
    – Decision-Support System: Built real-time decision-support models for trade execution and strategy evaluation, reducing execution slippage by 12% during high-volatility trading windows.`,
  },
  {
    date: "Jun 2023 – Oct 2023",
    role: "Software Engineer Intern",
    org: "Kapito Inc.",
    description: `– Industrial Camera Management API: Engineered high-concurrency FastAPI microservices to manage real-time camera status across 50+ industrial devices, achieving sub-50ms API response times.
    – Cloud Control Interface & Logging: Developed a low-latency C++ control interface for industrial hardware, integrating AWS S3 and CloudWatch to handle 100K+ daily log entries with 99.9% system uptime.`,
  },
  {
    date: "Jul 2022 – Aug 2022",
    role: "Software Engineer Intern",
    org: "Cathay United Bank",
    description: `– Android Service Locator App: Developed a native Android app in Kotlin using MVP architecture and Google Maps API to help users locate nearby bank branches/ATMs, reducing location query latency by 25%.`,
  },
];
