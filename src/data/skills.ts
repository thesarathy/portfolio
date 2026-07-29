export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Machine Learning / Deep Learning",
    items: [
      "PyTorch",
      "XGBoost",
      "U-Net",
      "EfficientNet",
      "GAT / GNN (PyTorch Geometric)",
      "SHAP",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "R"],
  },
  {
    category: "Tools & Platforms",
    items: ["Streamlit", "pandas", "scikit-learn", "Git/GitHub"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "JavaScript (ES6)"],
  },
];