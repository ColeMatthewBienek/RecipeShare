import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Grid, Item } from "@mui/material";
import RecipeCard from "./recipeCard.jsx";
import Sidebar from "./sideBar.jsx";
import { useRecipesContext } from "../context.jsx";
import CookCard from "./cookCard.jsx";
import EditRecipes from "./editRecipe.jsx";

const Home = ({
  editRecipeModal,
  setEditRecipeModal,
  setPage,
  setRecipeId,
}) => {
  const { loading, cooks, recipes, state } = useRecipesContext();

  return (
    <div style={{ marginTop: "100px", maxWidth: "800px", marginLeft: "125px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Sidebar
                setPage={setPage}
                editRecipeModal={editRecipeModal}
                setEditRecipeModal={setEditRecipeModal}
              />
            </Grid>
          </Grid>
          <div>Left Sidebar</div>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            {!loading &&
              recipes.map((recipe, index) => {
                return (
                  <Grid key={index} item xs={12}>
                    <RecipeCard
                      recipe_id={recipe._id}
                      name={recipe.recipe_name}
                      photo={recipe.photos[0]}
                      cookName={recipe.cook_name}
                      comment={recipe.comments}
                      setPage={setPage}
                      setRecipeId={setRecipeId}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            spacing={6}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {!loading &&
              cooks.map((cook, index) => {
                return (
                  <Grid key={index} item md={12}>
                    <CookCard
                      name={cook.cookName}
                      location={cook.location}
                      foodTypes={cook.foodTypes}
                      photo={cook.photos[0]}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
