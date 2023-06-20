import { classNames } from "shared/lib/classNames/classNames";
import React, { ChangeEvent, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      onChange?.(value as T);
    },
    [onChange]
  );

  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
