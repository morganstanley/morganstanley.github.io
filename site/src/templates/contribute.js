import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const ContributeTemplate = ({ children, data, pageContext, location }) => {
  const docs = data.allMdx.nodes;
  const toc = data.mdx.tableOfContents.items;
  const pageTitle = pageContext.frontmatter.title;

  return (
    <Layout data={data} location={location}>
      <article className="page-main content contribute-main">
        <nav className="nav contribute-nav">
          <h4>Contribute</h4>
          <ul>
            {docs.map((node) => {
              const current = location.pathname.includes(node.fields.slug);
              const title = node.frontmatter.title;
              return (
                <li className={current ? 'current' : ''}>
                  <Link to={node.fields.slug}>{title}</Link>
                  {current && (
                    <nav className="nav contribute-content-nav">
                      <ul>
                        {toc &&
                          toc.map((item, i) => (
                            <li key={i}>
                              <Link to={item.url}>{item.title}</Link>
                            </li>
                          ))}
                      </ul>
                    </nav>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="contribute-content">
          <header>
            <h2>{pageTitle}</h2>
          </header>
          {children}
        </div>
      </article>
    </Layout>
  );
};

export default ContributeTemplate;

export const Head = ({ pageContext }) => (
  <>
    <title>{pageContext.frontmatter.title}</title>
    <meta name="description" content={pageContext.description} />
  </>
);

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      tableOfContents
    }
    allMdx(
      filter: { internal: { contentFilePath: { regex: "//contribute//" } } }
      sort: [{ frontmatter: { order: ASC } }]
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
        }
        internal {
          contentFilePath
        }
        fields {
          slug
        }
      }
    }
  }
`;
