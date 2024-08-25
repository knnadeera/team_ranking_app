import React, { useEffect } from "react";
import SimpleLineChart from "../../../ui/SimpleLineChart";
import { ITeamRank } from "../../../../utils/interfaces/teamRank.interface";
import { EChartTabs, EGroup, rankingHistoryDetails } from "../../../../utils/enumsNModals/teamProfile";
import { ILineChartData } from "../../../../utils/interfaces/chart.interface";
import moment from "moment";

interface IProp {
  team: ITeamRank;
}

const groupByMonth = (data: ILineChartData[]): ILineChartData[] => {
  const groupedData = data.reduce(
    (acc: Record<string, ILineChartData>, curr: ILineChartData) => {
      const month = moment(curr.date).format("YYYY-MM"); // Group by month in format YYYY-MM
      if (!acc[month]) {
        acc[month] = { date: month, value: curr.value }; // Initialize with the current value
      } else {
        acc[month].value = Math.min(acc[month].value, curr.value); // Update with the minimum value
      }
      return acc;
    },
    {} as Record<string, ILineChartData>
  );

  // Convert to an array and sort by date (oldest first)
  const sortedData = Object.values(groupedData).sort((a, b) =>
    moment(a.date).diff(moment(b.date))
  );

  // Format the date as abbreviated month name (e.g., "Jan 2024")
  return sortedData.map((item) => ({
    ...item,
    date: moment(item.date).format("MMM YYYY"), // Format as "Jan YYYY"
  }));
};

const TPInfo = ({ team }: IProp) => {
  const [group, setGroup] = React.useState<EGroup>(EGroup.MONTHLY);
  const [chartData, setChartData] = React.useState<ILineChartData[]>([]);
  const [selected, setSelected] = React.useState<EChartTabs>(EChartTabs.CORE);

  const data = rankingHistoryDetails.find((tm) => tm.teamId === team.teamId);

  useEffect(() => {
    if (group === EGroup.MONTHLY) {
      const groupedData = groupByMonth(data?.rankingHistory ?? []);
      setChartData(groupedData);
    }
  }, [data, group]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <label className="text-light">Ranking development for</label>
          <div className="d-flex py-2">
            <div
              className={`text-center fw-light fs-sm mx-1 px-2 ${
                selected === EChartTabs.CORE
                  ? "rounded text-light bg-light-dark"
                  : "text-dark"
              }`}
              role="button"
              onClick={() => setSelected(EChartTabs.CORE)}
            >
              For core
            </div>
            <div
              className={`text-center fw-light fs-sm px-2 cursor-pointer ${
                selected === EChartTabs.TEAM
                  ? "rounded text-light bg-light-dark"
                  : "text-dark"
              }`}
              role="button"
              onClick={() => setSelected(EChartTabs.TEAM)}
            >
              For team
            </div>
          </div>
        </div>
        <div className="border border-light-dark">
          <div className="d-flex justify-content-between pt-3 px-4">
            <div className="fw-light px-2 text-light">
              <label>Current Rank</label>
              <h6>#{team?.rank}</h6>
            </div>
            <div className="d-flex">
              <div className="fw-light px-2 text-light">
                <label>Peak</label>
                <h6>#{team?.rank}</h6>
              </div>
              <div className="fw-light px-2 text-light">
                <label>Time at peak</label>
                <h6>{team?.weeksInTop} Weeks</h6>
              </div>
            </div>
          </div>
          <hr className="border-light pt-0 mt-0 mx-4" />
          <SimpleLineChart chartData={chartData} />
        </div>
      </div>
    </>
  );
};

export default TPInfo;
