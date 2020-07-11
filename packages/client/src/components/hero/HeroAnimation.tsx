import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ResumeSvg from '../../assets/ResumeSvg';

function HeroAnimation() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const person = elements.querySelector('#person');
    const document = elements.querySelector('#document');
    const documentHeader = elements.querySelector('#document-header');
    const circle = elements.querySelector('#circle');
    const plus = elements.querySelector('#plus');
    const lines = elements.querySelector('#lines');

    const timeline = gsap.timeline({ defaultEase: 'power3.out ' });
    timeline
      .set([person, document, documentHeader, circle, plus, lines], {
        opacity: 0,
      })
      .set([documentHeader], { x: -200 })
      .set([lines], { y: -200 })
      .set(circle, { scale: 0 })
      .to(person, 1.5, { opacity: 1 })
      .to(document, { opacity: 1 })
      .to(documentHeader, { opacity: 1, x: 0 })
      .to([lines], { opacity: 1, y: 0 })
      .to(circle, {
        opacity: 1,
        scale: 1,
      })
      .to(plus, { opacity: 1 });
  }, []);
  return (
    <div ref={wrapper}>
      <ResumeSvg />
    </div>
  );
}

export default HeroAnimation;
