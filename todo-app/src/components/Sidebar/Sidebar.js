import React from "react";
import "./Sidebar.css";
import fb from "../../images/facebook.png";
import wp from "../../images/whatsapp.png";
import insta from "../../images/instagram.png";
import SidebarButton from "../SidebarButton/SidebarButton";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarButton logoImg={fb} title="Facebook" bottomDivider={true} />
        <SidebarButton logoImg={wp} title="Whatsapp" bottomDivider={true} />
        <SidebarButton
          logoImg={insta}
          title="Instagram"
          bottomDivider={false}
        />
      </div>
    );
  }
}

export default Sidebar;
