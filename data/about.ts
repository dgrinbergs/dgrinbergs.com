import Section from "../types/Section";

const sections: Section[] = [
  {
    name: "Education",
    children: [
      {
        heading:
          "University of Kent - BSc Computer Science with a Year in Industry",
        dates: "September 2018 - June 2022",
        text: [
          "Graduated with a First Class Honours",
          "4x Scholarships of Academic Excellence",
        ],
      },
      {
        heading: "South Essex College - BTEC Level 3 Extended Diploma in IT",
        text: ["186 UCAS Points", "D*D*D* final grade"],
      },
    ],
  },
  {
    name: "Professional Experience",
    children: [
      {
        heading: "Fivium Ltd - Junior Software Developer",
        dates: "August 2022 - Present",
        text: [
          "Writing various apps in Java Spring Boot and GraphQL",
        ],
      },
      {
        heading: "University of Kent - Peer Tutoring",
        dates: "September 2021 - April 2022",
        text: [
          "I help students that are in the first year of their computer science degree get to grips with object-oriented programming using Java",
        ],
      },
      {
        heading: "Fivium Ltd - Trainee + Junior Software Developer",
        dates: "June 2020 - September 2021",
        text: [
          "I was working in a team to develop enterprise apps which would be used by many UK central government departments",
          "Apps were written in Java 11 using the Spring Framework and complete with unit, integration and end-to-end tests which I was in charge of writing",
        ],
      },
      {
        heading: "University of Kent - Verifiable Credentials",
        dates: "July 2019 - October 2020",
        text: [
          "Setting up and managing Ubuntu servers",
          "Developing, testing and preparing proof-of- concept applications to acquire project funding",
          "Writing REST APIs using JavaScript",
          "Working with secure technologies with FIDO2 and W3C's WebAuthn",
        ],
      },
      {
        heading: "Lloyds Bank - Markets Engineering (Work experience)",
        dates: "Feb 2017 (2 weeks), Jan 2018 (2 weeks)",
        text: [
          "Shadowing various developers with Java and SQL backgrounds",
          "Brief introduction to Agile development and Kanban",
          "Tour of London Datacenter server floor",
        ],
      },
    ],
  },
  {
    name: "Skills",
    children: [
      {
        heading: "Backend",
        text: [
          "Node.js, Express and TS",
          "Spring + Spring Boot",
          "Postgres, Oracle SQL and MongoDB",
          "PHP",
        ],
      },
      {
        heading: "Frontend",
        text: [
          "Vue and Nuxt.js",
          "React and Next.js (this site!)",
          "Tailwind CSS",
        ],
      },
      {
        heading: "Other",
        text: [
          "UNIX server setup and maintenance",
          "Docker containerisation",
          "Traefik and NGINX",
          "Git and Perforce version control systems",
          "Grafana and Prometheus",
        ],
      },
    ],
  },
];

export default sections;
