import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...(args as Record<string, any>)} />
);

export const NormalProfilePage = Template.bind({});
NormalProfilePage.args = {};
NormalProfilePage.decorators = [
  StoreDecorator({
    profile: {
      form: {
        age: 22,
        avatar: "",
        city: "Moscow",
        country: Country.Russia,
        currency: Currency.RUB,
        first: "one",
        lastname: "two",
        username: "one",
      },
    },
  }),
];

export const DarkProfilePage = Template.bind({});
DarkProfilePage.args = {};
DarkProfilePage.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        age: 22,
        avatar: "",
        city: "Moscow",
        country: Country.Russia,
        currency: Currency.RUB,
        first: "one",
        lastname: "two",
        username: "one",
      },
    },
  }),
];
