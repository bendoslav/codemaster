import { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    document.title = "CodeMaster | Moderní kurzy programování";
    
    // Vytvoření favicon
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/svg+xml';
    favicon.rel = 'shortcut icon';
    favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <rect width='100' height='100' rx='20' fill='%23171717'/>
      <path d='M30 40 L50 60 L70 40' stroke='%23A855F7' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='none'/>
      <path d='M30 60 L50 80 L70 60' stroke='%23EC4899' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='none'/>
    </svg>`;
    
    document.head.appendChild(favicon);
  }, []);

  return null;
};

export default Title; 