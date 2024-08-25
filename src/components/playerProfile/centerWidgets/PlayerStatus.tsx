import React from "react";
import { IPlayer } from "../../../utils/interfaces/teamRank.interface";
import "./playerStatus.scss";
import { Image } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoTwitch } from "react-icons/io";
import { SiFaceit } from "react-icons/si";
import moment from "moment";

interface IProp {
  player: IPlayer;
  teamData: {
    teamLogo: string;
    teamName: string;
  };
}

const PlayerStatus = ({ teamData, player }: IProp) => {
  const ageCal = (dob: string) => {
    const now = moment();
    const years = now.diff(moment(dob), "years");
    return years;
  };

  return (
    <>
      <div className="pp-player-status">
        <div className="player-tag">Player</div>
        <div className="player-image">
          <Image
            src={player.image}
            width={"100%"}
            alt="profile"
            style={{
              backgroundImage: `url(${teamData.teamLogo})`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="player-details">
          <div className="d-flex justify-content-between">
            <div className="player-name">{player.name}</div>
            <div>
              <FaTwitter className="social-media twitter" />
              <IoLogoTwitch className="social-media twitch" />
              <FaInstagram className="social-media instagram" />
              <SiFaceit className="social-media faceIt" />
            </div>
          </div>
          <div className="player-flag">
            <Image src={player.flag} alt="flag" width={15} height={15} />
            <div className="ms-1">{player.realName}</div>
          </div>
          <div>
            <div className="d-flex justify-content-between team-status-border">
              <span>Age</span>
              <span className="text-color-dark">
                {ageCal(player.dateOfBirth)}
              </span>
            </div>
            <div className="d-flex justify-content-between team-status-border">
              <span>Current team</span>
              <span className="text-color-dark">
                <Image
                  src={teamData.teamLogo}
                  alt="logo"
                  width={15}
                  height={15}
                />{" "}
                {teamData.teamName}
              </span>
            </div>
            <div className="d-flex justify-content-between team-status-border">
              <span>Top 20</span>
              <span className="text-color-dark">need to add</span>
            </div>
            <div className="d-flex justify-content-between team-status-border">
              <span>Player achievements</span>
              <span className="text-color-dark">need to add </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerStatus;
