import { classNames } from "shared/lib/classNames/classNames";
import React, { InputHTMLAttributes, memo, useCallback } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    readonly,
  }: InputProps) => {
    const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target?.value);
      },
      [onChange]
    );
    return (
      <div
        className={classNames("inputWrapper", { [cls.readonly]: readonly }, [
          className,
        ])}
      >
        {placeholder && <div className={placeholder}>{placeholder}</div>}
        <input
          className={classNames(cls.Input, {}, [className])}
          type={type}
          onChange={onChangeHandler}
          value={value}
          readOnly={readonly}
        />
      </div>
    );
  }
);
