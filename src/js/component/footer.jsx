import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='d-flex bg-dark w-100'>
      <p>By Alejandro Romero at 2022</p>
      <div className="d-flex justify-content-end">
        <a href="https://www.linkedin.com/in/alejandroromo/" target="_blank" className='p-2 d-flex justify-content-end'>
          <FaLinkedin size={32} />
        </a>
        <a href="https://www.facebook.com/alejandro.romeromontero.3" target="_blank" className='p-2 d-flex justify-content-end'>
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/alejandroromon/" target="_blank" className='p-2 d-flex justify-content-end'>
          <FaInstagram size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;