module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 0,
      preserve: true,
      browsers: ">0.25%, not op_mini all",
      // features: {
      //   "color-mod-function": false,
      //   "focus-within-pseudo-class": false,
      // },
    },
    "postcss-css-variables": {
      preserve: true,
    },
    // "postcss-color-function": {
    //   preserveCustomProps: false,
    // },
    "postcss-mixins": {},
    "postcss-nested": {},
  },
};
