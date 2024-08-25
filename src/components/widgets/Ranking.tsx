import React from "react";
import { Image } from "react-bootstrap";
import "./ranking.scss";
import { IRankingData } from "../../utils/interfaces/ranking.interface";
import {
  EStringFormatting,
  stringFormatting,
} from "../../functions/stringFormattingFunction";
import { ETeamProfileTabs } from "../../utils/enumsNModals/teamProfile";
import { useNavigate } from "react-router-dom";

interface IProp {
  title: string;
  rankingData: IRankingData[];
  footer?: string;
}

const Ranking = ({ title, rankingData, footer }: IProp) => {
  const navigate = useNavigate();

  const teamProfileHandler = (rd: IRankingData) => {
    const name = rd.name.split(" ").join("-");
    navigate(`/${rd.param}/${rd.id}/${name}#tab-${ETeamProfileTabs.INFO}`);
  };

  return (
    <div className="ranking">
      <div className="title">
        {stringFormatting(title, EStringFormatting.UPPER)}
      </div>
      {rankingData?.map((rd: IRankingData, i: number) => (
        <div
          key={i}
          className={`body ${rankingData?.length !== i + 1 && "borderBottom"}`}
          onClick={() => teamProfileHandler(rd)}
        >
          <div>{rd.rank}.</div>
          <Image src={rd.image} alt="image" width={15} />
          <div className="ms-1">{rd.name}</div>
        </div>
      ))}
      <div className="footer">
        <div>Complete ranking</div>
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default Ranking;
