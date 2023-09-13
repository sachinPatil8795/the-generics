import React from "react";
import classes from "./Home.module.css";

const tourData = [
  {
    date: "JUL 16",
    place: "DETROIT, MI",
    specPlace: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    place: "TORONTO, ON",
    specPlace: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    place: "BRISTOW, VA",
    specPlace: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    place: "PHOENIX, AZ",
    specPlace: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    place: "LAS VEGAS, NV",
    specPlace: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    place: "CONCORD, CA",
    specPlace: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.tourList}>
        <h2 className={classes.heading}>Events</h2>
        {tourData.map((tour) => (
          <div className={classes.tourItem} key={Math.random().toString()}>
            <span className={classes.date}>{tour.date}</span>
            <span className={classes.place}>{tour.place}</span>
            <span className={classes.specPlace}>{tour.specPlace}</span>
            <button className={classes.buyBtn}>BUY TICKETS</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
