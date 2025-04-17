
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

function Child({ updateMessage }) {
  return (
    <Button variant="contained" color="primary" onClick={updateMessage}>
      Change Message
    </Button>
  );
}

function Parent() {
  const [message, setMessage] = useState("Hello");

  const handleMessageChange = () => {
    setMessage("Goodbye");
  };

  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {message}
      </Typography>
      <Child updateMessage={handleMessageChange} />
    </Box>
  );
}

export default Parent;