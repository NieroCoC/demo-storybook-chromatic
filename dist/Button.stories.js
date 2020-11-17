"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Large = exports.Medium = exports.Small = exports.Secondary = exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _default = {
  title: "All Buttons/Button",
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  },
  parameters: {
    // Set the viewports in Chromatic at a component level.
    chromatic: {
      viewports: [320, 1200]
    }
  }
};
exports.default = _default;

var Primary = function Primary() {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Test Text",
    primary: true
  });
};

exports.Primary = Primary;

var Secondary = function Secondary(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

exports.Secondary = Secondary;
Secondary.args = {
  label: "Test Text",
  secondary: true
};

var Small = function Small(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

exports.Small = Small;
Small.args = {
  label: "Test Text",
  size: "small"
};

var Medium = function Medium(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

exports.Medium = Medium;
Medium.args = {
  label: "Test Text",
  size: "medium"
};

var Large = function Large(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

exports.Large = Large;
Large.args = {
  label: "Test Text",
  size: "large"
};