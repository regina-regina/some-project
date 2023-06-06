import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Skeleton } from "./Skeleton";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  width: "100%",
  height: "200px",
};

export const Circle = Template.bind({});
Circle.args = {
  border: "50%",
  width: "200px",
  height: "200px",
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: "100%",
  height: "200px",
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: "50%",
  width: "200px",
  height: "200px",
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
