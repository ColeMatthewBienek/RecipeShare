import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export function Context({ children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const getRecipesData = () => {
    async function handleGetRecipesData() {
      try {
        const [cooksGet, recipesGet] = await Promise.all([
          axios.get("/cooks"),
          axios.get("/recipes"),
        ]);

        const cooks = cooksGet.data;
        const recipes = recipesGet.data;

        const tempState = {
          cooks,
          recipes,
        };

        setState(tempState);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    handleGetRecipesData();
  };

  useEffect(() => {
    getRecipesData();
  }, []);

  const values = {
    ...state,
    state,
    setState,
    getRecipesData,
    loading,
  };

  return (
    <RecipesContext.Provider value={values}>{children}</RecipesContext.Provider>
  );
}

export function useRecipesContext() {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("!!Must use within Recipes context!!");
  }
  return context;
}
