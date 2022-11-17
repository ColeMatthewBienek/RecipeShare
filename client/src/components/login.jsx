import React from "react";
import {
  Grid,
  Item,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const Login = ({ setPage }) => {
  const style = {
    width: 350,
    border: "solid #222222",
    marginTop: "125px",
    paddingTop: "10px",
    paddingBottom: "10px",
    background: "#222222",
  };
  const image =
    "https://res.cloudinary.com/dsqh5elvv/image/upload/v1668699630/food_pics/271679_laokqi.jpg";
  const paperStyle = {
    backgroundImage: `url(${image})`,
    minHeight: "100",
    margin: "auto",
    top: 0,
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper sx={paperStyle}>
        <Container sx={style}>
          <Grid container spacing={4}>
            <Grid item xs={12} align="center">
              <Avatar style={avatarStyle}>
                <CookieIcon />
              </Avatar>
              <Grid item xs={12}>
                <Typography variant="h5">RecipeShare!</Typography>
              </Grid>
              <h2>Sign In</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={() => {
                  setPage("home");
                }}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <Link href="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                {" "}
                Don't have an account ?<Link href="#">Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Login;
