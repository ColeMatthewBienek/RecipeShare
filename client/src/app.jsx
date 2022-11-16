import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import HeadingNavBar from "./components/headingNavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Grid, Item } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RecipeCard from "./components/recipeCard.jsx";
import Sidebar from "./components/sideBar.jsx";
import { useRecipesContext } from "./context.jsx";
import CookCard from "./cookCard.jsx";
import EditRecipes from "./components/editRecipe.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { loading, cooks, recipes, state } = useRecipesContext();
  console.log("state", state);
  const [editRecipeModal, setEditRecipeModal] = useState(false);

  const [light, setLight] = useState(true);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeadingNavBar />
      {editRecipeModal ? (
        <EditRecipes
          editRecipeModal={editRecipeModal}
          setEditRecipeModal={setEditRecipeModal}
        />
      ) : (
        <div
          style={{ marginTop: "100px", maxWidth: "800px", marginLeft: "125px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Sidebar
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
                      <Grid item xs={12}>
                        <RecipeCard
                          key={index}
                          name={recipe.recipe_name}
                          photo={recipe.photos[0]}
                          cookName={recipe.cook_name}
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
                      <Grid item md={12}>
                        <CookCard
                          key={index}
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
      )}
    </ThemeProvider>
  );
};

export default App;
