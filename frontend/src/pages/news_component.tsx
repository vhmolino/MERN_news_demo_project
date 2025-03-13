// import { useState } from "react";

import React from "react";
import { enqueueSnackbar } from "notistack";
import { Box, Typography } from "@mui/material";
import { getNews } from "../api/news/get-news";
import { New } from "../types/news";
import Loader from "../components/loader";

function NewsListComponent() {
  const [news, setNews] = React.useState<New[]>([]);
  const [isloading, setisLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        if (data.error) {
          enqueueSnackbar(data.error, {
            variant: "error",
            autoHideDuration: 1500,
            preventDuplicate: true,
          });
          return;
        }

        setNews(data.data);
        enqueueSnackbar("Noticias obtenidas", {
          variant: "success",
          autoHideDuration: 1500,
          preventDuplicate: true,
        });
      } catch (error) {
        console.error("Error obteniendo noticias:", error);
      }
    };
    void fetchNews().finally(() => {
      setisLoading(false);
    });
  }, []);

  if (isloading) {
    return <Loader />;
  }
  return (
    <Box
      height={"100%"}
      textAlign="center"
      p={4}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      {news.map((e) => {
        return <Typography key={e.title + e._id}>{e.title}</Typography>;
      })}
    </Box>
  );
}

export default NewsListComponent;
