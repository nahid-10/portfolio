export interface Education {
  degree: string;
  institution: string;
  department: string;
  location: string;
  period: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Comilla University",
    department: "Department of CSE",
    location: "Cumilla, Bangladesh",
    period: "2019 – 2024",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Machine Learning",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "Object-Oriented Programming",
    ],
  },
];
