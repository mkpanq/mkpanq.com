"use client";
import { useEffect, useState } from "react";
import { Container } from "./Container";

const GardenBrowser = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    setTimeout(() => {
      console.log("Search phrase is: ", searchPhrase);
    }, 3000);
  }, [searchPhrase]);

  return (
    <>
      <Container className="mt-15">
        <div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="<todo search encouraging>"
            onChange={(event) => setSearchPhrase(event.target.value)}
            className="block w-full rounded-2xl bg-white px-4 py-2 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </Container>
      <p>{searchPhrase}</p>
    </>
  );
};

export default GardenBrowser;
