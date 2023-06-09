import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "./Loader";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.args = {};

export const DarkDarkTheme = Template.bind({});
DarkDarkTheme.args = {};
DarkDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
