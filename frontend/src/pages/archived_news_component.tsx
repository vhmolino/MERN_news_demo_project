// import { useState } from "react";

import React from "react";
import { enqueueSnackbar } from "notistack";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { New } from "../domains/news/types/types";
import Loader from "../components/loader";
import NewsCard from "../domains/news/components/new_card_component";
import { getArchivedNews } from "../domains/news/interfaces/get_archived_news";

function ArchivedNewsComponent() {
  const [archivedNews, setArchivedNews] = React.useState<New[]>([]);
  const [isloading, setisLoading] = React.useState<boolean>(true);
  const [actualPage, setActualPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const fetchNews = React.useCallback(async () => {
    try {
      const data = await getArchivedNews({ actualPage: actualPage });

      if (data.error) {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 1500,
          preventDuplicate: true,
        });
        return;
      }

      setArchivedNews(data.data.news);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error("Error obteniendo noticias archivadas:", error);
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
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"}>
            Noticias archivadas
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} pt={2} m={0} minHeight={"70vh"}>
        {archivedNews.map((e) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={e.title + e._id}>
              <NewsCard
                newData={e}
                view={"archived"}
                setNews={setArchivedNews}
              />
            </Grid>
          );
        })}
      </Grid>
      <Stack padding={5}>
        <Pagination
          page={actualPage}
          count={totalPages}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            console.log(value);
            setActualPage(value);
          }}
        />
      </Stack>
    </Box>
  );
}

export default ArchivedNewsComponent;
