import React from 'react';
import { graphql } from 'gatsby';

import FeaturedProjects from '../../content/featured-projects.mdx';
import HeroContent from '../../content/hero.mdx';
import Partnerships from '../../content/partnerships.mdx';

import Layout from '../components/layout';
import PageHead from '../components/page-head';

const SiteIndex = ({ data, location }) => {
  return (
    <Layout data={data} location={location}>
      <div className="main home-main">
        <HeroContent />
        <section className="content">
          <FeaturedProjects />
          <Partnerships />
        </section>
      </div>
    </Layout>
  );
};

export default SiteIndex;

export const Head = ({ data }) => (
  <PageHead title={data.site.siteMetadata.title} />
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        contributeUrl
      }
    }
  }
`;
