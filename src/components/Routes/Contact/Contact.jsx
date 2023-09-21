import React, { useState } from "react";
import classes from "./Contact.module.css";
import contactImg from "./contact.jpg";

const Contact = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      email: e.target.value,
    });
  };

  const phoneChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      phone: e.target.value,
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const userDetails = {
      name: userInput.name,
      email: userInput.email,
      phone: userInput.phone,
    };
    console.log(userDetails);

    try {
      const response = await fetch(
        "https://fetch-data-app-bb49a-default-rtdb.firebaseio.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );
      console.log(response.json());
      if (response.ok) {
        alert("Form data successfully submitted to the server!");
        // Clear the input fields
        setUserInput({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        console.error("Failed to submit form data to the server.");
      }
    } catch (error) {
      console.error("An error occurred while submitting form data:", error);
    }
  };

  return (
    <div className={classes["form-container"]}>
      <img
        src={contactImg}
        alt="contactImage"
        className={classes["contact-image"]}
      />
      <form onSubmit={formSubmitHandler}>
        <div className={classes["form-group"]}>
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            id="user-name"
            value={userInput.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            value={userInput.email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="user-phNo">Phone number</label>
          <input
            type="number"
            id="user-phNo"
            value={userInput.phone}
            onChange={phoneChangeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
