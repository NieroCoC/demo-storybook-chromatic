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

export const Small = (args) => <Button {...args} />;

Small.args = {
  label: "Test Text",
  size: "small",
};

export const Medium = (args) => <Button {...args} />;

Medium.args = {
  label: "Test Text",
  size: "medium",
};

export const Large = (args) => <Button {...args} />;

Medium.args = {
  label: "Test Text",
  size: "large",
};
