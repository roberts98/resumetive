import React from 'react';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';

import Layout from '../components/layout/Layout';
import LoginSvg from '../assets/LoginSvg';
import LoginForm from '../components/login/LoginForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: 'calc(100vh - 64px)',
    },
    gridContainer: {
      height: '100%',
    },
    leftCol: {
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

function Login() {
  const styles = useStyles();
  return (
    <Layout>
      <section className={styles.wrapper}>
        <Grid className={styles.gridContainer} container>
          <Grid className={styles.leftCol} item xs={7}>
            <LoginSvg />
          </Grid>
          <Grid item xs={5}>
            <LoginForm />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
}

export default Login;
