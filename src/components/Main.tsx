import React, { Children, ReactNode } from "react";
import Header from "./header/Header";
import '../utils/scss/main.scss'

interface IProp {
  children?: ReactNode;
}

const Main = ({ children }: IProp) => {
  return (
    <>
      <div className="row main">
        <div className="col-2">dsfdghfgjkhjlk;</div>
        <div className="col-8">
          <Header />
          {Children.map(children, (child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
        <div className="col-2">dfgdfhgjk</div>
      </div>
    </>
  );
};

export default Main;
