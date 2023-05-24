import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text
          text={t("Вы ввели неправильный логин или пароль")}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        value={username}
        className={cls.input}
        onChange={onChangeUsername}
        placeholder={t("Введите имя пользователя")}
      />
      <Input
        value={password}
        className={cls.input}
        onChange={onChangePassword}
        placeholder={t("Введите пароль")}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
