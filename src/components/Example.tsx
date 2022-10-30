import React from "react";

interface ExampleProps {
  /**
   * Example contents
   */
  text: string;
}

/**
 * Example component
 */
export const Example = ({ text }: ExampleProps) => {
  return <span className="text-red-400">{text}</span>;
};
