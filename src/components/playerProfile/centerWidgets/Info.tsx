import React from "react";
import Statistics from "./info/Statistics";
import { IPlayer } from "../../../utils/interfaces/teamRank.interface";
import "./info.scss";

interface IProp {
  player: IPlayer;
}
const PPInfo = ({ player }: IProp) => {
  return (
    <div className="pp-info">
      <div className="info-card">
        <Statistics player={player} />
      </div>
    </div>
  );
};

export default PPInfo;
