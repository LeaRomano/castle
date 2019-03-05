import React, { Component } from "react";
import logo from "./relais.png";
import banner from "./chateau.jpg";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import "./App.css";
import getArrayFromRelais from "./components/relais.js";
import getArrayFromMichelin from "./components/restaurants.js";
import getRestaurants from "./components/restaurantsRelais.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-FirstHeader">
          <a href="#" className="App-relais">
            {" "}
            RELAIS&CHÂTEAUX{" "}
          </a>
          <nav className="Menu">
            <a href="#"> Home </a>
            <a href="#App-BestRated"> Best Rated </a>
            <a href="#Filter"> Filter by</a>
          </nav>
        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Find the best Relais & Château for your next week-end !</p>
        </header>
        <img src={banner} className="App-banner" alt="banner" />
        <section className="App-BestRated">
          <p className="Title" id="App-BestRated">
            Best rated Relais & Château for this week-end
          </p>
          <hr className="separator" />
          <img src={first} className="first" />
          <p>1- </p>
          <img src={second} className="second" />
          <p>2- </p>
          <img src={third} className="third" />
          <p>3- </p>
        </section>

        <section className="Filter">
          <p className="Title" id="Filter">
            Filter by
          </p>
          <hr className="separatorWhite" />
          <select className="FilterBy">
            <option>Stars</option>
            <option>Name</option>
            <option>Price</option>
            <option>Distance</option>
          </select>
          <button id="Ok" className="Ok">
            Ok !
          </button>
        </section>

        <footer className="container-fluid footer">
          <h2> Léa Romano - IBO3 - février 2019 </h2>
        </footer>
      </div>
    );
  }
}

export default App;
