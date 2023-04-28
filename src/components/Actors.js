import React from "react";
import { actors } from "../data";


function Actors() {

  const actorItems = actors.map((actor) => {
    return (
      <Actor
        key = {actor.name}
        name={actor.name}
        movie={actor.movies}/>
    )
  })
  return (
     <div>
    <h1>Actors Page</h1>
    <div>{actorItems}</div>
  </div>
  )
}
function Actor({name, movie}) {

  const moviesList = movie.map((movie) =>(
    <li key={movie}>{movie}</li>
    ))
return (
  <div>
    <h4>{name}</h4>
    <ul>{moviesList}</ul>
  </div>
)
   
   
}
export default Actors;
