import React from "react";
import phone from "../../src/images/icons/Phone.png";
import email from "../../src/images/icons/Email.png";
import facebook from "../../src/images/icons/Facebook.png";
import "../../src/components/Contacts.css";

const Contacts = () => {
  return (
    <section className="contacts-container">
      <a className="section-phone" href="tel:+995577198791" target="blank">
        <img src={phone} alt="Phone icon" />
        +995 577 19 87 91
      </a>
      <a className="section-email" href="dgiorjio@gmail.com" target="blank">
        <img src={email} alt="Email icon" />
        dgiorjio@gmail.com
      </a>
      <a
        className="section-facebook"
        href="https://www.facebook.com/kilasonia11"
        target="blank"
      >
        <img src={facebook} alt="Facebook icon" />
        Facebook
      </a>
    </section>
  );
};

export default Contacts;
