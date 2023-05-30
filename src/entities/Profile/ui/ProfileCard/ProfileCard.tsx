import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Профиль пользователя")} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t("Редактировать")}</Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
