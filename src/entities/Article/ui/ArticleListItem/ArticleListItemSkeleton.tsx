import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton
                width={30}
                height={30}
                border="50%"
                className={cls.avatar}
              />
              <Skeleton width={70} height={16} className={cls.username} />
            </div>
            <Skeleton width={450} height={24} className={cls.title} />
            <Skeleton height={200} className={cls.image} />
            <div className={cls.footer}>
              <Skeleton width="100%" className={cls.views} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.image} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={200} height={16} className={cls.type} />
          </div>
          <Skeleton width={200} height={16} className={cls.title} />
        </Card>
      </div>
    );
  },
);
