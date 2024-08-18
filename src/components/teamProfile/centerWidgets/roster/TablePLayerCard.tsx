import React from "react";
import { Image } from "react-bootstrap";
import "./tablePlayerCard.scss";

interface IProp {
  src: string;
  flag: string;
  name: string;
}

const TablePLayerCard = ({ src, flag, name }: IProp) => {
  return (
    <div className="text-gray table-player-card w-100 h-100 p-2">
      <Image src={src} alt="profile" width={50} height={50} />
      <Image src={flag} alt="flag" width={15} className="p-0 mx-2" />
      {name}
    </div>
  );
};

export default TablePLayerCard;
