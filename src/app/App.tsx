/* eslint-disable i18next/no-literal-string */
import React, { Suspense, useEffect } from "react";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "../shared/lib/classNames/classNames";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
