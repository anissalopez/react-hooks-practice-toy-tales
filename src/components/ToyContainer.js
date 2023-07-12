import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, updateLikes, removeToy}) {

  const ToyDisplay = toys.map((toy) => {
    return <ToyCard removeToy={removeToy} updateLikes={updateLikes} toyName ={toy.name} toyImage={toy.image} toyLikes={toy.likes} id={toy.id} key={toy.id}/>
  })
  return (
    <div id="toy-collection">{ToyDisplay}</div>
  );
}

export default ToyContainer;
