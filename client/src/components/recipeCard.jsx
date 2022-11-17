import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Item } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useRecipesContext } from "../context.jsx";

export default function RecipeCard({
  name,
  photo,
  cookName,
  setPage,
  recipe_id,
  setRecipeId,
  comment,
}) {
  const [open, setOpen] = React.useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentMaker, setCommentMaker] = useState("");
  const { getRecipesData } = useRecipesContext();
  const handlePostComment = (event) => {
    const post = {
      recipeId: recipe_id,
      comment: commentText,
      commentor: commentMaker,
    };

    axios
      .post("/comment", post)
      .then((result) => {
        console.log(result);
        getRecipesData();
        setOpen(false);
      })
      .catch(console.log);
  };
  // console.log("comment", comment[1]);
  return (
    <div>
      <CommentModal
        open={open}
        setOpen={setOpen}
        setCommentText={setCommentText}
        commentMaker={commentMaker}
        setCommentMaker={setCommentMaker}
        handlePostComment={handlePostComment}
      />
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
          <Divider />
          {comment.length > 1 ? (
            <Typography variant="body2" color="text.secondary">
              💫 {comment[1].commentor} shared:&nbsp; {comment[1].comment}
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              so sad ... no comment yet 💔
            </Typography>
          )}
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
          <Button
            onClick={() => {
              setOpen(true);
            }}
            size="small"
          >
            Comment
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CommentModal({
  open,
  setOpen,
  setCommentText,
  commentText,
  commentMaker,
  setCommentMaker,
  handlePostComment,
}) {
  const handleClose = () => setOpen(false);
  const handleComment = (event) => {
    const commentVal = event.target.value;
    setCommentText(commentVal);
  };
  const handleName = (event) => {
    const name = event.target.value;
    setCommentMaker(name);
  };
  return (
    <div>
      <Modal
        style={{ zIndex: 30000 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="div">
                Comment
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Commenting as..."
                autoComplete="name"
                name="commentMaker"
                value={commentMaker}
                onChange={handleName}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Comment"
                autoComplete="comment"
                name="commentText"
                value={commentText}
                onChange={handleComment}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <Button size="small" onClick={handlePostComment}>
                Post Comment
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </div>
  );
}
