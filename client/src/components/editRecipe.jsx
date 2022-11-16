import React, { useState } from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useRecipesContext } from "../context.jsx";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";

const initialRecipeValues = {
  recipe_name: "",
  cook_name: "",
  ingredients: [
    {
      ingredient: "",
      amount: null,
      measure: "",
    },
  ],
  directions: [],
  comments: [
    {
      commentor: "",
      comment: "",
    },
  ],
  likes: null,
  photos: [],
};

const EditRecipes = ({ editRecipeModal, setEditRecipeModal }) => {
  const [values, setValues] = useState(initialRecipeValues);
  const { recipes, cooks, state, setState, loading } = useRecipesContext();
  const handleClose = () => {
    setEditRecipeModal(false);
  };
  const handleChange = (event) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;
    setValues({
      ...values,
      [elementName]: elementValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "6px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={editRecipeModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ zIndex: 20000 }}
    >
      <Box sx={style} component="form">
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Recipe Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={values.recipe_name}
            name="recipe_name"
            onChange={handleChange}
            label="Recipe Name"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Cook</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={values.cook_name}
            name="cook_name"
            onChange={handleChange}
            label="Cook Name"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Ingredients</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={values.ingredients}
            name="recipe_name"
            onChange={handleChange}
            label="Recipe Name"
          />
        </FormControl>
      </Box>
    </Modal>
  );
};

export default EditRecipes;
