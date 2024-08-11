import React, { Children, ReactNode } from "react";

interface IProp {
  children?: ReactNode;
}

const RightWidgets = ({ children }: IProp) => {
  return (
    <>
      {Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </>
  );
};

export default RightWidgets;
