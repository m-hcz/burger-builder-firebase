import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

function Modal(props) {
  return (
    <Auxiliary>
      <Backdrop closed={props.closed} show={props.show} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
}

export default Modal;
