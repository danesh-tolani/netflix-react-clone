import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner_contents">
        {/* Background image */}
        <h1></h1>
        {/* div > 2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
