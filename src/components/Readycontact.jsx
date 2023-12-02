import React from "react";

const Readycontact = () => {
  return (
    <div className="mt-20 py-10 bg-gradient-to-r from-blue-300 via-purple-200 to-pink-100 bg-blue-200">
      <div className="text-center text-[18px] md:text-[25px] text-bold">
        PRET A DONNER UN NOUVEAU VISAGE A VOS PRODUITS ?
      </div>
      <div className="flex-row text-center justify-center md:flex">
        <p className="mt-8 text-center text-[20px] mb-5">
          Contactez-nous dès maintenant.
        </p>
        <a
          href="/contact"
          className="px-6 py-1 m-9 text-center cursor-pointer bg-green-500 text-white font-bold hover:bg-green-400 rounded-lg"
        >
          cliquez ici
        </a>
      </div>
    </div>
  );
};

export default Readycontact;
