// import { useState } from "react";

import React from "react";
import { enqueueSnackbar } from "notistack";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { getNews } from "../domains/news/interfaces/get_news";
import { New } from "../domains/news/types/types";
import Loader from "../components/loader";
import NewsCard from "../domains/news/components/new_card_component";
import AlertDialog from "../components/alertDialog";
import AddNewForm from "../domains/news/components/add_new_component";
import { addNew } from "../domains/news/interfaces/add_new";
import validateAddNewForm from "../hooks/validateAddNewForm";

function NewsComponent() {
  const [news, setNews] = React.useState<New[]>([]);
  const [actualPage, setActualPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [isloading, setisLoading] = React.useState<boolean>(true);
  const [newNew, setNewNew] = React.useState<Partial<New>>({
    title: "",
    description: "",
    content: "",
    author: "",
    date: new Date(),
    archivedDate: null,
  });
  console.log(actualPage);
  const fetchNews = React.useCallback(async () => {
    try {
      const data = await getNews({ actualPage: actualPage });

      if (data.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 1500,
          preventDuplicate: true,
        });
        return;
      }

      setNews(data.data.news);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error("Error obteniendo noticias:", error);
    }
  }, [actualPage]);

  React.useEffect(() => {
    void fetchNews().finally(() => {
      setisLoading(false);
    });
  }, [fetchNews, actualPage]);

  if (isloading) {
    return <Loader />;
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      textAlign="center"
      p={4}
      height={"100%"}
    >
      <Grid container>
        <Grid item xs={6.5}>
          <Typography variant="h3" textAlign={"right"}>
            Noticias
          </Typography>
        </Grid>
        <Grid item container xs={5.5} justifyContent={"right"}>
          <AlertDialog
            title={"Añadir noticia"}
            description={<AddNewForm newValues={newNew} setNew={setNewNew} />}
            buttonText={"Añadir noticia"}
            buttonColor={"info"}
            onAccept={async (handleCLose) => {
              console.log(newNew);
              const response = validateAddNewForm(newNew);
              if (response != null) {
                enqueueSnackbar(response.error, {
                  variant: "error",
                  autoHideDuration: 1500,
                  preventDuplicate: true,
                });
              } else {
                const response = await addNew(newNew);
                console.log(response);

                if (response.error == null) {
                  setNews((prev) => [response.data, ...prev]);
                  enqueueSnackbar("Noticia añadida correctamente", {
                    variant: "success",
                    autoHideDuration: 1500,
                    preventDuplicate: true,
                  });
                  handleCLose();
                  setNewNew({
                    title: "",
                    description: "",
                    content: "",
                    author: "",
                    date: new Date(),
                    archivedDate: null,
                  });
                } else {
                  enqueueSnackbar(response.error, {
                    variant: "error",
                    autoHideDuration: 1500,
                    preventDuplicate: true,
                  });
                }
              }
            }}
            onCancel={() => {
              setNewNew({
                title: "",
                description: "",
                content: "",
                author: "",
                date: new Date(),
                archivedDate: null,
              });
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} pt={2} m={0} minHeight={"70vh"}>
        {news.map((e) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={e.title + e._id}>
              <NewsCard newData={e} view={"news"} setNews={setNews} />
            </Grid>
          );
        })}
      </Grid>
      <Stack padding={5}>
        <Pagination
          page={actualPage}
          count={totalPages}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setActualPage(value);
          }}
        />
      </Stack>
    </Box>
  );
}

export default NewsComponent;
