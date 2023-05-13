import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t("Произошла какая-то ошибка")}</p>
      <Button onClick={reloadPage}>{t("Перезагрузить страницу")}</Button>
    </div>
  );
};
