import React from "react";
import classes from "./Navbar.module.css";
import menuItems from "./menuItems";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

function NavBar() {
  return (
    <nav className={classes.navBar}>
      <h1 className={classes.navbarLogo}>
        FreeRoom
        <CalendarTodayIcon />
      </h1>
      <ul className={classes.navMenu}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={classes.navLinks} href={item.url}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
