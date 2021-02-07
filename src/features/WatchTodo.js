import React from "react";
import { useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
});

export default function WatchTodo() {
  const classes = useStyles();

  const todo = useSelector((state) => state.todo);

  return (
    <Container maxWidth="xs">
      <Grid
        className={classes.root}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        {todo.map((todo, index) => (
          <Grid key={index} item>
            <Typography gutterBottom variant="h6" color="textSecondary">
              {todo}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
