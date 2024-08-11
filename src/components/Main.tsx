import React, { Children, ReactNode } from "react";
import Header from "./header/Header";

interface IProp {
  children?: ReactNode;
}

const Main = ({ children }: IProp) => {
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Header />
          {Children.map(children, (child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Main;