import { classNames } from "shared/lib/classNames/classNames";
import React, { ChangeEvent, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        onChange?.(value);
      },
      [onChange],
    );

    const optionList = useMemo(
      () =>
        options?.map((opt) => (
          <option value={opt.value} key={opt.value} className={cls.option}>
            {opt.content}
          </option>
        )),
      [options],
    );

    return (
      <div className={classNames(cls.Wrapper, {}, [className])}>
        {label && <span className={cls.label}>{label}</span>}
        <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
          {optionList}
        </select>
      </div>
    );
  },
);
