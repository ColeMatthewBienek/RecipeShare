import React, { useState, useRef, useEffect } from "react";
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
import { Grid, Item } from "@mui/material";
import TextField from "@mui/material/TextField";
import UploadWidget from "./uploadWidget.jsx";
import { CLOUD_NAME, UPLOAD_PRESET } from "../../../config";

const initialRecipeValues = {
  recipe_name: "",
  cook_name: "",
  ingredients: [],
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

const ingredientValues = {
  ingredient: "",
  amount: 0,
  measure: "",
};

const directionValues = {
  item: [],
};

const EditRecipes = ({ editRecipeModal, setEditRecipeModal }) => {
  const [values, setValues] = useState(initialRecipeValues);
  const [ingredVal, setIngredVal] = useState(ingredientValues);
  const { recipes, cooks, state, setState, loading } = useRecipesContext();
  const [direction, setDirection] = useState("");
  const [openPhotoWidget, setOpenPhotoWidget] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState({ photo: "" });

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
      },
      function (err, result) {
        if (!err && result.info && result.event === "success") {
          console.log(result.info.url);
          const photoToAdd = result.info.url;
          console.log(values.photos);
          setValues({
            ...values,
            photos: [...values.photos, photoToAdd],
          });
        }
      }
    );
  }, []);

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

  const handleAddIngredient = (event) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;
    setIngredVal({
      ...ingredVal,
      [elementName]: elementValue,
    });
  };

  const handleAddDirection = (event) => {
    const val = event.target.value;
    setDirection(val);
  };
  const handleSubmitIngredient = () => {
    setValues({ ...values, ingredients: [...values.ingredients, ingredVal] });
    setIngredVal(ingredientValues);
  };

  const handleSubmitDirection = () => {
    setValues({
      ...values,
      directions: [...values.directions, direction],
    });
    setDirection("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleAddPhoto = () => {};

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

  return (
    <Modal
      open={editRecipeModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ zIndex: 20000 }}
    >
      <Box sx={style} component="form">
        <Grid container spacing={2} alignItems={"center"} justify={"center"}>
          <Grid item xs={12}>
            <Typography>Add Recipe</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Recipe Name"
              autoComplete="recipe"
              autoFocus
              name="recipe_name"
              value={values.recipe_name}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Cook Name"
              autoComplete="cook"
              name="cook_name"
              value={values.cook_name}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Ingredient"
              value={ingredVal.ingredient}
              name="ingredient"
              onChange={handleAddIngredient}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Amount"
              value={ingredVal.amount}
              name="amount"
              onChange={handleAddIngredient}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Measure"
              value={ingredVal.measure}
              name="measure"
              onChange={handleAddIngredient}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleSubmitIngredient} variant="contained">
              Add
            </Button>
          </Grid>
          <Grid item xs={10}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="direction"
              value={direction}
              name="direction"
              onChange={handleAddDirection}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleSubmitDirection} variant="contained">
              Add
            </Button>
          </Grid>
          <Grid item xs={10}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="direction"
              value={values.photos}
              name="photos"
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={() => widgetRef.current.open()}
              variant="contained"
            >
              Add Photo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditRecipes;
