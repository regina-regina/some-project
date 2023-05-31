import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...(args as Record<string, any>)} />
);

export const NormalCurrencySelect = Template.bind({});
NormalCurrencySelect.args = {};

export const DarkCurrencySelect = Template.bind({});
DarkCurrencySelect.args = {};
DarkCurrencySelect.decorators = [ThemeDecorator(Theme.DARK)];
