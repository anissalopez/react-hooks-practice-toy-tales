import React, {useState} from "react";

function ToyCard({toyName, toyImage, toyLikes, id, updateLikes, removeToy}) {



function likeHandler(){

  

  fetch(`http://localhost:3001/toys/${id}`,{
    method: "PATCH",
    headers:{
      "Content-Type":"application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      likes: toyLikes++
    })
  })
  .then((response) => response.json())
  .then((data) => updateLikes(data))
  
}


function deleteToy(){

  console.log(id)
  fetch(`http://localhost:3001/toys/${id}`, {
    method: "DELETE"
  })
  .then((response) => response.json())
  .then(() => removeToy(id))
  
}
  return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={likeHandler}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
