import React from "react";

interface IProp {
  onClick: () => void;
}

const BetBtn = ({ onClick }: IProp) => {
  return (
    <>
      <button className="betBtn" onClick={onClick}>
        BET NOW
      </button>
    </>
  );
};

export default BetBtn;
