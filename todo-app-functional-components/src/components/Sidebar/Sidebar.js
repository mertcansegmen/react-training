import React, { useState } from "react";
import "./Sidebar.scss";
import fb from "../../images/facebook.png";
import wp from "../../images/whatsapp.png";
import insta from "../../images/instagram.png";
import SidebarButton from "./SidebarButton/SidebarButton";
import * as I from "immutable";

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState(
    I.List([
      { key: 1, title: "Homepage", logoImg: fb },
      { key: 2, title: "About Us", logoImg: wp },
      { key: 3, title: "Contact", logoImg: insta },
    ])
  );

  return (
    <div className="main-content__sidebar">
      {sidebarItems.map((item) => {
        return (
          <SidebarButton
            key={item.key}
            logoImg={item.logoImg}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
