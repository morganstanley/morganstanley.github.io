import React from 'react';

import Layout from './src/components/layout';

// Mirrors gatsby-browser.js so server-rendered markup matches what the
// client hydrates into (Layout wrapping the page, not each page wrapping
// its own Layout).
export const wrapPageElement = ({ element, props }) => (
  <Layout location={props.location}>{element}</Layout>
);
