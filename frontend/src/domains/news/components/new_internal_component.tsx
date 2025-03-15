import React from "react";
import { useParams } from "react-router-dom";

import { Box, Typography, Container } from "@mui/material";
import { New } from "../types/types";

const NewsDetailComponent = ({ newData }: { newData: New }) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          {newData.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {newData.content}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Autor: {newData.author}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Fecha: {new Date(newData.date).toLocaleDateString()}
        </Typography>
      </Box>
    </Container>
  );
};

export default NewsDetailComponent;
