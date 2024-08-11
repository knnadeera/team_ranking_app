import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import TeamRankingPage from "./pages/TeamRankingPage";
import AppNavbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <AppNavbar />
      <main className="p-3 appBG ">
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
            </Routes>
          </Container>
        </Main>
      </main>
    </>
  );
}

export default App;
