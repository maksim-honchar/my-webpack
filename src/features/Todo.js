import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./todoSlice";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  btn: {
    marginTop: 10,
  },
});

export default function Todo() {
  const [text, setText] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid
          className={classes.root}
          container
          direction="column"
          justify="center"
        >
          <Grid item>
            <TextField
              id="outlined-multiline-static"
              label="Text todo"
              rows={4}
              variant="outlined"
              value={text}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid className={classes.btn} item>
            <Button color="primary" variant="outlined" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
