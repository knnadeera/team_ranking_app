import React, { useState } from "react";
import { ITeamRank } from "../../../utils/interfaces/teamRank";
import { Image } from "react-bootstrap";
import "../../../utils/scss/teamRank.scss";
import { LuDot } from "react-icons/lu";
import PlayerCard from "./PlayerCard";

interface IProp {
  rank: ITeamRank;
}

const TeamRank = ({ rank }: IProp) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="team-rank">
        <div
          className="head d-flex justify-content-between align-items-center accordion"
          onClick={() => setShow(!show)}
        >
          <div className="d-flex align-items-center">
            <div className="rank">#{rank.rank}</div>
            <Image src={rank.logo} alt="logo" width={25} className="mx-3" />
            <div className="name d-flex flex-column justify-content-center accordion-content ">
              <div>
                {rank.teamName} <span>({rank.points}points)</span>
              </div>
              <div
                className={`players-names d-flex accordion-content ${
                  !show ? "open" : ""
                }`}
                style={{
                  maxHeight: !show ? "30px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                {rank.players.map((player, i) => (
                  <div key={i}>
                    {player.name}
                    {i !== rank.players.length - 1 && <LuDot />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`compare ${
              rank.compare > 0
                ? "increased"
                : rank.compare < 0
                ? "decreased"
                : ""
            }`}
          >
            <div>
              {rank.compare === 0
                ? "-"
                : rank.compare > 0
                ? `+${rank.compare}`
                : rank.compare}
            </div>
          </div>
        </div>
        <div
          className={`accordion-content ${show ? "open" : ""}`}
          style={{
            maxHeight: show ? "300px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.6s ease",
          }}
        >
          <div className="bg-white py-2 px-3 border-top">
            <div className="d-flex justify-content-between mb-2">
              {rank.players.map((player, i) => (
                <PlayerCard key={i} player={player} />
              ))}
            </div>
            <div className="rank-detail-btn border-top row">
              <div className="col-6 d-flex justify-content-center">
                <button>HLTV Team profile</button>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <button>Ranking details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamRank;
