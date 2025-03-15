import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { New } from "../types/types";
import AlertDialog from "../../../components/alertDialog";
import { archiveNew } from "../interfaces/archive_news";
import { enqueueSnackbar } from "notistack";
import { deleteNew } from "../interfaces/delete_new";

interface NewCardProps {
  newData: New;
  view: "news" | "archived";
  setNews: React.Dispatch<React.SetStateAction<New[]>>;
}

const NewCard = ({ newData, view, setNews }: NewCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        minWidth: 200,
        margin: "auto",
        mt: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardHeader
        title={newData.title}
        subheader={new Date(newData.date).toLocaleDateString()}
        sx={{ backgroundColor: "#f5f5f5", height: 150 }}
      />
      <CardContent sx={{ height: 100 }}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          {newData.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Autor: {newData.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" color="primary">
          Leer más
        </Button>
        {view == "news" ? (
          <AlertDialog
            title={"Archivar noticia"}
            description={"¿Seguro que desea archivar la noticia?"}
            buttonText={"Archivar"}
            buttonColor={"error"}
            onAccept={async (handleCLose) => {
              const response = await archiveNew(newData._id);
              if (response.error) {
                handleCLose();
                enqueueSnackbar(response.error, {
                  variant: "error",
                  preventDuplicate: true,
                  autoHideDuration: 1500,
                });
              } else {
                setNews((prev) => prev.filter((e) => e._id !== newData._id));
                handleCLose();
                enqueueSnackbar("Noticia archivada", {
                  variant: "success",
                  preventDuplicate: true,
                  autoHideDuration: 1500,
                });
              }
            }}
            onCancel={() => {}}
          />
        ) : (
          <AlertDialog
            title={"Eliminar noticia"}
            description={"¿Seguro que desea eliminar la noticia?"}
            buttonText={"Eliminar"}
            buttonColor={"error"}
            onAccept={async (handleCLose) => {
              const response = await deleteNew(newData._id);
              if (response.error) {
                handleCLose();
                enqueueSnackbar(response.error, {
                  variant: "error",
                  preventDuplicate: true,
                  autoHideDuration: 1500,
                });
              } else {
                setNews((prev) => prev.filter((e) => e._id !== newData._id));
                handleCLose();
                enqueueSnackbar("Noticia eliminada", {
                  variant: "success",
                  preventDuplicate: true,
                  autoHideDuration: 1500,
                });
              }
            }}
            onCancel={() => {}}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default NewCard;
