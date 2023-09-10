// import React from "react";
// import classes from "./Home.module.css";
// const Home = () => {
//   return (
//     <>
//       <div className={classes.home}>
//         <h2>TOURS</h2>
//         <div>
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>JUL16</span>
//             <span className={classes["tour-place"]}>DETROIT, MI</span>
//             <span className={classes["tour-spec-place"]}>
//               DTE ENERGY MUSIC THEATRE
//             </span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//           <hr />
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>JUL19</span>
//             <span className={classes["tour-place"]}>TORONTO,ON</span>
//             <span className={classes["tour-spec-place"]}>BUDWEISER STAGE</span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//           <hr />
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>JUL 22</span>
//             <span className={classes["tour-place"]}> BRISTOW, VA</span>
//             <span className={classes["tour-spec-place"]}>JIGGY LUBE LIVE</span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//           <hr />
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>JUL 29</span>
//             <span className={classes["tour-place"]}>PHOENIX, AZ</span>
//             <span className={classes["tour-spec-place"]}>
//               {" "}
//               AK-CHIN PAVILION
//             </span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//           <hr />
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>AUG 2</span>
//             <span className={classes["tour-place"]}>LAS VEGAS, NV</span>
//             <span className={classes["tour-spec-place"]}>T-MOBILE ARENA</span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//           <hr />
//           <div className={classes["tour-item"]}>
//             <span className={classes["tour-date"]}>AUG 7</span>
//             <span className={classes["tour-place"]}>CONCORD, CA</span>
//             <span className={classes["tour-spec-place"]}>
//               {" "}
//               CONCORD PAVILION
//             </span>
//             <button className="buy-btn">BUY TICKETS</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

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
      <h2 className={classes.heading}>Tours</h2>
        {tourData.map((tour, index) => (
          <div className={classes.tourItem} key={index}>
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
