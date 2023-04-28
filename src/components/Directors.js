import React from "react";
import { directors} from "../data";

function Directors() {

  const directorItems = directors.map((director) => {
    return(
      <Director
        key={director.name}
        name={director.name}
        movies={director.movies}/>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      <div>{directorItems}</div>
    </div>
  );
}

function Director({name, movies}) {
  const moviesList = movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ))
  return (
    <div>
      <h4>{name}</h4>
      <ul>{moviesList}</ul>
    </div>
  )
}
export default Directors;