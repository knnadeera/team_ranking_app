import React, { Children, ReactNode } from "react";
// import Header from "./header/Header";
import "./main.scss";

interface IProp {
  children?: ReactNode;
}

const Main = ({ children }: IProp) => {
  return (
    <>
      <div className="row main">
        <div className="left" />
        <div className="content mt-1 pt-3">
          {Children.map(children, (child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
        <div className="right" />
      </div>
    </>
  );
};

export default Main;
