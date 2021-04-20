import React, { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import FlatList from 'flatlist-react';
import Card from '../Components/Card';
import { useHistory } from 'react-router-dom';

const Items = () => {

  const history = useHistory();

  const [Data, SetData] = useState([]);
  const [tempData, SettempData] = useState(null);

  const GetData = async () => {
    await fetch('/items', {
      "method": "Get",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        SetData(json);
      })
  }

  useEffect(() => {
    GetData();
  })

  function AddCart(item) {
    const prevData = JSON.parse(window.localStorage.getItem("checkout"));
    let arr = []
    if (prevData !== null) {
      arr = [...prevData, { item }]
    } else {
      arr = [{ item }]
    }

    window.localStorage.setItem("checkout", JSON.stringify(arr));
    alert("Added to Cart!")
  }

  const DeleteFun = async (id) => {
    await fetch('/items/' + id, {
      "method": "Delete",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("Deleted")
      })
  }

  const setSearch = (e) => {
    const { value } = e.target;
    if (value === "") {
      SettempData(null);
    } else {
      const temData = Data.filter((data) => data.name.toLowerCase().includes(value));
      SettempData(temData);
    }

  }

  return (
    <>
      <Navbar />
      <div className="float-right mr-3 mt-3">
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e)} />
      </div>
      <h1 className="text-center mt-2 ml-5">Items List</h1>

      <div className="container">
        <div className="row">

          <FlatList
            list={tempData != null ? tempData : Data}
            renderItem={(item) =>
              <Card className="col-sm-3 col-md-4 col-lg-4" name={item.name} price={item.price}
                img={item.img} click={() => AddCart(item)} delete={() => DeleteFun(item.id)}
                update={() => history.push("./update/" + item.id)}
              />
            }
            renderWhenEmpty={() => <tr>List is empty!</tr>}

          />

        </div>
      </div>
    </>
  );
}

export default Items;
