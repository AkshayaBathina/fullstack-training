
import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box textAlign="center" p={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </Button>
      {isVisible && <Typography mt={2}>Hello, world!</Typography>}
    </Box>
  );
}