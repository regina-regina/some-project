import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const html = () => (
  <>
    <div>Hi there</div>
    <div>Hi there</div>
  </>
);

export const Row = Template.bind({});
Row.args = {
  children: html(),
  justify: "center",
  align: "center",
  gap: "16",
};

export const Column = Template.bind({});
Column.args = {
  children: html(),
  justify: "center",
  align: "center",
  direction: "column",
  gap: "32",
};

export const RowGap = Template.bind({});
RowGap.args = {
  children: html(),
  gap: "32",
};
