import React from "react";
import { movies } from "../data";

function Movies() {

  const movieItems = movies.map((movie) => {
    return(
      <Movie key={movie.title}
              title={movie.title}
              time={movie.time}
              genres={movie.genres}/>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      <div> {movieItems}</div>
    </div>
  );
}

function Movie({title, time, genres}) {
  const genresList = genres.map((genre) => (
    <li key={genre}>{genre}</li>
  ))
  return (
    <div>
      <h4>{title}</h4>
      <h5>{time}</h5>
      <ul>{genresList}</ul>
    </div>
  )
}
export default Movies;