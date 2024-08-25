import React, { Children, ReactNode } from "react";
import "./tabSet.scss";
import { ITab } from "../../utils/interfaces/tabSet.interface";

interface Prop {
  tabs: ITab[];
  selected: string;
  children?: ReactNode;
  onChangeTab: (tab: ITab) => void;
}

const TabSet = ({ tabs, selected, children, onChangeTab }: Prop) => {
  const tabHandler = (tab: ITab) => {
    onChangeTab(tab);
  };

  return (
    <div className="tab-set mt-3">
      <div className="d-flex">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`d-flex px-3 py-1 tab ${
              tab.id === selected ? "active" : ""
            }`}
            onClick={() => tabHandler(tab)}
          >
            {tab.title}
          </div>
        ))}
        <div className="d-flex flex-grow-1 px-3 py-1 tab" />
      </div>
      <div className="p-3">
        {Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default TabSet;
