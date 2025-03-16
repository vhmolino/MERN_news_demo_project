import {
  Typography,
  Container,
  IconButton,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewsInternatComponent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const newData = state?.newData;

  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 6, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardActionArea>
          {" "}
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </CardActionArea>
        <CardContent>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            {newData.title}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
            Autor: {newData.author} | Fecha de publicación:{" "}
            {new Date(newData.date).toLocaleDateString()}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {newData.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewsInternatComponent;
