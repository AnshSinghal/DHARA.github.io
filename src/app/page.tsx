"use client";
import React, { useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

export default function LampDemo() {
  const [apiResponse, setApiResponse] = useState(''); // State for API response
  const [query, setQuery] = useState(''); // State for input query

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
  ];
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "/download.jpg",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "/download.jpg",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "/download.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "/download.jpg",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "/download.jpg",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "/download.jpg",
    },
  ];
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log('query', query);
      const response = await fetch('https://4c24-34-45-176-255.ngrok-free.app/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }), // Send the query state in the request
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data.response); // Set the response in state

      // consol log the response
      console.log('API response:', data.response);
    } catch (error) {
      console.error('Error fetching the API:', error);
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
          <div className="absolute flex px-64 items-center justify-center w-screen h-[100px] mt-[22rem] z-200">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </LampContainer>
      </div>
      <div className="h-screen">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-center text-white mt-4">
          Response: {apiResponse} {/* Display the API response */}
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <HoverEffect items={projects} />
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}