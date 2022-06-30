import { Project } from "../types/Project";

const projects: Project[] = [
  {
    name: "This Website",
    dates: "April 2022",
    description:
      "My first 'project' that I built using React. Paired with Vercel's Next.js framework, I learned about mixed rendering modes, Typescript and optimising content for fast delivery.",
  },
  {
    name: "SmartGen",
    dates: "March 2022",
    description:
      "Intelligently generated buildings in Minecraft using a genetic algorithm and a modern tech stack.",
  },
  {
    name: "Sticky Board - Retro Sounds in the Modern Age",
    link: "https://sticky-board.dgrinbergs.com",
    dates: "March 2022",
    description:
      "I created this fun project to learn about Nuxt.js and extends my knowledge of Vue.js. Why not give it a try?",
  },
  {
    name: "CS:GO Item Sniping Bot",
    dates: "November 2021",
    description:
      "I have been buying, selling, and trading CS:GO items (before NFTs were cool) and thought it would be an interesting challenge to program something that can do it for me",
  },
  {
    name: "Fivium Hackday - What's for Lunch?",
    dates: "April 2021",
    description:
      "I was told that WebSockets always win prizes on Hackdays. Having never used them before, it was the perfect opportunity to learn a new technology and see what I can come up with within 24 hours",
  },
];

export default projects;
