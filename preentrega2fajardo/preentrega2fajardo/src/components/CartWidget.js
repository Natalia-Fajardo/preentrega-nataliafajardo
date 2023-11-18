import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Box from "@mui/material/Box";

export const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }} display='flex'>
      <LocalGroceryStoreOutlinedIcon />
      <span>(10)</span>
    </Box>
  );
};
