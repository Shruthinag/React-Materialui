import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function GroupedButtons({
  incrementClick,
  decrementClick,
  count,
}) {
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={incrementClick}>+</Button>
      {<Button disabled>{count}</Button>}
      {
        <Button disabled={count === 1} onClick={decrementClick}>
          -
        </Button>
      }
    </ButtonGroup>
  );
}
