import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleView } from "../../model/types/article";
import { ArticleListItem } from "./ArticleListItem";
import { ARTICLES_MOCK } from "../ArticleList/articlesMock";

export default {
  title: "entities/ArticleListItem",
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const ArticleBig = Template.bind({});
ArticleBig.args = {
  article: ARTICLES_MOCK[0],
  view: ArticleView.BIG,
};

export const ArticleSmall = Template.bind({});
ArticleSmall.args = {
  article: ARTICLES_MOCK[0],
  view: ArticleView.SMALL,
};
