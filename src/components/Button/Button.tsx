import { FC } from "react";
import { button } from "./Button.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
};
