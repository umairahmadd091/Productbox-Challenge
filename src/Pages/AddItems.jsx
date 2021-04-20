import React, { useState } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';

const AddItems = () => {

  const [Input, setInput] = useState({
    name: '',
    price: '',
    imgUrl: ''
  })

  const ChangeEvent = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (Input.name === "" || Input.price === "" || Input.imgUrl === "") {
      return window.alert("Fill all the Fields");
    }
    if (Input.price < 0) {
      return alert("Negative value is not allowed")
    }

    await fetch('/items', {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Input.name,
        price: Input.price,
        img: Input.imgUrl
      })
    })
      .then(response => response.json())
      .then(json => {
        alert("Item Added");
      })

    setInput({
      name: '',
      price: '',
      imgUrl: ''
    })
  }

  return (
    <>
      <Navbar />

      <div className="formbox mx-auto mt-5 py-3">
        <h1 className="text-center">Add Items</h1>
        <form className="form mx-auto" method="POST" onSubmit={SubmitForm}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Item Name" required
              name="name" onChange={ChangeEvent} value={Input.name} />
          </div>

          <div className="form-group">
            <input type="number" className="form-control" placeholder="Item Price" required
              name="price" onChange={ChangeEvent} value={Input.price} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder="Image URL" required
              name="imgUrl" onChange={ChangeEvent} value={Input.imgUrl} />
          </div>

          <div className="form-group submit">
            <button type="submit" className="btn btn-success">Add Item</button>
          </div>

        </form>
      </div>

    </>
  );
}

export default AddItems;
