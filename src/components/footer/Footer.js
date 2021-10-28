import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import "./Footer.css";

function Footer() {
    return (
        <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaFacebookF />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaTwitter />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaLinkedinIn />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaInstagram />
        </a></li>
    </ul>
    <ul class="menu">
    <li class="menu__item"><NavLink exact className='menu__link' to='/'>Home</NavLink></li>
    <li class="menu__item"><NavLink exact className='menu__link' to='/about'>About</NavLink></li>
    <li class="menu__item"><NavLink exact className='menu__link' to='/courses'>Courses</NavLink></li>

    </ul>
    <p>&copy;2021 Venus Ed | All Rights Reserved</p>
  </footer>
    )
}

export default Footer
