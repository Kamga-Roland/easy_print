import React from "react";

const Devis = () => {
  return (
    <div className="mt-10 text-white gap-12 md:flex bg-blue-900 p-4 justify-center items-center">
      <div className="md:text-[30px] mb-4 text-[25px]">Obtenir un devis en ligne gratuitement !</div>
      <div className="">
        <a href="/devis" className="p-3 hover:bg-white hover:text-green-500 rounded-lg bg-lime-500 ">
          DEVIS EN LIGNE
        </a>
      </div>
    </div>
  );
};

export default Devis;