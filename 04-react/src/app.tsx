import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrgProvider } from "./org-context";
import { RickMortyListPage } from "./rick-morty/rick-morty-list";
import { RickMortyDetailPage } from "./rick-morty/rick-morty-detail";

export const App = () => {
  return (
    <Router>
      <OrgProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rick-morty" element={<RickMortyListPage />} />
          <Route path="/rick-morty/detail/:id" element={<RickMortyDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </OrgProvider>
    </Router>
  );
};
