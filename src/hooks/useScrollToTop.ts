import { useEffect } from 'react';

export const useScrollToTop = (dependencies: any[] = []) => {
  useEffect(() => {
    // Scroll to top when component mounts or dependencies change
    const timer = setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
      
      // Also ensure the body scrolls to top (for some edge cases)
      if (document.body) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, dependencies);
}; 