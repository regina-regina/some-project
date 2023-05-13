import React from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "widgets/ErrorPage";

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t("MainPage")}
    </div>
  );
}
