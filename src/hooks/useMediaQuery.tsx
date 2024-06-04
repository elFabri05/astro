import { useEffect, useState } from 'react';

function useMediaQuery(breakpoint : number) : boolean {
    const [screenSize, setScreenSize] = useState<boolean>(false);

    useEffect(() => {
      const handleResize = () => {
        if (typeof window !== 'undefined') {
          setScreenSize(window.innerWidth <= breakpoint);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [breakpoint]);
  
    return screenSize;
  }
  
  export default useMediaQuery;