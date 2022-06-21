import React, { useRef } from "react";

export default function EmailSrvc() {
  const form = useRef();

  const SERVICE_ID = "service_xpva2bf";
  const TEMPLATE_ID = "template_ipazuhs";
  const PUBLIC_KEY = "6mMLJJUzkP7lq3rbP";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        form.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form id="email" ref={form} onSubmit={sendEmail} className="form-style">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send" className="sendBtn">Send</button>
    </form>
  );
}
