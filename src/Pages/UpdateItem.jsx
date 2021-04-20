import React, { useState,useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import { useParams,useHistory } from 'react-router-dom';

const UpdateItems = () => {

    const {id} = useParams();
    const history = useHistory();

  const [Input, setInput] = useState({
    name: '',
    price: '',
    img: ''
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

  useEffect(()=>{
     fetch('/items/'+id,{
        "method":"GET",
        headers: {
          'Content-Type': 'application/json',
        }
        })
      .then(response => response.json())
      .then(json => {
         setInput(json);
      })
  },[])

  const SubmitForm = async (e) =>{
    e.preventDefault();
    if(Input.name === "" || Input.price === "" || Input.imgUrl === ""){
        return window.alert("Fill all the Fields");
    }
    if(Input.price<0){
        return alert("Negative value is not allowed")
    }

    await fetch('/items/'+id,{
      "method":"PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          id,
          name: Input.name,
          price: Input.price,
          img: Input.img
      })
    })
    .then(response => response.json())
    .then(json => {
        alert("Item Updated!")
        history.push('/items');
    })

    setInput({
      name:'',
      price:'',
      img:''
    })
  }

  return (
    <>
      <Navbar />

      <div className="formbox mx-auto mt-5 py-3">
        <h1 className="text-center">Update Items</h1>
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
              name="imgUrl" onChange={ChangeEvent} value={Input.img} />
          </div>

          <div className="form-group submit">
            <button type="submit" className="btn btn-success">Update Item</button>
          </div>

        </form>
      </div>

    </>
  );
}

export default UpdateItems;
