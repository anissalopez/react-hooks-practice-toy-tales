import React, {useState} from "react";

function ToyForm({addToy}) {
  const [toyForm, setForm] = useState({
    name: "",
    image: "",
    likes: 0,
  })


function handleChange(e){
  const updatedForm = {...toyForm, [e.target.name]: e.target.value}

  setForm(updatedForm)
}


function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:3001/toys",{
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(toyForm)
  })
    .then((response) => response.json())
    .then((data) => addToy(data))
}


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value= {toyForm.name}
        />
        <br />
        <input onChange={handleChange}
          type="text"
          value={toyForm.image}
          name= "image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
