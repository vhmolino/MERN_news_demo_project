import ReactLogo from "../assets/react.svg";
import Mongologo from "../assets/mongodb.svg";
import Expresslogo from "../assets/express.svg";
import Nodelogo from "../assets/node.svg";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign="center"
      height={"100%"}
      p={4}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems={"center"}
        spacing={4}
        mb={3}
      >
        <Link href="https://react.dev" target="_blank">
          <img src={Mongologo} width={100} />
        </Link>
        <Link href="https://expressjs.com/" target="_blank">
          <img src={Expresslogo} width={100} />
        </Link>
        <Link href="https://www.mongodb.com" target="_blank">
          <img src={ReactLogo} width={100} />
        </Link>

        <Link href="https://nodejs.org/es" target="_blank">
          <img src={Nodelogo} width={100} />
        </Link>
      </Stack>

      <Typography variant="h3" gutterBottom>
        Bienvenido a la demo
      </Typography>

      <Button
        sx={{ maxWidth: 400, mx: "auto", mt: 3 }}
        variant="contained"
        onClick={() => navigate("/news")}
      >
        ENTRAR
      </Button>

      <Typography variant="body2" mt={3}>
        Haz clic en los logos de referencia a el stack MERN para acceder a sus
        respectivas webs.
      </Typography>
    </Box>
  );
}

export default Home;
