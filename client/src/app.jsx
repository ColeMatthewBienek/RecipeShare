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
        <Home
          editRecipeModal={editRecipeModal}
          setEditRecipeModal={setEditRecipeModal}
        />
      )}
    </ThemeProvider>
  );
};

export default App;

// {nameOfPage && <Component ...}
