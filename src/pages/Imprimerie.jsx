import React from "react";

const Imprimerie = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/src/assets/impr6.png"
              className="d-block w-100 h-[100vh]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-bold text-[50px] text-blue-500">imprimerie</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h3 className="mt-10 text-orange-300 text-extrabold">
          MARQUEZ VOTRE PRÉSENCE
        </h3>
        <h1 className="text-[35px]">Nos Réalisations en Imprimerie</h1>
        <p className="font-bold mb-6 text-center md:mx-20 sm:leading-[40.32px] leading-[36.32px] text-[#8084aa]">
          Nous vous offrons une gamme variée de support avec des impressions
          sans taches dignes de notre centre spécialisé d'impression. <br />
          Faites y un tour et vérifiez par vous même.
        </p>
      </div>
      <div className="w-75 ml-10 md:ml-20">
        <div class="row md:ml-20">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="/src/assets/imp1.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="/src/assets/imp2.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
          <img
              src="/src/assets/flyer.jpeg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src="/src/assets/impr5.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
          />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/src/assets/imp4.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="/src/assets/impr3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[35px] ml-20 mt-20 mb-3">
          Obtenir un devis rapide
        </h3>
        <div className="#">
          <form className="w-70 md:ml-20 md:w-50 mx-10 mb-10 shadow-lg p-10">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nom
              </label>
              <input
                type="name"
                class="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              class="btn bg-blue-600 text-white hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Imprimerie;
