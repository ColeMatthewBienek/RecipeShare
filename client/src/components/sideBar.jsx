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
import DraftsIcon from "@mui/icons-material/Drafts";
import CommentIcon from "@mui/icons-material/Comment";

const sideBarElements = [
  { text: "Favorites", icon: <StarBorderPurple500Icon /> },
  { text: "My Comments", icon: <CommentIcon /> },
  { text: "Message", icon: <ChatBubbleOutlineIcon /> },
  { text: "Drafts", icon: <DraftsIcon /> },
];
const drawerWidth = 240;

export default function Sidebar() {
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
              <ListItemButton>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText>List Recipes Here</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
