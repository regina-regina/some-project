import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar } from "./Avatar";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: { backgroundColor: { control: "color" } },
  args: { to: "/" },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "150px",
  src: "https://media.glamour.com/photos/569579a05fff94d44eebf3ad/master/w_1200,c_limit/beauty-2012-01-0103-03-guy-pretty-girl-pretty-makeup-mascara_li.jpg",
};
