import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import FilterCategory from "./FilterCategory";

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
  title: {
    padding: 10,
  },
}));

const Filters = ({ id, filters, changeFilter }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography
          className={classes.title}
          align="left"
          color="primary"
          display="block"
          variant="h5"
        >
          Filters
        </Typography>
        {filters.map((fil, idx) => (
          <FilterCategory
            name={fil.categoryLabel}
            key={idx}
            types={fil.children}
            onChange={(event) => changeFilter(fil, event)}
          />
        ))}
      </Paper>
    </div>
  );
};

export default Filters;
