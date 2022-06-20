import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function emailSrvc() {
  const form = useRef();

  const SERVICE_ID = "service_xpva2bf";
  const TEMPLATE_ID = "template_ipazuhs";
  const PUBLIC_KEY = "6mMLJJUzkP7lq3rbP";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
