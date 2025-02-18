import DemoLink from './DemoLink'
import GitHubRepoLink from './GitHubRepoLink'

const Card = ({ name, description, tech, repoUrl, repoText, demoUrl, imgSrc }) => (
  <div className="min-h-[300px] grow p-4 pb-12">
    <div className="flex h-full grow flex-col gap-1 rounded-md">
      <div className="font-bold">{name}</div>
      <div className="">{description}</div>
      <div className="flex gap-1 py-3">
        {tech?.map((t) => (
          <span key={t} className="rounded-xl bg-gray-200 px-3 text-sm dark:bg-gray-700">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <GitHubRepoLink url={repoUrl} />
        <DemoLink url={demoUrl} />
      </div>
    </div>
  </div>
)

export default Card
