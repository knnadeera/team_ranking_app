import React, { useEffect, useState } from "react";
import { ITeamRank } from "../../../../utils/interfaces/teamRank";
import { Image } from "react-bootstrap";
import { BiSolidChevronRightSquare, BiSolidChevronDownSquare, BiSolidChevronUpSquare } from "react-icons/bi";
import "./teamRank.scss";
import PlayerCard from "../PlayerCard";

interface IProp {
  rank: ITeamRank;
  isOpen: boolean;
}

const TeamRank = ({ rank, isOpen }: IProp) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="team-rank">
        <div
          className="head d-flex justify-content-between align-items-center accordion"
          onClick={() => setShow(!show)}
        >
          <div className="d-flex align-items-center">
            <div className="rank-badge">
              <div className="rank-badge highlight"></div>
           
                <div className="rank-badge rank">
                  <span >#</span>
                  <span className="rank-badge number">{rank.rank}</span>
                </div>
            
            </div>
            <div className="team-rank-detail">
              <div className="team-rank-detail points-container">
                    <span className="points">{rank.points}</span>&nbsp;
                    <span className="pts-symbol">pts</span>
              </div>
              <div className="team-rank-detail comparison">
                {rank.compare > 0 ? (
                  <BiSolidChevronUpSquare color="green" size='15' />
                ) : rank.compare < 0 ? (
                    <BiSolidChevronDownSquare  color="red" size='15'/>
                  )  : <BiSolidChevronRightSquare  color="#868686" size='15'/> }
                

                <span className="team-rank-detail comparison-text">{rank.compare}</span> 
              </div>
            <div>

            </div>
            </div>
       
            <Image src={rank.logo} alt="logo" width={25} className="mx-3" />
            
            <div className="name d-flex flex-column justify-content-center accordion-content ">
              <div className="team-rank-name">
                {rank.teamName}
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
                {/* {rank.players.map((player, i) => (
                  <div key={i} className="player">
                    {player.name}
                    {i !== rank.players.length - 1 && <LuDot />}
                  </div>
                ))} */}
              </div>
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
                <button>Team profile</button>
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