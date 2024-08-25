import React from "react";
import { IPlayer } from "../../../../utils/interfaces/teamRank.interface";
import "./statistics.scss";
import moment from "moment";

interface IProp {
  player: IPlayer;
}
const Statistics = ({ player }: IProp) => {
  return (
    <div className="player-statistics">
      <div className="title">
        <div>{player.name} statistics</div>
        <div className="sub-title">
          (Past ${moment().diff(player.joinedDate, "months")} . $
          {player.mapsPlayed} maps )
        </div>
      </div>
      <div className="body">
        <div className="body-item">
          <div>Rating 2.0</div>
          <div className="ms-1">{player.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
