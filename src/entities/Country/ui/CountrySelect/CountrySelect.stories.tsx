import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CountrySelect } from "./CountrySelect";

export default {
  title: "entities/CountrySelect",
  component: CountrySelect,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...(args as Record<string, any>)} />
);

export const NormalCountrySelect = Template.bind({});
NormalCountrySelect.args = {};

export const DarkCountrySelect = Template.bind({});
DarkCountrySelect.args = {};
DarkCountrySelect.decorators = [ThemeDecorator(Theme.DARK)];
