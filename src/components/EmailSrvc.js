import React from "react";
import emailjs from "emailjs-com";

export default function EmailSrvc() {
  function sendEmail(e) {
    e.preventDefault();

    // Credentials for using Emailjs
    emailjs
      .sendForm(
        "service_ere8li4",
        "template_6cu7t3j",
        e.target,
        "6mMLJJUzkP7lq3rbP"
      )
      .then(
        (result) => {
          alert("Thank you! Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div>
        <form onSubmit={sendEmail} className="form-style">
          <div className="att">
            <label>Name</label>
            <input
              type="text"
              required={true}
              className="form-control"
              name="name"
            />
          </div>
          <div className="att">
            <label>Email</label>
            <input
              type="email"
              required={true}
              className="form-control"
              name="email"
            />
          </div>
          <div className="att">
            <label>Subject</label>
            <input type="text" className="form-control" name="subject" />
          </div>
          <div className="att">
            <label>Message</label>
            <textarea className="form-control" required={true} name="message" />
          </div>
          <div>
            <input
              type="submit"
              className="sendBtn"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
