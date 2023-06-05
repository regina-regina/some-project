import { classNames } from "shared/lib/classNames/classNames";
import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const options = useMemo(
      () => [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.USD, content: Currency.USD },
      ],
      [],
    );

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите валюту")}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  },
);
