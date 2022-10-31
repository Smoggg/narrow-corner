import React from "react";
import { Icon, IconKeys } from "./Icon";

interface HeaderProps {
  logo?: IconKeys;
  title?: string;
}

export const Header = ({ logo, title }: HeaderProps) => (
  <header>
    <div className="px-3 flex items-center justify-between py-1.5 border-b-8 border-black">
      <div>
        {logo && <Icon iconKey={logo} className="w-8 h-8 inline-block" />}{" "}
        <h1 className="align-middle inline-block font-black">{title}</h1>
      </div>
    </div>
  </header>
);
