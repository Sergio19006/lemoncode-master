import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Paper } from "@mui/material";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          User Detail
        </Typography>
        <Typography variant="h6">User Id: {id}</Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" component={Link} to="/list">
            Back to list page
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
