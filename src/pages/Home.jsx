import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Partner from "../components/Partner";
import Devis from "../components/Devis";
import Readycontact from "../components/Readycontact";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/src/assets/WhatsApp Image 2023-11-10 at 15.30.42.jpeg"
              className="d-block w-100 h-[100vh]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-bold text-[50px] text-white">imprimerie</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/src/assets/WhatsApp Image 2023-11-11 at 12.09.06.jpeg"
              className="d-block w-100 h-[100vh]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-bold text-[50px] text-black">Sérigraphie</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/sig1.jpg"
              className="d-block w-100 h-[100vh]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-bold text-[50px] text-red-800">
                Signalisation
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-blue-900 rounded-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden bg-blue-900">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-blue-900 rounded-lg"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden bg-blue-900">Next</span>
        </button>
      </div>
      <Main />
      <Devis />
      <Partner />
      <Readycontact />
    </div>
  );
};

export default Home;
