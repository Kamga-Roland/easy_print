import React from "react";

const Signalisation = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/src/assets/imp.jpeg"
              className="d-block w-100 h-[100vh]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-bold text-[50px] text-blue-900">
                Signalétique
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h3 className="mt-10 text-orange-300 text-extrabold">
          MARQUEZ VOTRE PRÉSENCE
        </h3>
        <h1 className="text-[35px]">Nos Réalisations en Signalétique</h1>
        <p className="font-bold mb-6 text-center md:mx-20 sm:leading-[40.32px] leading-[36.32px] text-[#8084aa]">
          Nous disposons d'un personnel bien formé et surtout bien outillé qui
          saurait répondre à toutes vos exigences. Désormais, faites confiance
          aux professionnels !
        </p>
      </div>
      <div className="w-75 ml-10 md:ml-20">
        <div className="row md:ml-20">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="/src/assets/sig.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="/src/assets/sig1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <img
              src="/src/assets/sig6.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/src/assets/sig2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="/src/assets/sig3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/src/assets/sig4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="/src/assets/sig5.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="/src/assets/sig2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[35px] ml-20 mt-20 mb-3">
          Obtenir un devis rapide
        </h3>
        <div>
          <form className="md:w-50 md:ml-20 w-70 mx-10 mb-10 shadow-lg p-10">
            <div className="mb-3">
              <label htmlFor='exampleInputEmail1' className="form-label">
                Nom
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn bg-blue-600 text-white hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signalisation;
