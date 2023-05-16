import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button";
import { ButtonTheme } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTranslate}
      className={classNames("", {}, [className])}
    >
      {t(short ? "Сокращение" : "Язык")}
    </Button>
  );
};
