import { Country } from 'entities/Country/model/types/country';
import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const options = useMemo(
      () => [
        { value: Country.Armenia, content: Country.Armenia },
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
      ],
      []
    );

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country);
    }, [onChange]);

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите страну")}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);
