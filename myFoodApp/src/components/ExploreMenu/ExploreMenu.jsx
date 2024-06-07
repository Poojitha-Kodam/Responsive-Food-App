import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ listItem, setListItem }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore our Menu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem
        exercitationem quidem totam ratione iste qui et quisquam.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setListItem((value) =>
                  value === item.menu_name ? "All" : item.menu_name
                );
              }}
              className="explore-menu-list-item"
            >
              <img
                className={listItem === item.menu_name ? "active" : ""}
                src={item.menu_image}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
