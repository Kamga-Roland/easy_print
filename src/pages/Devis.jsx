import React from "react";

const Devis = () => {
  return (
    <div className="flex">
      <div>image</div>
      <div>
        <h3>MARQUEZ VOTRE PRÉSENCE</h3>
        <h1>Contact info</h1>
        <h1>Direction générale</h1>
        <p>Quartier Fouda- Nvx Immeuble Blanc (Face Exprexx Union)</p>
        <p>Tel: (+237) 657 689 774</p>
        <p>bbekono9@gmail.com</p>
      </div>
      <div>
        <h3>MARQUEZ VOTRE PRÉSENCE</h3>
        <h1>
          Pour calculer votre devis personnalisé, nous avons besoin des
          informations qui se trouvent dans le formulaire ci-dessous. Veuillez
          nous le renvoyer, et recevez votre devis dans les brefs délais.
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-50 md:ml-20 w-70 mx-10 mb-10 shadow-lg p-10"
        >
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">
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
            <label for="exampleInputentreprise" class="form-label">
              Entreprise
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputentreprise"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputtel" class="form-label">
              Telephone
            </label>
            <input type="text" class="form-control" id="exampleInputtel" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Objet du devis
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Donner l'objet de votre demande"
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
  );
};

export default Devis;
