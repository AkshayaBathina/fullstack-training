import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={() => setCount(count - 1)} sx={{ mx: 1 }}>decrement</Button>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)} sx={{ mx: 1 }}>Increment</Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(0)} sx={{ mx: 1 }}>Reset</Button>
      </Box>
    </Box>
  );
}