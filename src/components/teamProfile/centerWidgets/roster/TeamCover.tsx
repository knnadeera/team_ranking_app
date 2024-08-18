import React from "react";
import "./teamCover.scss";
import { ITeamRank } from "../../../../utils/interfaces/teamRank.interface";
import { Image } from "react-bootstrap";

interface IProp {
  team: ITeamRank;
}

const TeamCover = ({ team }: IProp) => {
  return (
    <div className="cover">
      {team?.players?.map((player, index) => (
        <div
          key={index}
          style={{ position: "relative", width: "110px", height: "110px" }}
        >
          <Image
            src={player.image}
            alt="profile"
            width={110}
            height={110}
            className="profile-image pt-1"
          />
          <div className="team-player-name">
            <Image src={player.flag} alt="flag" width={15} className="me-1" />
            {player.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCover;
