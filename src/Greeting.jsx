
import React from "react";
import { Box, Typography } from "@mui/material";

function Greeting({ name }) {
  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {name ? `Hello, ${name}!` : "Hello, Guest!"}
      </Typography>
    </Box>
  );
}

export default function Greet() {
  const userName = ""; 

  return <Greeting name={userName} />;
}
