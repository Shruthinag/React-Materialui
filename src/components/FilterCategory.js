import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  name: {
    paddingLeft: 10,
  },
  options: {
    paddingLeft: 20,
  },
}));

const FilterCategory = ({ id, name, types, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.name}
        align="left"
        color="primary"
        display="block"
        variant="h6"
      >
        {name}
      </Typography>
      <FormGroup className={classes.options}>
        {types.map((type, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                onChange={onChange}
                name={type.typeName}
                color="primary"
              />
            }
            label={type.typeLabel}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default FilterCategory;
