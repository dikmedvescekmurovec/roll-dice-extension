import {
  Box,
  Button,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import RollDiceButton from "./RollDiceButton";
import RollDisplay from "./RollDisplay";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: "#FFFFFF",
    },
    fontFamily: [
      "Poppins",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
  },
});

function App() {
  const [diceRolls, setDiceRolls] = useState<number[]>([0, 0]);
  const [count, setCount] = useState(2);

  return (
    <ThemeProvider theme={theme}>
      <Box
        height="100%"
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgcolor="#006d77"
        padding="16px"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          <Button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
            <Typography>-</Typography>
          </Button>
          <RollDisplay diceRolls={diceRolls}></RollDisplay>{" "}
          <Button onClick={() => setCount(count + 1)}>
            <Typography>+</Typography>
          </Button>
        </Box>

        <RollDiceButton
          setDiceRolls={setDiceRolls}
          count={count}
        ></RollDiceButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
