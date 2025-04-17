import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function Child({ name }) {
  return (
    <Typography variant="h6">Hello, {name}!</Typography>
  );
}

function Prop() {
  const [name] = useState("Alice");

  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom> </Typography>
      <Child name={name} />
    </Box>
  );
}

export default Prop;