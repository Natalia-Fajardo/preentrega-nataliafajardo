import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const routeParams = useParams();
  const navigate = useNavigate();
  const { categoryId } = routeParams;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [categoryId]);

  const handleDetail = (id) => {
    navigate(`/item/${id}`);
  };

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
          products.map((item, idx) => (
            <Card sx={{ width: 345, margin: 2 }} key={idx}>
              <CardActionArea onClick={() => handleDetail(item.id)}>
                <CardMedia
                  component="img"
                  height="500"
                  width="500"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        )}
      </Box>
    </Container>
  );
};
