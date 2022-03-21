import React from "react";
import classes from "./Hero.module.css";
import heroImage from "./womanIce.png";
import abstrcBckgrnd from "./backgrndAbstract.png";

function Hero() {
  return (
    <section className={classes.row}>
      <section className={classes.column}>
        <h1>Fastest Delivery & Easy Pick Up</h1>
        <div>
          <p>When you are too lazy to cook we are just a click away</p>
          <button>Find Restaurant</button>
          <p>How to order</p>
        </div>
      </section>
      <section className={classes.column}>
        <div>
          <img src={abstrcBckgrnd} alt="abstractBackground" />
          <img src={heroImage} alt="heroImage" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
