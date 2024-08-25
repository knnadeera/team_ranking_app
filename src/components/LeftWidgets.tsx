import React, { Children, ReactNode } from "react";

interface IProp {
  children?: ReactNode;
}

const LeftWidgets = ({ children }: IProp) => {
  return (
    <div className="w-100">
      {Children.map(children, (child) => (
        <div className="w-100">{child}</div>
      ))}
    </div>
  );
};

export default LeftWidgets;
