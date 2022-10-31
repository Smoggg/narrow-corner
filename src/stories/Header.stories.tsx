import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const ContentHeader = Template.bind({});
ContentHeader.args = {
  logo: "logo",
  title: "BLOG",
};
