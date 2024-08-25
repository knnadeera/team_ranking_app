import React from "react";
import "./rankingFilter.scss";

interface IProp {
  data: { title: string }[];
  selected: string;
  onClick: (title: string) => void;
}

const RankingFilter = ({ data, selected, onClick }: IProp) => {
  return (
    <>
      <div className="tr-ranking-filter">
        {data.map((d, index) => (
          <div
            key={index}
            className={`title ${selected === d.title ? "selected" : ""}`}
            onClick={() => onClick(d.title)}
          >
            {d.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default RankingFilter;
