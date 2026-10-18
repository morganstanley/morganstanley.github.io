import React from 'react';
import { graphql } from 'gatsby';

import PageHead from '../components/page-head';

const PageTemplate = ({ title, children }) => {
  return (
    <article className="page-main content">
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </article>
  );
};

export default PageTemplate;

export const Head = ({ data, pageContext }) => {
  const title = `${pageContext.frontmatter.title} | ${data.site.siteMetadata.title}`;
  return (
    <PageHead title={title}>
      <meta name="description" content={pageContext.description} />
    </PageHead>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`;
