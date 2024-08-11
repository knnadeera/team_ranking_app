import moment from "moment";

export const getYears = () => {
  const thisYear = moment(new Date()).format("YYYY");
  const years = [];

  for (let i = 0; i <= 10; i++) {
    years.push((+thisYear - i).toString());
  }

  return years;
};

export const months = [
  { name: "December", dayCount: 31, id: 12 },
  { name: "November", dayCount: 30, id: 11 },
  { name: "October", dayCount: 31, id: 10 },
  { name: "September", dayCount: 30, id: 9 },
  { name: "August", dayCount: 31, id: 8 },
  { name: "July", dayCount: 31, id: 7 },
  { name: "June", dayCount: 30, id: 6 },
  { name: "May", dayCount: 31, id: 5 },
  { name: "April", dayCount: 30, id: 4 },
  { name: "March", dayCount: 31, id: 3 },
  { name: "February", dayCount: 28, id: 2 },
  { name: "January", dayCount: 31, id: 1 },
];
