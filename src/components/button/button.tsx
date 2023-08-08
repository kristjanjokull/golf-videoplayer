import { FC } from "react";

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
      className={`button ${
        type === "sidebar" ? "button__sidebar" : "button__control"
      }`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
