import React from "react";
import { ITeamRank } from "../../../../utils/interfaces/teamRank.interface";
import moment from "moment";
import { matches } from "../../../../utils/enumsNModals/matches";
import { rankingDetails } from "../../../../utils/enumsNModals/teamRanking";
import MatchDetails from "./MatchDetails";

interface IProp {
  team: ITeamRank;
}

const Matches = ({ team }: IProp) => {
  const year = moment().format("YYYY");

  const upcomingMatches = matches
    ?.filter(
      (match) =>
        (team?.teamId === match?.team1?.teamId ||
          team?.teamId === match?.team2?.teamId) &&
        moment().diff(
          moment(`${match?.date}/${match?.time}`, "YYYY-MM-DD/HH:mm"),
          "minutes"
        ) <= 0
    )
    .sort(
      (a, b) =>
        moment(`${a?.date}/${a?.time}`, "YYYY-MM-DD/HH:mm").valueOf() -
        moment(`${b?.date}/${b?.time}`, "YYYY-MM-DD/HH:mm").valueOf()
    );

  const findTeam = (teamId: string) => {
    const team = rankingDetails?.find((tm) => tm.teamId === teamId);
    return team;
  };

  return (
    <div className="text-light-dark">
      <div className="mb-3">
        <label className="fw-bold ms-1">Match stats for {team?.teamName}</label>
        <div className="d-flex row border border-light-dark rounded py-3 mx-1">
          <div className="col-6 h-100 text-center border-end-light-dark d-flex flex-column">
            <h5 className="p-0 m-0">{team?.crrWinStreak}</h5>
            <span>Current win streak</span>
          </div>
          <div className="col-6 text-center d-flex flex-column">
            <h5 className="p-0 m-0">
              {(+team?.wins / +(team?.lost + team?.tied)).toFixed(1)}%
            </h5>
            <span>Win rate</span>
          </div>
        </div>
      </div>
      <div>
        <label className="fw-bold ms-1">
          Upcoming matches for {team?.teamName}
        </label>
        <div className="mx-1">
          <div className="row">
            <span className="col-2">Date</span>
            <span className="col-8 text-center">Matches</span>
          </div>
          <h5 className="d-flex justify-content-center bg-gray py-1 border-top-light-dark border-bottom-light-dark">
            IEM Cologne {year}
          </h5>
          {upcomingMatches?.map((match, i) => (
            <MatchDetails
              key={i}
              date={match?.date}
              time={match?.time}
              team1={findTeam(match?.team1?.teamId)}
              team2={findTeam(match?.team2?.teamId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
