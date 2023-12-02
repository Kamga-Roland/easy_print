import React from "react";

const Main = () => {
  return (
    <>
      <div>
        <div className=" lg:mt-10 flex lg:flex-row flex-col gap-8">
          <div className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4 relative">
            <div className="justify-center">
              <h3 className="text-orange-300 text-extrabold ">NOS OFFRES</h3>
              <h1 className="text-[35px]">Ce que nous faisons</h1>
              <h4 className=" font-bold mb-6 text-left  sm:leading-[40.32px] leading-[36.32px] text-[#8084aa]">
                Easy Print vous offres des services de qualité dans les domaines
                suivants: Imprimerie, Sérigraphie et Signalétique.
              </h4>
              <a
                href="#"
                className="p-3 mb-3 sm:justify-center bg-pink-500 text-white text-extrabold rounded-lg"
              >
                VOIR PLUS
              </a>
            </div>
          </div>

          <div className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4 relative">
            <div className="justify-center">
              <img
                src="/src/assets/WhatsApp Image 2023-11-11 at 12.09.09.jpeg"
                alt="mission1"
                className="w-30 h-30 mb-10 px-[30%]"
              />
              <h1 className="text-center mb-3 text-extrabold text-[25px]">
                Imprimerie
              </h1>
              <h4 className=" font-bold text-left text-[13px] lg:text-justify sm:leading-[40.32px] leading-[36.32px] text-[#8084aa]">
                Nous vous offrons une gamme variée de support avec des
                impressions sans taches dignes de notre centre spécialisé
                d'impression. Faites y un tour et vérifiez par vous même.
              </h4>
            </div>
          </div>
          <div className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4  relative">
            <img
              src="/src/assets/WhatsApp Image 2023-11-11 at 12.09.08 (2).jpeg"
              alt="mission1"
              className="w-30 h-30 mb-10 px-[30%]"
            />
            <div>
              <h1 className="text-center mb-3 text-extrabold text-[25px]">
                Sérigraphie
              </h1>
              <h4 className="font-bold text-left text-[13px] lg:text-justify sm:leading-[40.32px] leading-[36.32px] text-[#8084aa]">
                Vous n'aurez qu'à nous proposer une illustration, nous nous
                chargeons de la reproduire sur le support de votre choix, avec
                une fidélité propre à nous.
              </h4>
            </div>
          </div>
          <div className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4 relative">
            <img
              src="/src/assets/WhatsApp Image 2023-11-11 at 12.09.08.jpeg"
              alt="mission1"
              className="w-30 h-30 mb-10 px-[30%]"
            />
            <div>
              <h1 className="text-center mb-3 text-extrabold text-[25px]">
                Signalétique
              </h1>
              <h4 className="font-bold text-left text-[13px] lg:text-justify sm:leading-[30.32px] leading-[36.32px] text-[#8084aa]">
                Nous disposons d'un personnel bien formé et surtout bien outillé
                qui saurait répondre à toutes vos exigences. Désormais, faites
                confiance aux professionnels !
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
