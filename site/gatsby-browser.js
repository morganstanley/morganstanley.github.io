import React from 'react';

import './src/styles/fonts.css';
import './src/styles/global.css';
import './src/styles/prismjs.css';
import './src/styles/style.css';
import './src/styles/header.css';
import './src/styles/footer.css';
import './src/styles/hero.css';
import './src/styles/card.css';

import Layout from './src/components/layout';

// Keep Layout (and its Header/nav) mounted as a single persistent element
// across page navigations, so the nav underline can animate between
// routes instead of being torn down and recreated on every click.
export const wrapPageElement = ({ element, props }) => (
  <Layout location={props.location}>{element}</Layout>
);
