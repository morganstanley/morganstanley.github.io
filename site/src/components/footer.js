import React from 'react';

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer-main">
      <div className="content">
        <ul>
          <li>
            <a
              href="https://www.morganstanley.com/about-us/technology"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="https://morganstanley.com"
              target="_blank"
              rel="noreferrer"
            >
              Morgan Stanley
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MorganStanley/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <hr />
        <p>&copy;{date.getFullYear()} Morgan Stanley. All rights reserved.</p>
        <p className="legal-notice">
          For more information about The Linux Foundation, the foundations and
          projects it hosts, and its trademarks, please see{' '}
          <a
            href="https://linuxfoundation.org"
            target="_blank"
            rel="noreferrer"
          >
            www.linuxfoundation.org
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
