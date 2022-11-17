import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CommentIcon from "@mui/icons-material/Comment";
import { useRecipesContext } from "../context.jsx";

const sideBarElements = [
  { text: "Favorites", icon: <StarBorderPurple500Icon /> },
  { text: "My Comments", icon: <CommentIcon /> },
  { text: "Message", icon: <ChatBubbleOutlineIcon /> },
  { text: "Add Recipe", icon: <AddCircleOutlineIcon /> },
];
const drawerWidth = 240;

export default function Sidebar({
  editRecipeModal,
  setEditRecipeModal,
  setPage,
}) {
  const { loading, recipes } = useRecipesContext();

  const handleMenuClick = (event) => {
    const menuVal = event.currentTarget.getAttribute("value");
    if (menuVal === "Add Recipe") {
      setEditRecipeModal(true);
      setPage("modal");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {sideBarElements.map((element, index) => (
            <ListItem key={element.text} disablePadding>
              <ListItemButton
                id={element.text}
                value={element.text}
                onClick={handleMenuClick}
              >
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {!loading &&
            recipes.map((recipe, index) => {
              return (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemText>{recipe.recipe_name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
