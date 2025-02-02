import React from 'react';
import { TbSmartHome } from "react-icons/tb";
import { BiMessageAlt } from "react-icons/bi";
import { PiPencilSimpleLine } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { FiArrowRightCircle } from "react-icons/fi";

import './header.css';

const Header = () => {
  return (
    <section className='banner-container'>
        <header className='banner'>
          <div></div>
          <nav>
            <ul className='banner-menu'>
              <li className='menu-item menu-item-li'> <TbSmartHome /> Home</li>
              <li className='menu-item menu-item-li'> <BiMessageAlt /> About Us</li>
              <li className='menu-item menu-item-li'> <PiPencilSimpleLine /> Blogs</li>
              <li className='menu-item menu-item-li'> <TiMessages /> Contact</li>
            </ul>
          </nav>
          <div className='cta-banner'>
            <a className='menu-item'>Commencer<FiArrowRightCircle size={20} /></a>
          </div>
        </header>
    </section>
  );
};

export default Header;