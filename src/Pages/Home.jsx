import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import StoreImage from '../images/img.svg';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid Main">
        <div className="row">

          <div className="col-md-5 mx-auto head">
            <h2 className="heading">Boost Up Your Purchasing with <br /><strong className="brand-name text-primary">RandoStore</strong></h2>
            <h6 className="heading2">We Have Best Products.</h6>
            <Link to="/items" type="button" className="btn btn-outline-primary my-2">Get Started</Link>
          </div>

          <div className="col-md-5 mx-auto">
            <img src={StoreImage} alt="DP" className="image-fluid mainImg" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
