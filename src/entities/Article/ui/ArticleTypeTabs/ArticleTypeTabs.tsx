import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.IT, content: t("Айти") },
      { value: ArticleType.ALL, content: t("Все") },
      { value: ArticleType.SCIENCE, content: t("Наука") },
      { value: ArticleType.ECONOMICS, content: t("Экономика") },
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={classNames("", {}, [className])}
    />
  );
});
