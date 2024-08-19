import React, { useEffect, useState } from "react";
import { gamesData } from "../../utils/enumsNModals/header";
import { IHeaderCard } from "../../utils/interfaces/header.interface";
import { Image } from "react-bootstrap";

const GGBet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGameData, setFilteredGameData] = useState<any[]>();
  const totalPages = Math.ceil(gamesData.length / 3);

  useEffect(() => {
    setFilteredGameData(paginate(currentPage));
  }, [currentPage]);

  const paginate = (page: number) => {
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    return gamesData.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className="ggBet ps-4 mx-4 d-flex align-items-center">
        <div className="col-2">
          <Image
            src="https://www.hltv.org/img/wvbGkPw1xrhpflIl4xP3YV.svg?ixlib=java-2.1.0&s=6e4eb3bb09e0c704fdd25886716df360"
            alt="ggBet"
            height="20px"
          />
        </div>
        <div className="col-9 px-4 ms-4 d-flex row justify-content-between">
          {filteredGameData?.map((game: IHeaderCard, index) => (
            <div key={index} className="col-4">
              <div className="row text-white game d-flex justify-content-center">
                <div className="col-4 d-flex flex-column align-items-center">
                  <Image
                    src={game.team1.flag}
                    alt={game.team1.teamName}
                    width="25px"
                    height="15px"
                  />
                  <div className="my-2">{game.team1.teamName}</div>
                  <div className="points">{game.team1.points}</div>
                </div>
                <div className="col-2 d-flex flex-column align-items-center justify-content-center">
                  {game.time}
                </div>
                <div className="col-4 d-flex flex-column align-items-center">
                  <Image
                    src={game.team2.flag}
                    alt={game.team2.teamName}
                    width="25px"
                    height="15px"
                  />
                  <div className="my-2">{game.team2.teamName}</div>
                  <div className="points">{game.team2.points}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-1 d-flex flex-column btnDiv">
          <button
            className="arrowBtn mb-1"
            onClick={() => {
              if (totalPages > currentPage) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            {">"}
          </button>
          <button
            className="arrowBtn"
            onClick={() => {
              if (1 < currentPage) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            {"<"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GGBet;
