import { CSSProperties, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string | number;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
  );
};
