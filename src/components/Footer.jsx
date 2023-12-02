import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 bg-blue-950">
      <div className="flex flex-row gap-8 justify-center ">
        <div className="w-5/6 lg:w-2/6 text-justify items-center justify-center flex-wrap">
          <img
            src="/src/assets/logo1.png"
            alt="logo"
            className="w-40 h-auto mb-3"
          />
          <p className="text-white pl-3 opacity-40">
            Easy Print décline sa responsabilité d'entreprise en premier lieu,
            en étant une structure de référence pour ses clients. Ce qui
            signifie accompagner leurs besoins du quotidien et participer
            incessamment à rehausser la qualité de leur image.
          </p>
        </div>
        <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
          <h2 className="font-bold text-white mb-3">Navigation</h2>
          <p className="text-white opacity-40">
            <a className="cursor-pointer hover:text-pink-500" href="/">
              Accueil
            </a>
            <br />{" "}
            <a className="cursor-pointer hover:text-pink-500" href="/imprimerie">
              Imprimerie
            </a>
            <br />{" "}
            <a className="cursor-pointer hover:text-pink-500" href="/sérigraphie">
              Sérigraphie
            </a>
            <br />
            <a className="cursor-pointer hover:text-pink-500" href="/signalisation">
              Signalisation
            </a>
            <br />{" "}
            <a className="cursor-pointer hover:text-pink-500" href="/contact">
              Contact
            </a>
          </p>
        </div>
        <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
          <h2 className="font-bold text-white mb-3">Adrèsse</h2>
          
          <br />
          <a
            href="/contact"
            className="p-2 text-[14px] hover:bg-pink-400 font-bold rounded-2xl bg-pink-500 text-white"
          >
            Contactez-nous
          </a>
        </div>
        <div className="w-2/6 hidden lg:block items-center justify-center flex-wrap">
          <h2 className="font-bold text-white mb-3">Nos Services</h2>
          <p className="text-white opacity-40">
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Recherche et gestion des talents
            </a>
            <br />
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Gestion à distance et supervision
            </a>
            <br />
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Networking et facilitation des relations
            </a>
            <br />
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Gestion financière
            </a>
            <br />{" "}
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Conseil en investissements et création d'entités
            </a>
            <br />{" "}
            <a className="cursor-pointer hover:text-pink-500" href="/services">
              Marketing et communication
            </a>
          </p>
        </div>
        <div className="w-1/6 hidden lg:block rounded-lg items-center justify-center flex-wrap">
          <h2 className="font-bold text-white text-center mb-3">
            Nos Partenaires
          </h2>
          <div className="flex gap-4">
            <img
              src="/src/assets/cinaf.png"
              alt="cinaf"
              className="w-20 h-20"
            />
            <img
              src="/src/assets/50AFC.png"
              alt="50AFC"
              className="w-20 h-20"
            />
          </div>
          <br />
          <div className="flex gap-4">
            <img src="/src/assets/MbC.png" alt="mbc" className="w-20 h-20" />
            <img
              src="/src/assets/NADOSSO.png"
              alt="nadosso"
              className="w-20 h-20"
            />
          </div>
        </div>
      </div>
      <div className="md:flex items-center text-center gap-8 justify-center mt-10">
        <div className="items-center justify-between flex-wrap gap-4">
          <p className="text-white mt-3 lg:mt-0 opacity-50">
            Politique de confidentialité
          </p>
          <p className="text-white mt-3 lg:mt-0 opacity-50">
            Conditions d'utilisation
          </p>
        </div>
        <div>
          <p className="text-white mt-3 lg:mt-0 opacity-50">Copyright 2023</p>
          <p className="text-white mt-3 lg:mt-0 opacity-50">
            All rights reserved.
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-3 lg:mt-0 gap-4">
            <a href="#">
              <FaLinkedin className="w-6 h-6 fill-white " />
            </a>
            <a href="#">
              <FaFacebook className="w-6 h-6 fill-white" />
            </a>
            <a href="https://wa.me/+237657689774">
              <FaWhatsapp className="w-6 h-6 fill-white" />
            </a>
            <a href="mailto:bbekono9@gmail.com">
              <FaEnvelope className="w-6 h-6 fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
