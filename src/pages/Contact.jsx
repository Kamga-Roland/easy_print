import React from "react";

import { useRef } from "react";
//import emailjs from "@emailjs/browser";

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_uhhn85b",
      "template_8xxxaz4",
      form.current,
      "ToMUuCnskH4VLsW11"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Contact = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="mt-10 text-orange-300 text-extrabold">MARQUEZ VOTRE PRÉSENCE</h3>
        <h1 className="text-[35px]">Préoccupations / Suggestions ?</h1>
      </div>
      <div className="flex mt-10 lg:flex-row flex-col gap-8">
        <div className="flex-[0.95] flex justify-center flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-50 md:ml-20 w-70 mx-10 mb-10 shadow-lg p-10"
          >
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
        <div className="flex-[0.95] flex justify-center flex-col">
          <img
            src="/callus.svg"
            alt="call us"
            className="w-[90%] h-auto rounded-3xl object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
