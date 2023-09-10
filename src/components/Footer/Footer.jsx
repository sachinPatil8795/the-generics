import React from "react";
import classes from "./Footer.module.css";
import imgYoutube from "../../assets/Youtube.png";
import imgInstagram from "../../assets/instaIcon.png";
import imgFacebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h1>The Generics</h1>
      <p className={classes.copyright}>
        &copy; 2023 The Generics. All rights reserved.
      </p>
      <div className={classes.links}>
        <a href="https://www.youtube.com" target="__blank">
          <img src={imgYoutube} alt="youtubeImage" />
        </a>
        <a href="https://www.instagram.com" target="__blank">
          <img src={imgInstagram} alt="imgInstagram" />
        </a>
        <a href="https://www.facebook.com" target="__blank">
          <img
            src={imgFacebook}
            style={{ height: "43px" }}
            alt="FacebookImage"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
