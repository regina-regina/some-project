import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        value={name}
        className={cls.input}
        onChange={(value) => setName(value)}
        placeholder={t("Введите имя пользователя")}
      />
      <Input
        value={password}
        className={cls.input}
        onChange={(value) => setPassword(value)}
        placeholder={t("Введите пароль")}
      />
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
