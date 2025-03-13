// import { useState } from "react";
import ReactLogo from "../assets/react.svg";
import Mongologo from "../assets/mongodb.svg";
import Expresslogo from "../assets/express.svg";
import Nodelogo from "../assets/node.svg";
// import React from "react";
// import { getNews } from "./api/news/get-news";
// import { New } from "./types/news";
// import { enqueueSnackbar } from "notistack";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const [news, setNews] = useState<New[]>([]);

  // React.useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const data = await getNews();
  //       if (data.error) {
  //         enqueueSnackbar(data.error, {
  //           variant: "error",
  //           autoHideDuration: 1500,
  //         });
  //         return;
  //       }
  //       setNews(data.data);
  //       enqueueSnackbar("Noticias obtenidas", {
  //         variant: "success",
  //         autoHideDuration: 1500,
  //       });
  //     } catch (error) {
  //       console.error("Error obteniendo noticias:", error);
  //     }
  //   };
  //   void fetchNews();
  // }, []);

  return (
    <Box
      height={"100%"}
      textAlign="center"
      p={4}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
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
