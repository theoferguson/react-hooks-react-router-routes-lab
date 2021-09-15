import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
  {movies.map(movie =>{
    return (
      <div id={movie.time} >{movie.title} {movie.time}
      <ul>
        {movie.genres.map(genre => {
          return (
            <li id={genre}>{genre}</li>
          )
        })}
      </ul>
      </div>
    )
  })} 
  </div>;
}

export default Movies;
