import React, { useEffect, useState } from "react";
import PlayerStatus from "../components/playerProfile/centerWidgets/PlayerStatus";
import LeftWidgets from "../components/LeftWidgets";
import RightWidgets from "../components/RightWidgets";
import TabSet from "../components/ui/TabSet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IPlayer, ITeamRank } from "../utils/interfaces/teamRank.interface";
import { ITab } from "../utils/interfaces/tabSet.interface";
import {
  EPlayerProfileTabs,
  playerProfileTabs,
} from "../utils/enumsNModals/playerProfile";
import { rankingDetails } from "../utils/enumsNModals/teamRanking";
import Ranking from "../components/widgets/Ranking";
import { IRankingData } from "../utils/interfaces/ranking.interface";
import moment from "moment";
import PPInfo from "../components/playerProfile/centerWidgets/Info";
import "./commonPage.scss";

const PlayerProfilePage = () => {
  const location = useLocation();
  const tab = location.hash.split("-")[1];

  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>({} as IPlayer);
  const [selectedTeam, setSelectedTeam] = useState<ITeamRank>({} as ITeamRank);
  const [selectedTab, setSelectedTab] = useState<string>(tab);

  const navigate = useNavigate();
  const { playerId } = useParams();

  useEffect(() => {
    const team = rankingDetails.find((team) =>
      team.players.find((player) => player.id === playerId)
    );
    if (team) {
      setSelectedTeam(team);
      const player = team.players.find((player) => player.id === playerId);
      if (player) {
        setSelectedPlayer(player);
      }
    } else {
      navigate(-1);
    }
  }, [playerId, navigate]);

  const onChangeTab = (val: ITab) => {
    if (val) {
      navigate(`#tab-${val?.id}`, { replace: true });
    }
    setSelectedTab(val.id);
  };

  const sortedRanking: IRankingData[] = rankingDetails
    ?.sort((a, b) => a.rank - b.rank)
    .slice(0, 5)
    .map((team) => ({
      id: team.teamId,
      rank: team.rank,
      image: team.logo,
      name: team.teamName,
      param: "team",
    }));

  return (
    <div className="pageContent">
      <div className="pageLeft">
        <LeftWidgets>
          <Ranking
            title="ranking"
            rankingData={sortedRanking}
            footer={`Last updated: ${moment().format("Do MMM")}`}
          />
          <Ranking title="fpl ranking" rankingData={sortedRanking} />
        </LeftWidgets>
      </div>
      <div className="pageCenter">
        <PlayerStatus
          teamData={{
            teamLogo: selectedTeam.logo,
            teamName: selectedTeam.teamName,
          }}
          player={selectedPlayer}
        />
        <TabSet
          tabs={playerProfileTabs}
          selected={selectedTab}
          onChangeTab={onChangeTab}
        >
          {selectedTab === EPlayerProfileTabs.INFO && (
            <PPInfo player={selectedPlayer} />
          )}
          {selectedTab === EPlayerProfileTabs.IN_GAME && <div>In Game</div>}
          {selectedTab === EPlayerProfileTabs.HEALTH_WELLNESS && (
            <div>Health & Wellness</div>
          )}
          {selectedTab === EPlayerProfileTabs.BIOMETRICS && (
            <div>Biometrics</div>
          )}
          {selectedTab === EPlayerProfileTabs.MATCHES && <div>Matches</div>}
        </TabSet>
      </div>
      <div className="right">
        <RightWidgets>
          <div>Recent Activity</div>
        </RightWidgets>
      </div>
    </div>
  );
};

export default PlayerProfilePage;
