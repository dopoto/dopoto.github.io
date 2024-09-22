import * as React from "react";
import github from "../images/github.svg";
import { Badge } from "./ui/badge";

const PortfolioCard = ({
    name,
    description,
    tech,
    demoUrl,
    repoUrl,
    repoText,
}: {
    name: string;
    description: string;
    tech: string[];
    demoUrl: string;
    repoUrl: string;
    repoText: string;
}) => {
    return (
        <div className="py-4">
            <div>
                <a
                    className="font-semibold"
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name}
                </a>{" "}
                | {description}
            </div>

            <div className="flex gap-1">
                <a href={repoUrl} target="_blank" rel="noreferrer">
                    <img src={github} />
                </a>
                <a href={repoUrl} target="_blank" rel="noreferrer">
                    {repoText}
                </a>
            </div>

            <div className="flex gap-1 py-1"> 
                {tech.map((t) => (
                    <Badge key={t} variant="secondary" className="">{t}</Badge>
                ))}
            </div>
        </div>
    );
};

export default PortfolioCard;
