/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: "Tab1",
      content: <div>Tab1</div>,
    },
    {
      value: "Tab2",
      content: <div>Tab2</div>,
    },
    {
      value: "Tab3",
      content: <div>Tab3</div>,
    },
  ],
  value: "Tab2",
  onTabClick: action("onTabClick"),
};
