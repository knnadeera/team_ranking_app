import moment from "moment";
import React from "react";
import { ITeamRank } from "../../../../utils/interfaces/teamRank.interface";
import { Image } from "react-bootstrap";

interface IProp {
  date: string;
  time: string;
  team1?: ITeamRank;
  team2?: ITeamRank;
}

const MatchDetails = ({ date, time, team1, team2 }: IProp) => {
  return (
    <div className="row my-2">
      <div className="col-2">
        {date !== moment().format("YYYY-MM-DD") ? `${date}` : `${time}`}
      </div>
      <div className="col-8 d-flex justify-content-center">
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="w-100 d-flex align-items-center justify-content-end">
            {team1?.teamName}
            <Image src={team1?.logo} alt="logo" width={20} className="mx-2" />
          </div>
          <div className="text-center" style={{ width: "50px" }}>
            {" - : - "}
          </div>
          <div className="w-100 d-flex align-items-center justify-content-start">
            <Image src={team2?.logo} alt="logo" width={20} className="mx-2" />
            {team2?.teamName}
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="text-center fw-normal fs-6 px-n2 rounded bg-light-dark text-light bg-light-dark">
          Match
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
