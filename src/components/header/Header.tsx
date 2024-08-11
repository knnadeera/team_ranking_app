import React from "react";
import logo from "../../assets/images/images.png";
import "../../utils/scss/header.scss";
import GGBet from "./GGBet";
import gif from "../../assets/images/Y0_NuTH0mFCaRQL2AJXaj7.gif";
import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="row mb-4 header">
        <div className="col-2 d-flex text-black">
          <Image src={logo} alt="logo" width={65} />
          <h1 className="ms-2">HLTV</h1>
        </div>
        <div className="col-8 header_GGBet">
          <GGBet />
        </div>
        <div className="col-2">
          <Image src={gif} alt="logo" height={65} />
        </div>
      </div>
    </>
  );
};

export default Header;
