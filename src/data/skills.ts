export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Machine Learning / Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "XGBoost",
      "U-Net",
      "EfficientNet",
      "DenseNet",
      "GAT / GNN (PyTorch Geometric)",
      "SHAP",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "SQL", "R"],
  },
  {
    category: "Data & Databases",
    items: ["pandas", "NumPy", "scikit-learn", "DBMS / schema design", "data pipelines"],
  },
  {
    category: "Tools & Platforms",
    items: ["Streamlit", "Git/GitHub", "VS Code", "Google Colab"],
  },
  {
    category: "Web",
    items: ["React.js", "HTML", "CSS", "REST APIs", "Figma"],
  },
];