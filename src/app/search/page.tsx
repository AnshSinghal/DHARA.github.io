'use client';

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { PlaceholdersAndInputSearch } from "@/ui-components/search-bar";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";



export default function SearchPage() {

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

        } catch (error) {
          console.error("Error fetching the API:", error);
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
            <div className="mt-20 text-white px-20">
            {/* <h1>Query Result</h1> */}
            {/* {(query && <p><strong>Query:</strong> {query}</p>)} */}
            {apiResponse && <p><strong>Response:</strong> {apiResponse}</p>}
        </div>
        </div>
    );
}