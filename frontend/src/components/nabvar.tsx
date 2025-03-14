import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My News App
        </Typography>
        <Box>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Noticias</Button>
          <Button color="inherit">Archivadas</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
