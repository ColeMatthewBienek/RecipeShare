import React from "react";
import { useRecipeContext } from "../context.jsx";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, Item } from "@mui/material";
import { useRecipesContext } from "../context.jsx";
import { Image } from "mui-image";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import StarRateIcon from "@mui/icons-material/StarRate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

export default function RecipeExpandedd({ setPage, recipeId }) {
  const { loading, recipes, cooks } = useRecipesContext();
  console.log("r_id", recipeId);
  const recipe =
    !loading && recipes
      ? recipes.filter((recipe) => recipe._id === recipeId)
      : [];

  console.log("recipe", recipe);
  console.log(recipes);

  return (
    <Box sx={style}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ★★★★★
        </Grid>
        <Grid item xs={8}>
          <Typography display="block" variant="h3">
            {recipe[0].recipe_name}
          </Typography>
          <Typography display="block" variant="body1">
            {recipe[0].cook_name}
          </Typography>
          <Typography display="block" variant="body2">
            {recipe[0].description}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ borderRadius: "6px" }}>
            <Image src={recipe[0].photos[0]} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Ingredients</Typography>
        </Grid>
        <Box sx={{ marginLeft: "16px" }}>
          <Grid container spacing={0}>
            {!loading &&
              recipe[0].ingredients.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={6}>
                      {item.ingredient}
                    </Grid>
                    <Grid item xs={6}>
                      {item.amount}&nbsp;{item.measure}
                    </Grid>
                  </React.Fragment>
                );
              })}
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Typography variant="h4">Directions</Typography>
        </Grid>
        <Box sx={{ marginLeft: "16px" }}>
          <Grid container spacing={0}>
            {!loading &&
              recipe[0].directions.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={12}>
                      {item}
                    </Grid>
                  </React.Fragment>
                );
              })}
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => {
              setPage("home");
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
