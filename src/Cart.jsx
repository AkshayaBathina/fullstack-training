import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

function Item({ name, price, addToCart }) {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2, textAlign: "center", width: 200 }}>
      <Typography variant="h6" fontWeight="bold">{name}</Typography>
      <Typography variant="body1">Price: ${price}</Typography>
      <Button variant="contained" color="primary" onClick={() => addToCart(price)} sx={{ mt: 1 }}>
        Add to Cart
      </Button>
    </Paper>
  );
}

function Cart() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (price) => {
    setTotalItems(totalItems + 1);
    setTotalCost(totalCost + price);
  };

  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Shopping Cart</Typography>
      <Typography variant="body1">Total Items: {totalItems}</Typography>
      <Typography variant="body1">Total Cost: ${totalCost.toFixed(2)}</Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Item name="Chocolate" price={10} addToCart={addToCart} />
        <Item name="Ice Cream" price={20} addToCart={addToCart} />
      </Box>
    </Box>
  );
}

export default Cart;