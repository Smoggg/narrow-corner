import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Example } from "../components/Example";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Example",
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const HalloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HalloWorld.args = {
  text: "Hallo World!",
};
