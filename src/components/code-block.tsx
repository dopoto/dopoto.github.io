import React from "react"
import { Github } from "lucide-react"

interface CodeBlockProps {
  code?: string
  language?: string
  githubLink: string
  fileName?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code = "", language, githubLink, fileName }) => {
  console.log("CodeBlock component is rendering!")
  const lines = (code || "").split("\n")

  return (
    <div className="my-6 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-gray-300 text-sm">
          {fileName || "Untitled"}
          {language && <span className="ml-2 text-gray-500">({language})</span>}
        </span>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
        >
          <Github size={18} className="mr-1" />
          <span className="text-sm">View on GitHub</span>
        </a>
      </div>
      <pre className="p-4 overflow-auto bg-gray-900 text-white">
        {lines.length > 0 ? (
          <code>
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                <span className="table-cell text-right pr-4 text-gray-500 select-none w-12">{index + 1}</span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        ) : (
          <p className="text-gray-500 italic">No code to display</p>
        )}
      </pre>
    </div>
  )
}

export default CodeBlock

