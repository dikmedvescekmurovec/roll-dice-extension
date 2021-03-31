import { Box, Button } from "@material-ui/core";
import React, { useEffect } from "react";

interface RollDiceButtonProps {
  count: number;
  setDiceRolls: React.Dispatch<React.SetStateAction<number[]>>;
}

const getDiceRoll = () => {
  return Math.ceil(Math.random() * 6);
};

const getDiceRolls = (count: number) => {
  var rolls: number[] = [];
  for (var i = 0; i < count; i++) {
    rolls.push(getDiceRoll());
  }
  return rolls;
};

const RollDiceButton: React.FC<RollDiceButtonProps> = (props) => {
  useEffect(() => {
    props.setDiceRolls(getDiceRolls(props.count));
  }, [props.count]);
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.setDiceRolls(getDiceRolls(props.count))}
      >
        Roll Dice
      </Button>
    </Box>
  );
};

export default RollDiceButton;
