import React from "react";
import "./Sidebar.scss";
import fb from "../../images/facebook.png";
import wp from "../../images/whatsapp.png";
import insta from "../../images/instagram.png";
import SidebarButton from "../SidebarButton/SidebarButton";
import { List } from "immutable";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarItems: List([
        { key: 1, title: "Homepage" },
        { key: 2, title: "About Us" },
        { key: 3, title: "Contact" },
      ]),
    };
  }

  render() {
    return (
      <div className="main-content__sidebar">
        {this.state.sidebarItems.map((item) => {
          return (
            <SidebarButton key={item.key} logoImg={fb} title={item.title} />
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
