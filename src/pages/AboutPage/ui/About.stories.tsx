import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import About from "./About";

export default {
  title: "pages/About",
  component: About,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const NormalAbout = Template.bind({});
NormalAbout.args = {};

export const DarkAbout = Template.bind({});
DarkAbout.args = {};
DarkAbout.decorators = [ThemeDecorator(Theme.DARK)];
