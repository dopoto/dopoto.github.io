interface Project {
  name: string
  description: string
  tech: string[]
  repoUrl: string
  repoText: string
  demoUrl: string
}

const projectsData: Project[] = [
  {
    name: 'RemoteBeep',
    description: 'Play sounds remotely on multiple devices',
    tech: ['.NET 8', 'SignalR', 'Angular', 'NGRX', 'TypeScript'],
    repoUrl: 'https://github.com/dopoto/remote-beep-frontend',
    repoText: '/dopoto/remote-beep-frontend',
    demoUrl: 'https://remote-beep-frontend.vercel.app',
  },
  {
    name: 'TEPS',
    description: 'A sample company presentation site',
    tech: ['HTML', 'CSS', 'Bootstrap 5'],
    repoUrl: 'https://github.com/dopoto/teps',
    repoText: '/dopoto/teps',
    demoUrl: 'https://teps.vercel.app',
  },
  {
    name: 'Dynamic navbar',
    description: 'A Next.js dynamic breadcrumb component',
    tech: ['Next.js', 'TypeScript', 'React'],
    repoUrl: 'https://github.com/dopoto/next-dynamic-breadcrumbs',
    repoText: '/dopoto/next-dynamic-breadcrumbs',
    demoUrl: 'https://next-dynamic-breadcrumbs.vercel.app/manager',
  },
]

export default projectsData
