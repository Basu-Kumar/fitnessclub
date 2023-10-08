import "./Join.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  // when someone enters their mail....i get notified that he/she wanna join
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c477osf",
        "template_svrmuiz",

        form.current,
        "uDXOFYEhzYfdVJeXt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="joins">
      <div className="join-l">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="join-r">
        <span style={{ fontWeight: "bold" }}>
          Enter your email address and we'll contact you
        </span>
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
