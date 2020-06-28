import React from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      animation: '$slideIn 1s 1s both',
    },
    imgContainer: {
      marginTop: theme.spacing(4),
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    imgMobile: {
      position: 'absolute',
      left: '30%',
      top: '30%',
    },
    '@keyframes slideIn': {
      '0%': {
        opacity: 0,
        transform: 'translateY(100px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  })
);

function HeroText() {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Typography variant="h2" component="h1">
        Resume creator
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tempor
        dui, a dapibus enim. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Phasellus vitae convallis sem.
        Duis accumsan, turpis a mattis blandit, lorem odio interdum torto ucibu
        <br />
        <br /> tellus. Nullam at massa cursus, aliquam velit quis, sagittis
        justo. Nullam at ligula pulvinar, vehicula nulla rhoncus, porttitor
        lectus. Aliquam ullamcorper malesuada sem et fermentum. In enim ex,
        mollis eget sodales non, elementum nec tellus. Duis sodales ullamcor
      </Typography>
      <div className={styles.imgContainer}>
        <img src="http://picsum.photos/560/380" alt="desktop" />
        <img
          className={styles.imgMobile}
          src="http://picsum.photos/200/320"
          alt="mobile"
        />
      </div>
    </div>
  );
}

export default HeroText;
