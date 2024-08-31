"use client";
import React, { useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";

export default function LampDemo() {
  const [apiResponse, setApiResponse] = useState(''); // State for API response
  const [query, setQuery] = useState(''); // State for input query

  const placeholders = [
    "Breach of contract due to force majeure in the textile industry",
    "Intellectual property infringement in software development",
    "Shareholder disputes in a family-owned company",
    "Arbitration clause enforcement in international commercial contracts",
    "Damages calculation in a construction delay case"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state
  };

  const router = useRouter(); // Initialize the router
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("query", query);
      const response = await fetch("https://b58f-35-233-187-86.ngrok-free.app/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }), // Send the query state in the request
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data.response); // Set the response in state

      // Log the response
      console.log("API response:", data.response);

      // Route to the new page with query parameters
      router.push('/search');

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
      <div className="h-screen"></div>
    </div>
  );
}