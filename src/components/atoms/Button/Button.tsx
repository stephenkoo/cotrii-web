/* 
Button:
// block/align-self={stretch}? / width=?
// color: success, warning, danger, info/default/primary
*/

import React from "react";
// import { StrictUnion } from "types/utils";

type Props = {
  children?: React.ReactNode;
  appearance?: "solid" | "outline" | "text";
  isTranslucent?: boolean;
  shape?: "standard" | "round";
  color?: "primary" | "danger"; // solid: colored background + white text, outline: dark colored border/text
  isInvertColor?: boolean; // white background + colored text, outline: white text, colored background on hover
  size?: "small" | "medium" | "large"; // affects padding & maybe font size
  href?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingElement?: React.ReactNode;
  isDisabled?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  appearance = "outline",
  isTranslucent,
  shape = "standard",
  color = "primary",
  isInvertColor,
  size = "medium",
  href,
  ariaLabel,
  icon,
  endIcon,
  isLoading,
  loadingElement,
  isDisabled
}) => {
  const LinkOrButton = href ? "a" : "button";

  return (
    <LinkOrButton
      href={href}
      aria-label={ariaLabel}
      disabled={isLoading || isDisabled}
    >
      {isLoading ? "loading-icon" : icon}
      {isLoading ? loadingElement : children}
      {endIcon}
    </LinkOrButton>
  );
};

/*
Inherited button props: elevation

Things to build:
buttonDropdown/Popover: Ant Design, Uber, Evergreen
<ButtonGroup></ButtonGroup>: Ant Design, 
<Icon></Icon>
*/
// Link: href, disabled, text (not children)
