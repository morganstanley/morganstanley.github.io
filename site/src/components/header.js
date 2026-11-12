import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ location, links }) => {
  function menuLink(text) {
    const path = links[text];

    const currentPath =
      location.pathname.replace(/\/+$/, '') || '/';

    const targetPath =
      path.replace(/\/+$/, '') || '/';

    const classname =
      currentPath === targetPath
        ? 'nav-link-current'
        : 'nav-link';

    return (
      <li className={classname} key={text}>
        <Link
          to={path}
          aria-current={
            currentPath === targetPath ? 'page' : undefined
          }
        >
          {text}
        </Link>
      </li>
    );
  }

  return (
    <div className="content">
      <h1 className="logo">
        <Link
          className="logo-link"
          to="//morganstanley.github.io"
        >
          <StaticImage
            width={267}
            src="../images/logo-black.png"
            alt="Morgan Stanley Logo"
            placeholder="none"
          />
        </Link>
      </h1>

      <div className="header-nav">
        <ul>{Object.keys(links).map(menuLink)}</ul>
      </div>
    </div>
  );
};

export default Header;
