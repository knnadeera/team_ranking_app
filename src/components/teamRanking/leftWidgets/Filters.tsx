import React, { useEffect, useState } from "react";
import "../../../utils/scss/filters.scss";
import { getYears, months } from "../../../utils/enumsNModals/filers";
import FilterDrop from "./FilterDrop";
import moment from "moment";

interface IProp {
  year: string;
  month: string;
  day: string;
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
  setDay: (day: string) => void;
}

const Filters = ({ year, month, day, setYear, setMonth, setDay }: IProp) => {
  const [showYears, setShowYears] = useState(true);
  const [showMonth, setShowMonth] = useState(true);
  const [showDay, setShowDay] = useState(true);

  const [days, setDays] = useState<string[]>([]);
  const [monthsArray, setMonthsArray] = useState<string[]>([]);

  const date = new Date();
  const thisYear = moment(date).format("YYYY");
  const thisMonth = moment(date).format("MMMM");
  const thisDay = moment(date).format("D");

  useEffect(() => {
    const daysCount =
      year === thisYear && month === thisMonth
        ? +thisDay
        : months.find((val) => val.name === month)?.dayCount ?? 0;

    const dayList = [];

    for (let i = 0; i < daysCount; i++) {
      dayList.push((daysCount - i).toString());
    }
    setDays(dayList);
  }, [year, month, thisDay, thisYear, thisMonth]);

  useEffect(() => {
    const monthCount =
      year === thisYear
        ? months.find((val) => val.name === thisMonth)?.id ?? 0
        : 12;

    const sortedMonths = months
      .filter((val) => val.id <= monthCount)
      .sort((a, b) => b.id - a.id);

    const monthsList = sortedMonths.map((val) => val.name);

    setMonthsArray(monthsList);
  }, [year, thisYear, thisMonth, month]);

  return (
    <>
      <div className="filters">
        <div className="title">FILTERS</div>
        <FilterDrop
          title="Year"
          selected={year}
          values={getYears()}
          show={showYears}
          setShow={setShowYears}
          setValue={setYear}
        />
        <FilterDrop
          title="Month"
          selected={month}
          values={monthsArray}
          show={showMonth}
          setShow={setShowMonth}
          setValue={setMonth}
        />
        <FilterDrop
          title="Day"
          selected={day}
          values={days}
          show={showDay}
          setShow={setShowDay}
          setValue={setDay}
        />
      </div>
    </>
  );
};

export default Filters;
