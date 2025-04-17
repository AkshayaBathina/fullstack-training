import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

function Child({ count }) {
  return <Typography variant="h5">Current Count: {count}</Typography>;
}

export default function Current() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" p={2}>
      <Child count={count} />
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Box>
  );
}