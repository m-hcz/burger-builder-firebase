import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burder with the following ingrediences:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" click={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
}

export default OrderSummary;
