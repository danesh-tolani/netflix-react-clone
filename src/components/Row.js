import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg  for particular size images

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if dependency [] is empty, run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchURL); // this sends url as http://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_networks=213
      //   console.log(request); // data.results
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]); // when ever there is an external variable used inside useEffect (fetchURL in the below example), we need to put that in the dependency array

  // console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* row_poster */}
        {movies.map((movie) => {
          return <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarger"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />;
        })}
      </div>
    </div>
  );
}

export default Row;
