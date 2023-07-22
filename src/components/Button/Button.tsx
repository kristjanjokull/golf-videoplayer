import { FC } from "react";
import { button } from "./Button.css";

type ButtonProps = {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, title, children }) => {
  return (
    <button className={button} onClick={onClick} title={title}>
      {children}
    </button>
  );
};
