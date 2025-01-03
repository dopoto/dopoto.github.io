import * as React from "react";
import Layout from "../components/layout"
import { Button } from "../components/ui/button"
 
const CvPage = () => {
    return (
        <Layout secondaryTitle="My CV">
            <div className="pb-5">Click the link below to download the latest version of my CV, in PDF format.</div>
             <a href="/CV - Dorin Potorac - Front-End Developer 2024-12-22.pdf" download>
             <Button variant="default">Download CV</Button>
             </a>
        </Layout>
    );
};

export default CvPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
    <>
        <meta name="robots" content="noindex, nofollow" />
    </>
);
