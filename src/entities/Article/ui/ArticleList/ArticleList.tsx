import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.BIG } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={cls.card}
      article={article}
      view={ArticleView.BIG}
      key={article.id}
    />
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((item, index) => (
            <ArticleListItemSkeleton
              view={view}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={cls.card}
            />
          ))}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
