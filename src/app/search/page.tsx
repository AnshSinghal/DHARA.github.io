'use client';

// import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { PlaceholdersAndInputSearch } from "@/ui-components/search-bar";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function SearchPage() {
    const [apiResponse, setApiResponse] = useState(''); // State for API response
    const [query, setQuery] = useState(''); // State for input query
    const [loading, setLoading] = useState(false); // State for loading

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
    
        setLoading(true); // Start loading
    
        try {
          console.log("query", query);
          const response = await fetch("https://86d1-103-47-74-66.ngrok-free.app/query", {
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

        } catch (error) {
          console.error("Error fetching the API:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };

    return (
        <div>
            <div className="flex px-64 items-center justify-center h-auto w-screen mt-[8rem] z-200">
            <PlaceholdersAndInputSearch
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
            <div className="mt-20 text-white px-20 items-center justify-center">
            {loading ? (
              <div className="flex justify-center items-center">
                {/* Loader element */}
                <div className="loader"></div>
              </div>
            ) : (
              apiResponse && (
                <div className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
                  <strong>Response:</strong> <TextGenerateEffect words={apiResponse} />
                </div>
              )
            )}
        </div>
        </div>
    );
}
