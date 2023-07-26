import { FC } from "react";

import { controlButton, sidebarButton } from "./buttonTemp.css";

type ButtonProps = {
  type: "control" | "sidebar";
  onClick: () => void;
  title: string;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, onClick, title, children }) => {
  return (
    <button
      type="button"
      className={type === "sidebar" ? sidebarButton : controlButton}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
