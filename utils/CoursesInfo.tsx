import AI from "../public/ai.jpg";
import IOT from "../public/iot1.jpg";
import BLOCKCHAIN from "../public/blockchain1.jpg";
import CLOUD from "../public/cloud.jpg";

const Data = [
  {
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    menuTitle: "AI & Deep Learning",
    link: "/docs/courses",
    image: AI,
    text: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
    quarterLinks: [
      {
        title:
          "Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        link: "#",
      },
      {
        title: "Quarter IV AI-361: Deep Learning and MLOps",
        link: "#",
      },
    ],
  },
  {
    title: "Cloud-Native Computing Specialization",
    menuTitle: "Cloud-Native",
    link: "/docs/courses",
    image: CLOUD,
    text: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.`,
    quarterLinks: [
      {
        title:
          "Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)",
        link: "#",
      },
      {
        title:
          "Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
        link: "#",
      },
    ],
  },
  {
    title: "Ambient Computing and IoT Specialization",
    menuTitle: "IOT Specialization",
    link: "/docs/courses",
    image: IOT,
    text: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.`,
    quarterLinks: [
      {
        title:
          "Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        link: "#",
      },
      {
        title: "Quarter IV AC-361: Embedded Programming using C and Rust",
        link: "#",
      },
    ],
  },
  {
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    menuTitle: "Web 3.0 & Blockchain",
    link: "/docs/courses",
    image: BLOCKCHAIN,
    text: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.`,
    quarterLinks: [
      {
        title:
          "Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        link: "#",
      },
      {
        title:
          "Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        link: "#",
      },
    ],
  },
];

export default Data;
