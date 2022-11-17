import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Item } from "@mui/material";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";

export default function CookCard({ name, location, foodTypes, photo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="green iguana"
        image={photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography>Likes to cook...</Typography>
        <Grid container spacing={1}>
          {foodTypes.map((food, index) => (
            <Grid item xs={6} key={index}>
              <Chip label={food} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Message</Button>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>
  );
}
