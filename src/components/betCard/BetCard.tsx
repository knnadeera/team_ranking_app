import React from "react";
import "../../utils/scss/betCard.scss";
import TeamOdds from "./TeamOdds";
import BetBtn from "./BetBtn";

const BetCard = () => {

  const betNowHandler = () => {
    console.log("bet now")
  
  }
  return (
    <>
      <div className="betCard">
        <div >
          <TeamOdds teamName="abc" odds={1.22} />
        </div>
        <div  className="betCardTeam2">
          <TeamOdds teamName="abc" odds={1.22} />
        </div>
        <div className="d-flex justify-content-center"><BetBtn onClick={betNowHandler} /></div>
      </div>
    </>
  );
};

export default BetCard;
