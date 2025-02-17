import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }: any) => {
    const post = data.mdx;
    return (
        <Layout secondaryTitle="A web developer's blog" headerLinkTo="/">
            <article itemScope itemType="http://schema.org/Article">
                <div className="max-w-4xl mx-auto ">                   
                    <small>{post.frontmatter.date}</small>
                    <div className="text-[#005b99] font-bold text-2xl tracking-tight pt-0 ">
                        {post.frontmatter.title}
                    </div>
                    <div
                        className="pt-8 pb-12"
                        dangerouslySetInnerHTML={{ __html: post.body }}
                    />
                </div>
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        previous: mdx(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: mdx(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;

export default BlogPost;
