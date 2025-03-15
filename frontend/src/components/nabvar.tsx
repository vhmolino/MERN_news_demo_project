import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My News App
        </Typography>
        <Box>
          <Button
            onClick={() => {
              navigate("/");
            }}
            color="inherit"
          >
            Inicio
          </Button>
          <Button
            onClick={() => {
              navigate("/news");
            }}
            color="inherit"
          >
            Noticias
          </Button>
          <Button
            onClick={() => {
              navigate("/news/archived");
            }}
            color="inherit"
          >
            Archivadas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
