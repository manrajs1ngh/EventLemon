import React from "react";

function GetListedForm() {
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
          <form action="" className="get-listed">
            <div className="form-item">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-item">
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-item">
              <input type="text" placeholder="Vendor name" />
            </div>
            <div className="form-item">
              <input type="text" placeholder="Vendor type" />
            </div>
            <div className="form-item">
              <textarea
                name="message"
                placeholder="Message"
                id="message"
              ></textarea>
            </div>
          </form>
          <button className="button submit-button">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default GetListedForm;
