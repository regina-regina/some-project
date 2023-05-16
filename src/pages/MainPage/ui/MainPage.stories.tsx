import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const NormalMainPage = Template.bind({});
NormalMainPage.args = {};

export const DarkMainPage = Template.bind({});
DarkMainPage.args = {};
DarkMainPage.decorators = [ThemeDecorator(Theme.DARK)];
