import React, { FunctionComponent } from "react";
import { sidebar } from "./sidebar.css";

interface SidebarProps {
  components: FunctionComponent[];
}

const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  return (
    <div className={sidebar}>
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
