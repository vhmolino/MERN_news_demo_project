import React from "react";
import { TextField, Grid } from "@mui/material";
import { New } from "../types/types";

const NewComponentInternal = ({
  newValues,
  setNew,
}: {
  newValues: Partial<New>;
  setNew: React.Dispatch<React.SetStateAction<Partial<New>>>;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          name="title"
          value={newValues.title}
          onChange={handleInputChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          name="description"
          value={newValues.description}
          onChange={handleInputChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contenido"
          variant="outlined"
          fullWidth
          name="content"
          value={newValues.content}
          onChange={handleInputChange}
          required
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Autor"
          variant="outlined"
          fullWidth
          name="author"
          value={newValues.author}
          onChange={handleInputChange}
          required
        />
      </Grid>
    </Grid>
  );
};

export default NewComponentInternal;
