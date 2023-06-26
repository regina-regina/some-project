import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/Dark.svg";
import { Button } from "../../Button";
// import LightIcon from "shared/assets/icons/LightIcon.svg";
import { ButtonTheme } from "../../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <DarkIcon />}
    </Button>
  );
});
