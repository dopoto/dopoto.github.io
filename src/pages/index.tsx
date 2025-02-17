import CustomHead from "../components/custom-head";
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";
import React from "react";

const IndexPage = ({ data }: any) => {
    return (
        <Layout secondaryTitle="A web developer's blog" headerLinkTo="/">
            <ol style={{ listStyle: `none` }}>
                {data.allMdx.edges.map(({ node }: any) => (
                    <li key={node.fields.slug}>
                        <article
                            className="mb-[var(--spacing-8)] mt-[var(--spacing-8)]"
                            itemScope
                            itemType="http://schema.org/Article"
                        >
                            <header>
                                <small>{node?.frontmatter?.date}</small>
                                <h2 className="text-[#005b99] font-bold text-2xl tracking-tight">
                                    <Link to={node.fields.slug} itemProp="url">
                                        <span itemProp="headline">
                                            {node.frontmatter?.title ||
                                                node.fields.slug}
                                        </span>
                                    </Link>
                                </h2>
                            </header>
                            <section>
                                <p
                                    className="mb-[var(--spacing-0)]"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node?.frontmatter?.description ||
                                            node?.excerpt,
                                    }}
                                    itemProp="description"
                                />
                            </section>
                        </article>
                    </li>
                ))}
            </ol>
        </Layout>
    );
};

export const query = graphql`
    {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default IndexPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <CustomHead title="dopoto - a web developer's blog" />
