'use client';

import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-[55px]">
      <HoverEffect items={members} />
    </div>
  );
}
export const members = [
  {
    title: "Ansh Singhal (Full Stack Developer)",
    description:
      "The backbone of our technical infrastructure, our full-stack developer seamlessly bridges the gap between front-end aesthetics and back-end functionality. Their expertise ensures that every part of our system runs like clockwork, providing a smooth and efficient user experience.",
    link: "",
  },
  {
    title: "Lakshya Singh (ML Engineer)",
    description:
      "Our MLE is the driving force behind our AI solutions, transforming complex data into actionable insights. With a knack for innovative algorithms and precision, they bring our models to life, ensuring that our technology not only meets but exceeds expectations.",
    link: "",
  },
  {
    title: "Diva Malik (Project Manager)",
    description:
      "The glue that holds our team together, our project manager is a master of coordination and strategy. They keep everything on track, from deadlines to deliverables, ensuring that our projects are executed flawlessly and delivered on time.",
    link: "",
  },
  {
    title: "Kartik Khanna (UI/UX Designer)",
    description:
      "The architect of our user experience, this UI/UX designer ensures that every interaction with our platform is intuitive and engaging. They are passionate about user-centered design, turning complex requirements into elegant and seamless journeys.",
    link: "",
  },
  {
    title: "Tanishq Chauhan (UI/UX Designer)",
    description:
      "Our second UI/UX designer brings a unique perspective to the table, focusing on accessibility and inclusivity. They work tirelessly to ensure that our designs are not only aesthetically pleasing but also welcoming and usable for all.",
    link: "",
  },
  {
    title: "Krishan Roy (Frontend Developer)",
    description:
      "With a keen eye for detail, our frontend developer crafts visually stunning and highly responsive interfaces. They are the creative genius who turns design into dynamic, user-friendly experiences, making sure our applications are as beautiful as they are functional.",
    link: "",
  },
];
