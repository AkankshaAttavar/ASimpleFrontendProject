import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../Styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">CONTEXT</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.discription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;