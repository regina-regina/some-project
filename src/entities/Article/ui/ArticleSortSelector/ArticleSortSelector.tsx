import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "../../model/types/article";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дате создания"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("количеству просмотров"),
      },
    ],
    [t]
  );

  // const changeSortHandler = useCallback(
  //   (newSort: string) => {
  //     onChangeSort(newSort as ArticleSortField);
  //   },
  //   [onChangeSort]
  // );

  // const changeOrderHandler = useCallback(
  //   (newOrder: string) => {
  //     onChangeOrder(newOrder as SortOrder);
  //   },
  //   [onChangeOrder]
  // );

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t("Сортировать ПО")}
      />
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t("по")}
        className={cls.order}
      />
    </div>
  );
};
