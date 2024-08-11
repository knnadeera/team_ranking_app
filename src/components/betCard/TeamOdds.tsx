import React from "react";

interface IProp {
  teamName: string;
  odds: number;
}

const TeamOdds = ({ teamName, odds }: IProp) => {
  return (
    <>
      <div className="teamOdds">
        <div className="teamName">{teamName}</div>
        <div className="odds">{odds}</div>
      </div>
    </>
  );
};

export default TeamOdds;
