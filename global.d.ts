declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const className: IClassNames;
  export = className;
}

declare module "*.module.scss";

declare module "*.svg" {
  // import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare const __IS_DEV__: boolean;
declare const __API__: string;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
