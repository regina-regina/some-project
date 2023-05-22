/* eslint-disable i18next/no-literal-string */
import React, { Suspense } from "react";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "../shared/lib/classNames/classNames";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="Loading">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
