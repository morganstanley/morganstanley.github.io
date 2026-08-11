import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const isActive = (location, path) =>
  path === '/' ? location.pathname === '/' : location.pathname?.includes(path);

const Header = ({ location, links }) => (
  <div className="content">
    <h1 className="logo">
      <Link className="logo-link" to={`//morganstanley.github.io`}>
        <StaticImage
          width={267}
          src="../images/logo-black.png"
          alt="Morgan Stanley Logo"
          placeholder="none"
        />
      </Link>
    </h1>
    <div className="header-nav">
      <ul>
        {Object.entries(links).map(([text, path]) => (
          <li
            className={isActive(location, path) ? 'nav-link-current' : 'nav-link'}
            key={text}
          >
            <Link to={path}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
