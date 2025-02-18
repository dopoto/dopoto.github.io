import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Showcase
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A small selection of the projects I'm playing with in my free time
        </p>
      </div>
      <div className="container py-12">
        <div className="flex flex-wrap gap-4">
          {projectsData.map((d) => (
            <Card
              key={d.name}
              name={d.name}
              description={d.description}
              tech={d.tech}
              repoUrl={d.repoUrl}
              demoUrl={d.demoUrl}
              className="flex-1 basis-1/2"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
