import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#ff9f00",
    "&:hover": {
      backgroundColor: "#ff9f00",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  image: {
    width: 130,
    height: 130,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cartButton: {
    width: 150,
    padding: 10,
    color: "white",
  },
}));

const PCard = ({ id, name, description, img, price, rating, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ratings:{rating}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </Grid>
              <Grid item>
                <ColorButton
                  className={classes.cartButton}
                  startIcon={<ShoppingCartIcon />}
                  variant="contained"
                  color="primary"
                  onClick={onClick}
                >
                  Add to cart
                </ColorButton>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">₹{price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PCard;
