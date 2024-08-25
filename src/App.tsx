import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import TeamRankingPage from "./pages/TeamRankingPage";
import AppNavbar from "./components/Navbar";
import Main from "./components/Main";
import TeamProfilePage from "./pages/TeamProfilePage";
import PlayerProfilePage from "./pages/PlayerProfilePage";

function App() {
  return (
    <>
      <AppNavbar />
      <main className="appBG ">
        <Main>
          <Container>
            <Routes>
              <Route
                path="/"
                element={<Navigate to={`/ranking/teams/:year/:month/:day`} />}
              />
              <Route
                path={`/ranking/teams/:year/:month/:day`}
                element={<TeamRankingPage />}
              />
              <Route
                path="/team/:teamId/:teamName"
                element={<TeamProfilePage />}
              />
              <Route
                path="/player/:playerId/:playerName"
                element={<PlayerProfilePage />}
              />
            </Routes>
          </Container>
        </Main>
      </main>
    </>
  );
}

export default App;
