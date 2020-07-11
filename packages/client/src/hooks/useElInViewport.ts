import { useState, useEffect } from 'react';
import throttle from 'lodash.debounce';

/**
 * Function which returns boolean based on element position.
 *
 * @param element Ref element created via useRef() @see https://pl.reactjs.org/docs/hooks-reference.html#useref
 * @param offset Top offset
 * @returns Boolean, true if element is visible, false if not
 */
function useElInViewport(
  element: React.MutableRefObject<HTMLElement>,
  offset: number = 0
) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (element.current) {
        const rect = element.current.getBoundingClientRect();

        if (
          rect.top + offset <= window.innerHeight &&
          rect.top + rect.height >= 0
        ) {
          setIsInViewport(true);
        }
      }
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    return () =>
      window.removeEventListener('scroll', throttle(handleScroll, 10));
  }, [element]);

  return isInViewport;
}

export default useElInViewport;
