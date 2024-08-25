import React from "react";
import "./teamCover.scss";
import {
  IPlayer,
  ITeamRank,
} from "../../../utils/interfaces/teamRank.interface";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EPlayerProfileTabs } from "../../../utils/enumsNModals/playerProfile";

interface IProp {
  team: ITeamRank;
}

const TeamCover = ({ team }: IProp) => {
  const navigate = useNavigate();
  const playerHandler = (player: IPlayer) => {
    const name = player.name.split(" ").join("-");
    navigate(`/player/${player.id}/${name}#tab-${EPlayerProfileTabs.INFO}`);
  };

  return (
    <div className="tp-cover">
      {team?.players?.map((player, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: `${100 / team.players.length}%`,
            height: "100%",
          }}
          className="player"
          onClick={() => {
            playerHandler(player);
          }}
        >
          <Image
            src={player.image}
            alt="profile"
            width={`100%`}
            height={`100%`}
            className="profile-image mt-2"
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
