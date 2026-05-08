export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Testing",
    icon: "TestTube",
    items: [
      { name: "Manual Testing" },
      { name: "Automation Testing" },
      { name: "API Testing" },
      { name: "Performance Testing" },
      { name: "Regression Testing" },
      { name: "Test Case Design" },
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: "Wrench",
    items: [
      { name: "Playwright" },
      { name: "Postman" },
      { name: "JMeter" },
      { name: "Git" },
      { name: "Newman" },
      { name: "GitHub" },
    ],
  },
  {
    category: "Programming",
    icon: "Code",
    items: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Next.js" },
      { name: "React" },
      { name: "REST APIs" },
      { name: "JSON" },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    items: [
      { name: "LangChain" },
      { name: "Hugging Face" },
      { name: "FAISS" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Plotly" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "MongoDB" },
    ],
  },
];
