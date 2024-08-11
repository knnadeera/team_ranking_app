import moment from "moment";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../../utils/scss/rankingList.scss";
import TeamRank from "./TeamRank";
import { rankingDetails } from "../../../utils/enumsNModals/teamRanking";
import { ITeamRank } from "../../../utils/interfaces/teamRank";

interface IProp {
  date: string;
}

const TeamRankingList = ({ date }: IProp) => {
  const formattedDate = moment(date, "YYYY-MMMM-D").format("MMMM Do, YYYY");

  return (
    <>
      <div className="date-selector d-flex justify-content-between mt-2">
        <div>Counter-Strike World ranking on {formattedDate}</div>
        <div>
          <IoIosArrowBack className="arrow" />
          <IoIosArrowForward className="arrow" />
        </div>
      </div>
      <div className="mt-3">
        {rankingDetails.map((rank: ITeamRank, index) => (
          <div key={index}>
            <TeamRank rank={rank} isOpen={index === 0 ? true : false} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamRankingList;
