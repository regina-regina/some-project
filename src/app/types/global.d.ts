declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  // @ts-ignore
  export default SVG;
  // const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "frontend" | "storybook" | "jest";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
