import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <h2 className={classes.title}>About Us</h2>
        {/* <img src="	https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" alt="the-generic" /> */}
        <p className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          risus eget urna lacinia lacinia. Integer rhoncus, felis a lacinia
          tempus, eros odio suscipit dolor, non bibendum neque ligula vel arcu.
          Fusce ac bibendum justo. Curabitur vel dui vel elit vehicula commodo.
        </p>
        <p className={classes.paragraph}>
          Sed sed libero a odio bibendum vehicula. Duis eu tincidunt nunc.
          Vestibulum congue, ligula vel tincidunt cursus, urna justo facilisis
          tortor, et bibendum justo tortor non arcu. Nunc pharetra, nisl non
          aliquam lacinia, libero mauris lacinia justo, ac feugiat eros elit
          sit amet ex.
        </p>
      </div>
    </section>
  );
};

export default About;
