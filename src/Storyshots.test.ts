import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

// Run test using default storyshots-puppeteer values:
// https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer
initStoryshots({ suite: "Image storyshots", test: imageSnapshot() });
