import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              Resumetive
            </Typography>
          </Link>
          <Button color="inherit">Get started</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contact</Button>
          <Link href="/login">
            <Button color="inherit">My account</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
