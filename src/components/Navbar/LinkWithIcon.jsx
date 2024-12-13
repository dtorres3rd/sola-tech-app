import React from 'react';

import './LinkWithIcon.css';

const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    <a href={link} className='align-center'>
      {title} <img src={emoji} alt='' className='link_emoji' />
    </a>
  );
};

export default LinkWithIcon;
