import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure the component has rendered
    const timer = setTimeout(() => {
      // Scroll to top when pathname changes
      // Use smooth scrolling if supported, otherwise instant
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, 0);
      }
      
      // Also ensure the body scrolls to top (for some edge cases)
      if (document.body) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 