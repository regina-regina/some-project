import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import WatchIcon from "shared/assets/icons/WatchIcon.svg";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink";
import cls from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const [isHover, bindHover] = useHover();

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (article) => article.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar
              size="30"
              src={article.user.avatar}
              className={cls.avatar}
            />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          <Text text={article.type.join(", ")} className={cls.type} />
          <img src={article.img} alt={article.title} className={cls.image} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t("Читать далее")}</Button>
            </AppLink>

            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={WatchIcon} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      {...bindHover}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(", ")} className={cls.type} />
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={WatchIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
