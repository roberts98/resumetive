import React from 'react';
import {
  Grid,
  Link,
  Button,
  FormControlLabel,
  TextField,
  Theme,
  makeStyles,
  Checkbox,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(3, 4, 2),
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm() {
  const styles = useStyles();

  return (
    <div id="register" className={styles.wrapper}>
      <Typography gutterBottom component="h1" variant="h3">
        Sign in
      </Typography>
      <form className={styles.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;
