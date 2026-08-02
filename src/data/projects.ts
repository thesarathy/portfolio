export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  overview: string;
  architecture: string;
  implementation: string;
  challenges: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "resume-screening",
    title: "Resume Screening",
    summary:
      "AI-powered resume screening pipeline that parses, scores, and shortlists candidates against job requirements.",
    tags: ["NLP", "Python", "ML", "Automation"],
    github: "https://github.com/thesarathy/resume-screening",
    overview:
      "A resume screening system that ingests resumes, extracts structured information, and ranks candidates against job descriptions to speed up hiring pipelines.",
    architecture:
      "Resume parsing & text extraction → NLP feature extraction → matching/scoring against job requirements → ranked shortlist of candidates.",
    implementation: "",
    challenges: [
      "Handling unstructured and varied resume formats",
      "Accurately matching skills and experience to job requirements",
    ],
    results: [
      "Automated resume parsing, scoring, and shortlisting in a single pipeline",
    ],
  },
  {
    slug: "airsentinel",
    title: "AirSentinel",
    summary:
      "Multi-model flight risk assessment system combining graph attention, sequence modeling, and gradient boosting.",
    tags: ["GAT/GNN", "LSTM", "XGBoost", "PyTorch Geometric"],
    overview:
      "Evolved from an earlier system (SkyGuard AI) by adding a graph neural network layer to model spatial relationships between aircraft.",
    architecture:
      "GAT/GNN layer (PyTorch Geometric) for inter-aircraft spatial relationships → LSTM for temporal sequences → XGBoost for final risk classification.",
    implementation: "",
    challenges: [
      "Fragile DataFrame indexing and flawed stratified split logic identified in code review",
      "Synthetic temporal sequences used in place of real trajectory history",
    ],
    results: [""],
  },
  {
    slug: "churn-dashboard",
    title: "Customer Churn Prediction Dashboard",
    summary:
      "End-to-end churn prediction system with an interactive dashboard for business stakeholders.",
    tags: ["XGBoost", "SHAP", "Streamlit", "SMOTE"],
    github: "https://github.com/thesarathy/churn-dashboard",
    overview:
      "Predicts telecom customer churn and serves risk scores through an interactive dashboard, built to hit a hard 85%+ recall requirement on the churn class.",
    architecture:
      "Data prep (feature engineering: tenure buckets, service counts, spend) → XGBoost model tuned with SMOTE for class imbalance → SHAP explainability → Streamlit dashboard with three prediction modes (test-set lookup, manual entry, CSV upload).",
    implementation:
      "Trained on the IBM Telco Customer Churn dataset (~7,043 rows). Logistic regression baseline scored 0.8424 AUC; tuned XGBoost with SMOTE reached 0.8287 test ROC-AUC / 0.6226 PR-AUC, with a chosen decision threshold of 0.169 to hit 0.850 recall at 0.477 precision.",
    challenges: [
      "Balancing recall against precision under a hard 85%+ recall requirement on an imbalanced (~27% positive) dataset",
    ],
    results: [
      "85.0% recall on the churn class at a tuned threshold of 0.169",
      "0.8287 test ROC-AUC, 0.6226 PR-AUC",
    ],
  },
];