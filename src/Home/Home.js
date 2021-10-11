import React, { useState } from "react";
import MovieList from "../MovieList/MovieList";
import "./Home.css";

const Home = () => {

  const [Movies, SetMovies] = useState([
    {
      id: 1,
      title: "Bleach",
      poster:
        "https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1",
      description: "",
      dateOfRelease: "",
      type: "adventure",
      actors: ["imane", "naima"],
      trailer: "",
    },

    {
      id: 2,
      title: "Bleach",
      poster:
        "https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1",
      description: "",
      dateOfRelease: "",
      type: "adventure",
      actors: ["imane", "naima"],
      trailer: "",
    },

    {
      id: 2,
      title: "Bleach",
      poster:
        "https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1",
      description: "",
      dateOfRelease: "",
      type: "adventure",
      actors: ["imane", "naima"],
      trailer: "",
    },

    {
      id: 2,
      title: "Bleach",
      poster:
        "https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1",
      description: "",
      dateOfRelease: "",
      type: "adventure",
      actors: ["imane", "naima"],
      trailer: "",
    },
  ]);

  return (
    <div>
      <main>
        
        <MovieList list ={Movies}/>


      </main>
    </div>
  );
};

export default Home;
