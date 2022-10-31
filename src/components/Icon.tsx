import React from "react";
import Logo from "../icons/Logo";

export type IconKeys = "logo";

export interface IconProps {
  /**
   * Icon identifier
   */
  iconKey: IconKeys;
  /**
   * classes to define things such as width or height
   */
  className?: string;
}

export interface IconSVGProps {
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
}

export const iconClassesByColors = {
  black: "text-gray-700",
  "gray-light": "text-gray-300",
  "gray-dark": "text-black",
};

//export const icons: { [key in IconKeys]: ReactElement } = {
const icons: { [key in IconKeys]: React.FC<IconSVGProps> } = {
  logo: Logo,
};

/**
 * Icon component

 */
export const Icon = ({ iconKey, className }: IconProps) => {
  const Component = icons[iconKey];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <Component
        primaryColor={iconClassesByColors["gray-dark"]}
        secondaryColor={iconClassesByColors["gray-light"]}
        tertiaryColor={iconClassesByColors["black"]}
      />
    </svg>
  );
};
