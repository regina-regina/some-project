import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { ArticleView } from "../../model/types/article";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const viewTypes = [
    {
      view: ArticleView.SMALL,
      title: "Плитка",
    },
    {
      view: ArticleView.BIG,
      title: "Список",
    },
  ];

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          className={classNames(cls.btnAll, {
            [cls.notSelected]: item.view !== view,
          })}
          onClick={onClick(item.view)}
          theme={ButtonTheme.CLEAR}
          key={item.title}
        >
          {t(item.title)}
        </Button>
      ))}
    </div>
  );
});
