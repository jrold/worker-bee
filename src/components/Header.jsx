import React from 'react';
import "./Header.scss";

const Header = ({ name, tagline, links }) => {

  const buttons = links.map((link, index) => {
    return (
      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
        <i className={link.awesomeClass}></i>
      </a>
    )
  });

  return (
    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>{name}</h1>
          </div>
          <div className="column header-right">
            <div>
              {tagline}
            </div>
            {buttons}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;