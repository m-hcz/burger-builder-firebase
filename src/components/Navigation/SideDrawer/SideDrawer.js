import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

function SideDrawer(props) {
  let attechedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ];

  return (
    <Auxiliary>
      <Backdrop show={props.open} closed={props.closed} />
      <div className={attechedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
}

export default SideDrawer;
