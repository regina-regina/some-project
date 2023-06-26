import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleView } from "../../model/types/article";
import { ArticleList } from "./ArticleList";
import { ARTICLES_MOCK } from "./articlesMock";

export default {
  title: "entities/ArticleList",
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

export const ArticleBig = Template.bind({});
ArticleBig.args = {
  articles: ARTICLES_MOCK,
  view: ArticleView.BIG,
};

export const ArticleSmall = Template.bind({});
ArticleSmall.args = {
  articles: ARTICLES_MOCK,
  view: ArticleView.SMALL,
};

export const isLoadingSmall = Template.bind({});
isLoadingSmall.args = {
  articles: ARTICLES_MOCK,
  view: ArticleView.SMALL,
  isLoading: true,
};

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
  articles: ARTICLES_MOCK,
  view: ArticleView.BIG,
  isLoading: true,
};
