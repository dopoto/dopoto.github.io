import * as React from "react";
import { Link } from "gatsby";

const img = (
    <img
        className="rounded-full"
        src="/images/profile-pic.jpg"
        width={50}
        height={50}
        alt="Profile picture"
    />
);

const Layout = ({
    headerLinkTo,
    secondaryTitle,
    children,
}: {
    headerLinkTo?: string;
    secondaryTitle: string;
    children: React.ReactNode;
}) => {
    const isRootPath = false; //location.pathname === rootPath
    const header = (
        <div className="flex flex-row items-center gap-3">
            {headerLinkTo ? <Link to={headerLinkTo}>{img}</Link> : img}
            <div>
                <div className="text-3xl font-black ">
                    {headerLinkTo ? (
                        <Link to={headerLinkTo}>dopoto</Link>
                    ) : (
                        <>dopoto</>
                    )}
                </div>
                <div className="main-secondary">{secondaryTitle}</div>
            </div>
        </div>
    );

    return (
        <div
            className="mx-[auto] my-[0] max-w-[var(--maxWidth-wrapper)] px-[var(--spacing-5)]"
            data-is-root-path={isRootPath}
        >
            <header className="font-[var(--font-heading)] tracking-[-.025em] leading-[var(--lineHeight-tight)] mb-[var(--spacing-6)] mt-[var(--spacing-12)]">
                {header}
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
