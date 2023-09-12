import React from "react";
import classes from "./Contact.module.css";
import contactImg from "./contact1.jpg"

const Contact = () => {
  return (
    <>
    <form className={classes["form-control"]}>
    <img src={contactImg} alt="contact imag" />
        <h2>Feel free to contact us</h2>
      <div>
        <label htmlFor="user-name">Name</label>
        <input type="text" id="user-name"/>
      </div>
      <div>
        <label htmlFor="user-email">Email</label>
        <input type="email" id="user-email"/>
      </div>
      <div>
        <label htmlFor="user-phNo">Phone number</label>
        <input type="number" id="user-phNo"/>
      </div>
    </form>
    </>
  );
};

export default Contact;
