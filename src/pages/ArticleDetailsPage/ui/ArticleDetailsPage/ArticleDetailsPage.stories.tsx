import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Article } from "entities/Article";
import {
  ArticleBlockType,
  ArticleType,
} from "entities/Article/model/types/article";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ARTICLES_MOCK } from "entities/Article/ui/ArticleList/articlesMock";
import ArticleDetailsPage from "./ArticleDetailsPage";

export default {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

const article: Article = ARTICLES_MOCK[0];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];
