import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "../components/Page";

export default {
  title: "Pages/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const ContentPage = Template.bind({});

ContentPage.args = {
  title: "TITLE",
  body: "Content",
};
