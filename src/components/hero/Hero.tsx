import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Theme,
  Link,
} from '@material-ui/core';
import ArrowDown from '@material-ui/icons/ArrowDownward';

import HeroAnimation from './HeroAnimation';
import HeroText from './HeroText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
      paddingTop: theme.spacing(4),
      position: 'relative',
    },
    nextSectionLink: {
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',

      '&:hover': {
        textDecoration: 'none',

        '& svg': {
          transform: 'translateY(10px)',
        },
      },
    },
    arrowIcon: {
      transition: 'transform 300ms',
      display: 'block',
      margin: '0 auto',
    },
  })
);

function Hero() {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <HeroAnimation />
          </Grid>
          <Grid item xs={7}>
            <HeroText />
          </Grid>
          <Link
            className={styles.nextSectionLink}
            variant="h6"
            color="primary"
            href="#testimonial"
          >
            Testimonials
            <ArrowDown className={styles.arrowIcon} />
          </Link>
        </Grid>
      </Container>
    </section>
  );
}

export default Hero;
