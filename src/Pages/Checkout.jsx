import React, { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import FlatList from 'flatlist-react';
import { useHistory } from 'react-router-dom';

const Checkout = () => {

  const [total, setTotalPrice] = useState(0)

  const history = useHistory();

  const data = JSON.parse(window.localStorage.getItem("checkout"));

  const clearData = () => {
    localStorage.removeItem('checkout');
    history.push('/items')
  }

  const totalPrice = () => {
    if (data !== null) {
      let total = 0;
      data.map((item) => {
        total = total + parseInt(item.item.price);
      })
      setTotalPrice(total);
    }
  }
  useEffect(() => {
    totalPrice();
  })

  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center">Checkout Page</h1>

      <div className="container">

        <table className="table" border="1px">
          <tr align="center">
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
          </tr>


          <FlatList
            list={data}
            renderItem={(item, index) =>
              <>
                <tr align="center">
                  <td>{index + 1}</td>
                  <td>{item.item.name}</td>
                  <td>{item.item.price}</td>
                  <td><img src={item.item.img} alt="pic" className="CartImg" /></td>
                </tr>
              </>
            }
            renderWhenEmpty={() => <tr><td colSpan="4" align="center">Checkout List is empty!</td></tr>}
          />

          <tr>
            <td colSpan="4">
              <h3 className="float-left">Total: {total}</h3>
              <button className="btn btn-success float-right" onClick={clearData}>Checkout</button>
            </td>
          </tr>
        </table>


      </div>

    </div>
  );
}

export default Checkout;
