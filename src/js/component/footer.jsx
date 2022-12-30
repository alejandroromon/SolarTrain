import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark w-100'>
      <p>Copyright 2022</p>
      <div>
        <a href="https://www.facebook.com/alejandro.romeromontero.3" target="_blank">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/alejandroromon/" target="_blank">
          <FaInstagram size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;