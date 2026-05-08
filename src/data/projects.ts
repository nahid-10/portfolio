export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Manual Testing (nopCommerce)",
    description:
      "Created comprehensive test cases, executed functional and regression testing, and reported defects with detailed bug reports for nopCommerce e-commerce platform.",
    image: "/assets/manual testing logo.avif",
    tags: ["Manual Testing", "Test Cases", "Bug Reports", "Regression"],
    github: "https://github.com/nahid-10/manual_software_testing_nopCommerce",
  },
  {
    title: "End-to-End Automation Testing",
    description:
      "Automated end-to-end UI tests using Playwright, enabling faster regression cycles and reliable cross-browser test coverage.",
    image: "/assets/automation.webp",
    tags: ["Playwright", "TypeScript", "E2E Testing", "Automation"],
    github:
      "https://github.com/nahid-10/end_to_end_testing_framework_playwright",
  },
  {
    title: "Performance Testing with JMeter",
    description:
      "Performed load and stress testing using Apache JMeter to analyze system performance, identify bottlenecks, and validate scalability under peak loads.",
    image: "/assets/jmeter.jpg",
    tags: ["JMeter", "Performance", "Load Testing", "Stress Testing"],
    github: "https://github.com/nahid-10/performance_testing_using_jmeter",
  },
  {
    title: "API Testing with Postman",
    description:
      "Validated REST APIs using Postman with automated assertions, authentication flows, environment variables, and comprehensive collection reports.",
    image: "/assets/api-testing.avif",
    tags: ["Postman", "REST API", "Newman", "API Automation"],
    github: "https://github.com/nahid-10/API_testing_using_POSTMAN",
  },
  {
    title: "Sports Performance Analysis",
    description:
      "Scraped and analyzed football player data using Python and Plotly to identify top scorers, young talents, and performance trends across multiple seasons.",
    image: "/assets/football.jpg",
    tags: ["Python", "Plotly", "Data Analysis", "Web Scraping"],
    github: "https://github.com/nahid-10/sports-analysis-project",
  },
  {
    title: "AI Chatbot using LLM",
    description:
      "Built a book-based intelligent chatbot using LangChain, FAISS vector store, and Hugging Face models for semantic search and context-aware responses.",
    image: "/assets/chatbot.jpg",
    tags: ["LangChain", "FAISS", "Hugging Face", "Python", "LLM"],
    github: "https://github.com/nahid-10",
  },
];
