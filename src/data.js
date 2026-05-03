// =======================================================
//  data.js — ✏️ EDIT THIS FILE to update your content
//  All your personal info lives here. No need to touch
//  the component files for most updates.
// =======================================================
import myphoto from './assets/myphoto.jpg'
import asrs from './assets/asrs.png'
import emnlp from './assets/emnlp.jpg'
import surf from './assets/surf.png'
import doc2query from './assets/doc2query++.png'
import token_weight from './assets/token_weight.png'
export const profile = {
  name: "Wei-Ning(William) Chiu",
  tagline: "Researcher · Engineer · MS Student · Startup Co-founder",
  bio: `I am a student researcher at National Taiwan University, specializing in natural language processing, recommender systems, information retrieval, and computer vision. My work focuses on developing innovative, real-world solutions using cutting-edge AI techniques. I earned my MSc from National Taiwan University in 2026. Currently, I am pursuing the MS in Machine Learning program at Carnegie Mellon University, where I continue to explore advanced topics in AI and applied machine learning. I am actively seeking research and industry opportunities where I can contribute to impactful projects and further develop my expertise.`,
  photo: myphoto, // ✏️ Replace with: import photo from './assets/photo.jpg'  →  photo: photo
  photoAlt: "Photo of Your Name",

  contact: {
    linkedin: "https://www.linkedin.com/in/wei-ning-william-chiu-54b81b250/",
    email: "wchiu2@cmu.edu",
    scholar: "https://scholar.google.com/citations?view_op=list_works&hl=zh-TW&hl=zh-TW&user=nVhkbPsAAAAJ",
    github: "https://github.com/CHIUWEINING",
  },
};

export const publications = [
  // ✏️ Duplicate this object to add more papers.
  {
    id: "pub-1",
    venue: "EMNLP 2025",
    badge: "Full Paper",
    title: "Financial Risk Relation Identification through Dual-view Adaptation",
    authors: ["Wei-Ning Chiu", "Yu-Hsiang Wang", "Andy Hsiao", "Yu-Shiang Huang", "Chuan-Ju Wang"],
    tags: ["Financial NLP", "Retrieval-based Relation", "Relation Identification"],
    summary: `Presents a novel method for identifying inter-firm risk relations from 10-K filings using a dual-view fine-tuned encoder and a transparent Risk Relation Score (RRS). By modeling both lexical and chronological patterns, our approach captures implicit risk links and outperforms strong baselines.`,
    image: emnlp, // ✏️ Replace with: import img1 from './assets/pub1.png'  →  image: img1
    links: {
      paper: "https://aclanthology.org/2025.emnlp-main.1336/",
      code:  "https://github.com/cnclabs/codes.fin.relation",
      // demo: "https://your-demo-url.com",
      // slides: "https://your-slides-url.com",
    },
  },
  {
    id: "pub-2",
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
    id: "pub-3",
    venue: "NAACL 2025",
    badge: "Demo",
    title: "SURF: A System to Unveil Explainable Risk Relations between Firms",
    authors: ["Yu-Hsiang Wang*", "Wei-Ning Chiu*", "Yi-Tai Hsiao", "Yu-Shiang Huang", "Yi-Shyuan Chiang", "Shuo-En Wu", "Chuan-Ju Wang"],
    tags: ["Financial NLP", "Explainability", "User-Friendly"],
    summary: `Introduces an interactive system that presents AI-driven firm relationships through a user-friendly graph interface. The system also integrates LLM-based rationale generation, providing clear explanations behind the inferred relationships. Together, these features create a comprehensive and intuitive platform that helps bridge the gap between retailers and complex underlying data.`,
    image: surf,
    links: {
      paper: "https://aclanthology.org/2025.naacl-demo.22/",
      demo:  "https://surf-firm-risk-relations.onrender.com/",
    },
  },
  {
    id: "pub-4",
    venue: "Preprint (Under Review)",
    badge: "Full Paper",
    title: "Token-Weighted Multi-Target Learning for Generative Recommenders with Curriculum Learning",
    authors: ["Wei-Ning Chiu", "Chuan-Ju Wang", "Pu-Jen Cheng"],
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
];

export const experience = [
  // ✏️ Duplicate this object to add more roles.
  {
    date: "July 2025 - Present",
    role: "Co-founder",
    org: "Solvyn AI",
    description:

      `- Partnered with the largest cram school in Taiwan to develop AI-driven management App.
      - Helped traditional engineering companies to build the AI real-time voice chatbots which help them manage factories.
      - Partnered with 8 hospitals to design fairness-aware AI workflows and customized detection models (e.g., fractures, pneumothorax) for real clinical use.`,
  },
  {
    date: "Jun 2026 - Aug 2026",
    role: "SWE Intern",
    org: "Google",
    description:
      ``,
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
      `– MLOps Pipeline: Built automatic object-detection model training pipeline leveraging Airflow and MLflow.
      – Experiment Showroom: Created a Gradio-based demo showroom to showcase model results.
      – Web Engineering: Implemented FastAPI for model inference and Frontend UI (React).`,
  },
  {
    date: "Apr 2025 – Jun 2025",
    role: "Quantitative Researcher Intern",
    org: "Vici Holdings.",
    description: `– Alpha Signal Development: Designed and tested high-frequency trading alphas through rigorous data analysis.
    – Feature Selection Models: Implemented models for feature/alpha selection, improving signal quality and trading performance.
    – Decision-Support: Built real-time decision-support models for trade execution and strategy evaluation.`,
  },
  {
    date: "Jun 2023 – Oct 2023",
    role: "Software Engineer Intern",
    org: "Kapito Inc.",
    description: `– Web Development: Developed back-end to support engineers managing industrial camera status using FastAPI.
    – Interface on Cloud: Built the control interface for industrial cameras in C++ and stored logs on AWS.`,
  },
];
