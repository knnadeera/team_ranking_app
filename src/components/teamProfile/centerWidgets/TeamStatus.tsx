import React from "react";
import { Image } from "react-bootstrap";
import { ITeamRank } from "../../../utils/interfaces/teamRank.interface";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import "./teamStatus.scss";
import moment from "moment";

interface IProp {
  team: ITeamRank;
}

const TeamStatus = ({ team }: IProp) => {
  const avgAge = () => {
    let totalAges = 0;
    team?.players?.forEach((player) => {
      totalAges = totalAges + moment().diff(player.dateOfBirth, "years");
    });

    const avgAge = Math.round(totalAges / team?.players?.length);
    return `${avgAge ?? 0}`;
  };

  return (
    <div className="bg-dark team-status py-2 px-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Image src={team?.logo} alt="logo" width={50} className="me-2" />
          <div className="d-flex flex-column">
            <div>
              <Image
                src={team?.flag}
                alt="flag"
                width={15}
                className="p-0 me-1"
              />
              {team?.country}
            </div>
            <h4 className="fw-bold p-0 m-0">{team?.teamName}</h4>
          </div>
        </div>
        <div>
          <FaTwitter className="social-media twitter" />
          <FaInstagram className="social-media instagram" />
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between team-status-border">
          <span>World ranking</span>
          <span className="text-color-dark">#{team?.rank}</span>
        </div>
        <div className="d-flex justify-content-between team-status-border">
          <span>Weeks in top30 for core</span>
          <span className="text-color-dark">{team?.weeksInTop}</span>
        </div>
        <div className="d-flex justify-content-between team-status-border">
          <span>Average player age</span>
          <span className="text-color-dark">{avgAge()}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Coach</span>
          <div className="text-color-dark">
            <Image
              src={team?.coach?.flag}
              alt="flag"
              width={15}
              className="p-0 me-1"
            />
            {team?.coach?.firstName}
            <span className="team-status"> '{team?.coach?.nicName}' </span>
            {team?.coach?.lastName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStatus;
