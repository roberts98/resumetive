import React, { useRef, useEffect } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

import { testimonials } from './testimonials';
import useElInViewport from '../../hooks/useElInViewport';
import TestimonialItem from './TestimonialItem';
import gsap from 'gsap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      backgroundColor: theme.palette.grey[200],
    },
    list: {
      opacity: 0,
    },
    header: {
      marginBottom: theme.spacing(8),
    },
  })
);

function Testimonials() {
  const styles = useStyles();
  const wrapperRef = useRef(null);
  const isInViewport = useElInViewport(wrapperRef, 300);

  useEffect(() => {
    if (isInViewport) {
      const [elements] = wrapperRef.current.children;
      const list = elements.querySelector('#testimonial-list');
      const firstTestimonial = elements.querySelector('#testimonial-1');
      const secondTestimonial = elements.querySelector('#testimonial-2');
      const thirdTestimonial = elements.querySelector('#testimonial-3');
      const timeline = gsap.timeline({ defaultEase: 'power3.out' });
      list.style.opacity = 1;
      timeline
        .set([firstTestimonial, secondTestimonial, thirdTestimonial], {
          opacity: 0,
        })
        .set(firstTestimonial, { x: 600 })
        .to(firstTestimonial, { x: 0, opacity: 1 })
        .to(secondTestimonial, { opacity: 1 })
        .to(thirdTestimonial, { opacity: 1 });
    }
  }, [isInViewport]);

  return (
    <section ref={wrapperRef} className={styles.wrapper} id="testimonials">
      <Container maxWidth="lg">
        <Typography className={styles.header} align="center" variant="h2">
          People said
        </Typography>
        <Grid
          id="testimonial-list"
          className={styles.list}
          container
          spacing={6}
        >
          {testimonials.map((testimonial) => (
            <Grid
              id={`testimonial-${testimonial.id}`}
              key={testimonial.id}
              item
              xs={4}
            >
              <TestimonialItem testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Testimonials;
