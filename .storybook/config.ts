import requireContext from "require-context.macro";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

// automatically import all files ending in *.stories.tsx
// requireContext used instead of require.context to add polyfill for Jest,
// which is needed for storyshots (see storyshots docs:
// https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core)
const req = requireContext("../src", true, /.stories.tsx$/);

// globally add knobs to all stories
addDecorator(withKnobs);
addDecorator(withA11y);

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
