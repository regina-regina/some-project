import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/HomeIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";
import ArticlesIcon from "shared/assets/icons/ArticlesIcon.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "О нас",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль",
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticlesIcon,
    text: "Статьи",
    authOnly: true,
  },
];
