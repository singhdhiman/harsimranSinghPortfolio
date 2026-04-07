export type Role = {
  title: string;
  company: string;
  client?: string;
  dates: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "React / Full Stack Developer",
    company: "Saksoft",
    client: "Blue Yonder",
    dates: "Mar 2026 – Present",
    highlights: [
      "Shipping React + TypeScript features with a focus on performance, accessibility, and maintainable architecture.",
      "Partnering with product/QA/backend teams to deliver reliable increments in Agile sprint cycles.",
      "Reducing UI regressions by standardizing reusable components and UI patterns.",
      "Improving responsiveness and perceived performance through rendering and data-fetching optimizations.",
    ],
  },
  {
    title: "React.js Developer",
    company: "SpineorWebservices Pvt. Ltd",
    dates: "Feb 2021 – Feb 2026",
    highlights: [
      "Built React dashboards and workflows with Redux (Thunk/Saga) for reliable state and async flows.",
      "Delivered analytics visualizations and real-time insights for cloud operations.",
      "Integrated Node.js services/APIs for multi-cloud management features.",
      "Contributed to scalable microservices-aligned UI architecture and internal ticketing workflows.",
    ],
  },
];

