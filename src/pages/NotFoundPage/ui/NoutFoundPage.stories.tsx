import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const NormalNotFoundPage = Template.bind({});
NormalNotFoundPage.args = {};

export const DarkNotFoundPage = Template.bind({});
DarkNotFoundPage.args = {};
DarkNotFoundPage.decorators = [ThemeDecorator(Theme.DARK)];
