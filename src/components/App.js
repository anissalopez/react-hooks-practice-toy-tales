import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((data) => setToys(data))
  }, [])


  function updateLikes(toyLiked){
    const updatedToys = toys.filter((toy) => {
      if(toy.id === toyLiked.id){
        return {
          ...toy,
          likes: toy.likes++
      }
    }
      else return toy;
    })
    setToys(updatedToys);
  }

  function addToy(newToy){
    const updatedToys = [...toys, newToy]
    setToys(updatedToys)
  }

function removeToy(id){

  const updatedToys = toys.filter(toy => toy.id != id)
  setToys(updatedToys)
  
}
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer removeToy={removeToy} updateLikes={updateLikes} toys={toys}/>
    </>
  );
}

export default App;
