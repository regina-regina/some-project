import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...(args as Record<string, any>)} />
);

export const NormalProfileCard = Template.bind({});
NormalProfileCard.args = {
  data: {
    age: 22,
    avatar: "",
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
    first: "one",
    lastname: "two",
    username: "one",
  },
};

export const withError = Template.bind({});
withError.args = {
  error: "true",
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
