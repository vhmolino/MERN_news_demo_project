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

interface NewCardProps {
  newData: New;
  view: "news" | "archived";
}

const NewCard = ({ newData, view }: NewCardProps) => {
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
            onAccept={() => {}}
            onCancel={() => {}}
          />
        ) : (
          <AlertDialog
            title={"Eliminar noticia"}
            description={"¿Seguro que desea eliminar la noticia?"}
            buttonText={"Eliminar"}
            buttonColor={"error"}
            onAccept={() => {}}
            onCancel={() => {}}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default NewCard;
