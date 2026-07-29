export type Publication = {
  title: string;
  venue: string;
  date: string;
  authors: string[];
  paperId?: string;
  pages?: string;
  isbn?: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Unlocking the Black Box: An Explainable Hybrid Framework for Aero-Engine RUL Prediction",
    venue:
      "International Conference on Signal, Systems, and Computing for Next-Gen Automation (ICSSCNA-2026), IEEE",
    date: "July 2026",
    authors: [
      "Karthika Natarajan",
      "Vignesh G A",
      "Sarathy S P",
      "Hari Prasath M",
      "K Aravind (corresponding author)",
    ],
    paperId: "ICSSCNA-934",
    pages: "1257–1265",
    isbn: "979-8-3315-7038-5",
    link: "", // add DOI/IEEE Xplore link once available
  },
];