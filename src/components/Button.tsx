import React from "react";

export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this button disabled?
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const styles = ["font-bold", "rounded"];

  const mode = primary
    ? "bg-blue-500 hover:bg-blue-400"
    : "bg-gray-300 hover:bg-gray-200";

  disabled
    ? styles.push("bg-gray-100 text-gray-300 border border-gray-300")
    : styles.push(mode);

  const sizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  if (size) styles.push(sizes[size]);

  return (
    <button type="button" className={styles.join(" ")} {...props}>
      {label}
    </button>
  );
};
