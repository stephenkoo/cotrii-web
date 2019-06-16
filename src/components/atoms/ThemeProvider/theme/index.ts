import { brandColors } from "./settings/colors";
import { boxShadows } from "./settings/shadows";
import { fonts, fontSizes } from "./settings/typography";

export const theme = {
  fonts,
  fontSizes,
  colors: brandColors,
  radii: {
    sharp: 0,
    standard: "3px",
    rounded: "8px"
  },
  shadows: {
    box: boxShadows
  }
};
