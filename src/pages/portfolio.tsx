import * as React from "react";
import PortfolioCard from "../components/portfolio-card";
import Layout from "../components/layout";

const portfolioItems = [
    {
        name: "Dynamic navbar",
        description: "A Next.js dynamic breadcrumbs navbar",
        tech: ["Next.js"],
        repoUrl: "https://github.com/dopoto/next-dynamic-breadcrumbs",
        repoText: "/dopoto/next-dynamic-breadcrumbs",
        demoUrl: "https://next-dynamic-breadcrumbs.vercel.app/manager",
    },
    {
        name: "RemoteBeep",
        description: "Play sounds remotely on multiple devices.",
        tech: [".NET 8", "SignalR", "Angular", "NGRX"],
        repoUrl: "https://github.com/dopoto/remote-beep-frontend",
        repoText: "/dopoto/remote-beep-frontend",
        demoUrl: "https://remote-beep-frontend.vercel.app",
    },
    {
        name: "TEPS",
        description: "A sample company presentation site.",
        tech: ["HTML", "CSS", "Bootstrap 5"],
        repoUrl: "https://github.com/dopoto/teps",
        repoText: "/dopoto/teps",
        demoUrl: "https://teps.vercel.app",
    },
];

const PortfolioPage = () => {
    return (
        <Layout secondaryTitle="Portfolio">
            {portfolioItems.map((item) => (
                <PortfolioCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    tech={item.tech}
                    repoUrl={item.repoUrl}
                    repoText={item.repoText}
                    demoUrl={item.demoUrl}
                />
            ))}
        </Layout>
    );
};

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

export default PortfolioPage;
