import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface IProp {
  title: string;
  values: any[];
  selected: string;
  show: boolean;
  setShow: (show: boolean) => void;
  setValue: (value: string) => void;
}
const FilterDrop = ({
  title,
  values,
  selected,
  show,
  setShow,
  setValue,
}: IProp) => {
  return (
    <>
      <div className="filter-drop accordion">
        <div
          className={`d-flex justify-content-between drop-title ${
            show ? "filter-drop-show" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <div>{title}</div>
          <div>{show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</div>
        </div>
        <div
          className={`accordion-content ${show ? "open" : ""}`}
          style={{
            maxHeight: show ? "1000px" : "0px", 
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          {values.map((val, index) => (
            <div
              key={index}
              className={`drop-items ${
                val === selected ? "active-drop-item" : ""
              }`}
              onClick={() => setValue(val)}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterDrop;
