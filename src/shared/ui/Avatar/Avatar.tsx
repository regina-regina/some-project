import React, { useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: string;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo(
    () => ({
      width: size || "100px",
      height: size || "100px",
    }),
    [size],
  );

  return (
    <img
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
      alt={alt}
    />
  );
};
