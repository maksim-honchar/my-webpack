import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toMakeTodo = () => history.push("/");
  const toWatchTodo = () => history.push("/watchtodo");

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Make todo" onClick={toMakeTodo} />
        <Tab label="Watch todo" onClick={toWatchTodo} />
      </Tabs>
    </Paper>
  );
}
