import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          label="Age" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
        />
        {error && <Typography color="error" mt={1}>{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
      {submitted && (
        <Typography variant="h6" mt={2}>
          Submitted: Name - {name}, Age - {age}
        </Typography>
      )}
    </Box>
  );
}

export default Form;