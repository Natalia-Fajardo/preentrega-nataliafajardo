import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const routeParams = useParams();
  const { id } = routeParams;
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setDetail(json);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <Container sx={{ maxWidth: "100% !important" }}>
      <Box
        sx={{ bgcolor: "#cfe8fc", padding: 4 }}
        mt={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              alt=""
              height="500"
              width="500"
              image={detail?.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {detail?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Comprar</Button>
            </CardActions>
          </Card>
        )}
      </Box>
    </Container>
  );
};
