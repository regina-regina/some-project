import { classNames } from "shared/lib/classNames/classNames";
import React, { InputHTMLAttributes, memo, useCallback } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
  }: InputProps) => {
    const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target?.value);
      },
      [onChange]
    );
    return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input
          className={classNames(cls.Input, {}, [className])}
          type={type}
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    );
  }
);
