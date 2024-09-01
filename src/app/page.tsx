"use client";
import React, { useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function LampDemo() {
  const features = [
    {
      title: "Intelligent",
      description:
        "Employs AI to understand legal context, not just keywords.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Customized",
      description:
        "Delivers tailored results for each specific case.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Efficient",
      description:
        "Streamlines legal research, saving time and effort.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Predictive",
      description: "Forecasts potential case outcomes based on dat.",
      icon: <IconCloud />,
    },
    {
      title: "Multilingual",
      description: "Supports multiple languages for wider accessibility.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Secure",
      description:
        "Upholds strict data privacy and confidentiality.",
      icon: <IconHelp />,
    },
    {
      title: "Transparent",
      description:
        "Provides clear reasoning behind its insights.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Transformative",
      description: "Empowers the judiciary for a smarter legal system.",
      icon: <IconHeart />,
    },
  ];
  const [apiResponse, setApiResponse] = useState(""); // State for API response
  const [query, setQuery] = useState(""); // State for input query

  const placeholders = [
    "Breach of contract due to force majeure in the textile industry",
    "Intellectual property infringement in software development",
    "Shareholder disputes in a family-owned company",
    "Arbitration clause enforcement in international commercial contracts",
    "Damages calculation in a construction delay case",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state
  };

  const router = useRouter(); // Initialize the router
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("query", query);
      const response = await fetch(
        "https://b58f-35-233-187-86.ngrok-free.app/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: query }), // Send the query state in the request
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data.response); // Set the response in state

      // Log the response
      console.log("API response:", data.response);

      // Route to the new page with query parameters
      router.push("/search");
    } catch (error) {
      console.error("Error fetching the API:", error);
    }
  };

  return (
    <div className="bg-slate-950">
      <div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-9xl"
          >
            DHARA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
          >
            Digital Hub for Advance Research in Adjudication
          </motion.h1>
        </LampContainer>
      </div>
      <div className="flex items-center justify-center mt-[-200px]">
        <a href="/search">
          <button className="relative inline-flex w-[18rem] h-20 overflow-hidden rounded-full p-[5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              Get Started with DHARA &rarr;
            </span>
          </button>
        </a>
      </div>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
  <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20"
    fill="white"
  />
  <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0">
    <div className="md:w-1/2">
      <h1 className="text-lg font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        DHARA, your Digital Hub for Advanced Research in Adjudication, is an AI-powered legal research engine designed to revolutionize how judges and legal professionals navigate the complexities of India's commercial courts. By harnessing cutting-edge natural language processing and embedding-based retrieval, DHARA goes beyond simple keyword matching, delivering contextually relevant and customized legal insights tailored to each unique case. With multilingual support, predictive analytics, and a commitment to data privacy, DHARA empowers the Indian judiciary to make faster, fairer, and more informed decisions, ultimately contributing to a more efficient and accessible legal system.
      </h1>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src="favicon.png" // Replace with your image path
        alt="DHARA Illustration"
        className="w-full h-auto"
      />
    </div>
  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};