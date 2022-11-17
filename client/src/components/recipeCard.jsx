import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCard({
  name,
  photo,
  cookName,
  setPage,
  recipe_id,
  setRecipeId,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cookName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            setRecipeId(recipe_id);
            setPage("recipeExpanded");
          }}
          size="small"
        >
          Open Recipe
        </Button>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>
  );
}
