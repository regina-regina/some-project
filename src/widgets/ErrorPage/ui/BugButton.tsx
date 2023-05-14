import React, { useEffect, useState } from "react";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib/classNames/classNames";

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      className={classNames("bugButton", {}, [className])}
    >
      {t("throw error")}
    </Button>
  );
};
