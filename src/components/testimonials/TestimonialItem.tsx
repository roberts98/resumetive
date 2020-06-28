import React from 'react';

import { Testimonial } from './testimonials';
import {
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core';

interface Props {
  testimonial: Testimonial;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
    },
    image: {
      marginBottom: theme.spacing(2),
      borderRadius: '50%',
    },
  })
);

function TestimonialItem({ testimonial }: Props) {
  const styles = useStyles();

  return (
    <Paper className={styles.paper} elevation={3}>
      <img
        className={styles.image}
        src="http://picsum.photos/100/100"
        alt={testimonial.author}
      />
      <Typography gutterBottom variant="body1">
        {testimonial.body}
      </Typography>
      <Typography component="h4" variant="h6">
        {testimonial.author}
      </Typography>
    </Paper>
  );
}

export default TestimonialItem;
