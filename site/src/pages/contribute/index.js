import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import ContributeHero from '../../../content/contribute-hero';

const ContributeIndex = ({ data, location }) => {
  const docs = data.allMdx.nodes;

  return (
    <Layout data={data} location={location}>
      <div className="main docs-main">
        <ContributeHero />
        {docs.map((node, index) => {
          const title = node.frontmatter.title;
          const toc = node.tableOfContents.items;
          return (
            <article className="content" key={`${node.fields.slug}-${index}`}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <ul>
                {toc &&
                  toc.map((item, i) => (
                    <li key={i}>
                      <Link to={`${node.fields.slug}${item.url}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </article>
          );
        })}
        <Seo title="Contribute" />
      </div>
    </Layout>
  );
};

export default ContributeIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        contributeUrl
      }
    }
    allMdx(
      filter: { internal: { contentFilePath: { regex: "//contribute//" } } }
      sort: [{ frontmatter: { order: ASC } }]
    ) {
      nodes {
        id
        tableOfContents
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
