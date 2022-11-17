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
import { useRecipesContext } from "./context.jsx";
import Home from "./components/home.jsx";
import EditRecipes from "./components/editRecipe.jsx";
import RecipeExpanded from "./components/recipeExpanded";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { loading, cooks, recipes, state } = useRecipesContext();
  const [editRecipeModal, setEditRecipeModal] = useState(false);
  const [page, setPage] = useState("home");
  const [recipeId, setRecipeId] = useState("");

  const [light, setLight] = useState(true);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeadingNavBar />
      {page === "modal" && (
        <EditRecipes
          setPage={setPage}
          editRecipeModal={editRecipeModal}
          setEditRecipeModal={setEditRecipeModal}
        />
      )}
      {page === "home" && (
        <Home
          editRecipeModal={editRecipeModal}
          setEditRecipeModal={setEditRecipeModal}
          setPage={setPage}
          setRecipeId={setRecipeId}
        />
      )}
      {page === "recipeExpanded" && (
        <RecipeExpanded setPage={setPage} recipeId={recipeId} />
      )}
    </ThemeProvider>
  );
};

export default App;

// {nameOfPage && <Component ...}
