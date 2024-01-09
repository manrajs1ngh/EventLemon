import React, { useRef } from "react";
import emailjs from "emailjs-com";

function GetListedForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_at4tzqa",
        "template_j6mb68g",
        form.current,
        "APF-uV_MiEa5QAReN"
      )
      .then(
        () => {
          console.log("Success");
        },
        (error) => {
          console.log("Error", error);
        }
      );
  };

  return (
    <section id="get-listed-form">
      <div className="container">
        <div className="get-listed__container">
          <h1 className="section__title">Want to get listed on our site?</h1>
          <p className="para">
            Join our network of top-rated vendors and start connecting with
            clients today. Fill in the details below and our team will get in
            touch with you.
          </p>
          <form ref={form} onSubmit={sendEmail} className="get-listed">
            <div className="form-item">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-item">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-item">
              <input type="text" name="vendor_name" placeholder="Vendor name" />
            </div>
            <div className="form-item">
              <input type="text" name="vendor_type" placeholder="Vendor type" />
            </div>
            <div className="form-item">
              <input
                type="text"
                name="vendor_location"
                placeholder="Vendor location"
              />
            </div>
            <div className="form-item">
              <textarea
                name="message"
                placeholder="Message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="button submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetListedForm;
