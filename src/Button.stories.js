import React from "react";
import { Button } from "./Button";

export default {
  title: "All Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = (args) => <Button {...args} />;

Primary.args = {
  label: "Test Text",
  primary: true,
};

export const Secondary = (args) => <Button {...args} />;

Secondary.args = {
  label: "Test Text",
  secondary: true,
};

export const SmallButton = (args) => <Button {...args} />;

SmallButton.args = {
  label: "Test Text",
  size: "small",
};
