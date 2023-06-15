import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль пользователя")} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <Button
              onClick={onEdit}
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
              >
                {t("Отмена")}
              </Button>
              <Button
                onClick={onSave}
                theme={ButtonTheme.BACKGROUND}
                className={cls.saveBtn}
              >
                {t("Сохранить")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
