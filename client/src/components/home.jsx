import React from "react";
import { useRecipesContext } from "../context.jsx";

const Home = () => {
  const { loading, cooks, recipes } = useRecipesContext();
  console.log("cooks, recipes", cooks, recipes);
  // console.log(recipes);
  return <div>Home Widget</div>;
};

export default Home;
