import React from "react";
import { Box, Typography,List, ListItem, ListItemText } from "@mui/material";

function User({ name, email }) {
  return (
    <ListItem sx={{ bgcolor: "#f5f5f5", borderRadius: 2, mb: 1 }}>
      <ListItemText primary={name} secondary={email} />
    </ListItem>
  );
}

function UserList({ users }) {
  return (
    <Box textAlign="center" p={4} bgcolor="white" color="black" borderRadius={2} boxShadow={3} maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>User List</Typography>
      <List>
        {users.map((user) => (
          <User key={user.id} name={user.name} email={user.email} />
        ))}
      </List>
    </Box>
  );
}

export default function ListOfUser() {
  const users = [
    { id: 1, name: "Akshaya Bathina", email: "akshayabathina@gmail.com" },
    { id: 2, name: "Sindhu Akkala", email: "Sindhuakkala@gmail.com" },
    { id: 3, name: "Chandana Gutha", email: "chandanagutha@gmail.com" }
  ];

  return <UserList users={users} />;
}
