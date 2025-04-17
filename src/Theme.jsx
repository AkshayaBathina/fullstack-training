import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

function Child({ theme }) {
  return (
    <Box
      p={2}
      border={1}
      borderRadius={2}
      bgcolor={theme === "light" ? "#f5f5f5" : "#555"}
      color={theme === "light" ? "black" : "white"}
    >
      <Typography variant="h6">The current theme is {theme}</Typography>
    </Box>
  );
}

function Parent({ theme }) {
  return (
    <Box
      p={2}
      border={1}
      borderRadius={2}
      bgcolor={theme === "light" ? "white" : "#333"}
      color={theme === "light" ? "black" : "white"}
      mt={2}
    >
      <Typography variant="h5">Parent Component</Typography>
      <Child theme={theme} />
    </Box>
  );
}

function Grandparent() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Box
      textAlign="center"
      p={4}
      bgcolor={theme === "light" ? "white" : "#222"}
      color={theme === "light" ? "black" : "white"}
      borderRadius={2}
      boxShadow={3}
      maxWidth={400}
      mx="auto"
      mt={4}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Grandparent Component
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleTheme}
        sx={{ mb: 2 }}
      >
        Toggle Theme
      </Button>
      <Parent theme={theme} />
    </Box>
  );
}

export default Grandparent;