import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const PrimaryThemeSwitcher = Template.bind({});
PrimaryThemeSwitcher.args = {};

export const DarkThemeSwitcher = Template.bind({});
DarkThemeSwitcher.args = {};
DarkThemeSwitcher.decorators = [ThemeDecorator(Theme.DARK)];
