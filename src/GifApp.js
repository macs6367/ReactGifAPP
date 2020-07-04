import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <h2 style={{textAlign:"center", color: "#FFF"}}>Gifs APP</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
