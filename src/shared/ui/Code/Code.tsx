import { FC, ReactNode, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import CopyIcon from "shared/assets/icons/CopyIcon.svg";
import cls from "./Code.module.scss";
import { Button } from "../Button";
import { Icon } from "../Icon/Icon";
import { ButtonTheme } from "../Button/Button";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
