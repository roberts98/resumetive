import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      height: '50vh',
      backgroundColor: theme.palette.grey[800],
    },
    bottom: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 100,
      height: '50vh',
      backgroundColor: theme.palette.grey[800],
    },
  })
);

const animationProps = {
  animate: { height: 0 },
  initial: { height: '50vh' },
  exit: { height: '50vh' },
  transition: { duration: 0.5 },
};

function PageAnimation({ children }: { children: React.ReactChild }) {
  const classes = useStyles();

  return (
    <div>
      <motion.div className={classes.top} {...animationProps} />
      <motion.div className={classes.bottom} {...animationProps} />
      {children}
    </div>
  );
}

export default PageAnimation;
