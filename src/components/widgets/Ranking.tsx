import React from "react";
import { Image } from "react-bootstrap";
import "./ranking.scss";
import { IRankingData } from "../../utils/interfaces/ranking.interface";
import {
  EStringFormatting,
  stringFormatting,
} from "../../functions/stringFormattingFunction";

interface IProp {
  title: string;
  rankingData: IRankingData[];
  footer?: string;
}

const Ranking = ({ title, rankingData, footer }: IProp) => {
  return (
    <div className="ranking">
      <div className="title">
        {stringFormatting(title, EStringFormatting.UPPER)}
      </div>
      {rankingData?.map((rd: IRankingData, i: number) => (
        <div
          className={`body ${rankingData?.length !== i + 1 && "borderBottom"}`}
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
