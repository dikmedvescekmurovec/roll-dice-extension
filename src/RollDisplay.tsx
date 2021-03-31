import { Box, Typography } from "@material-ui/core";
import React from "react";

interface RollDisplayProps {
  diceRolls: number[];
}

const RollDisplay: React.FC<RollDisplayProps> = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box display="flex">
        {props.diceRolls.map((roll) => (
          <Box padding={1}>
            {" "}
            <Typography>{roll}</Typography>
          </Box>
        ))}
      </Box>
      <Box padding={1}>
        <Typography variant="h1">
          {" "}
          {props.diceRolls.reduce((acc, value) => acc + value)}
        </Typography>
      </Box>
    </Box>
  );
};

export default RollDisplay;
