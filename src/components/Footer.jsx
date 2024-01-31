import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  
  return (
    <footer className="min-h-[10vh] border-t-2 dark:border-dark border-black mx-2">
    <div className="py-2 flex items-center justify-center text-lg"><p> Made with <FontAwesomeIcon icon={faHeart} /> by - <a href="https://inayatbakshi.vercel.app" target="_blank" className="underline dark:decoration-dark"> Inayat Bakshi</a> </p></div>
    </footer>
  )
}

export default Footer;