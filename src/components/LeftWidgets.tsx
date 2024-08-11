import React, { Children, ReactNode } from "react";

interface IProp {
  children?: ReactNode;
}

const LeftWidgets = ({ children }: IProp) => {
  return (
    <>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </>
  );
};

export default LeftWidgets;
