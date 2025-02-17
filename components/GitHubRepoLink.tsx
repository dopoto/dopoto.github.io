import Link from '@/components/Link'
import SocialIcon from './social-icons'

interface Props {
  url: string
}

export default function GitHubRepoLink({ url }: Props) {
  return (
    <div className="flex flex-row gap-3 rounded-md bg-gray-100 p-3 align-middle dark:bg-gray-900">
      <div className="flex items-center">
        <SocialIcon href={url} kind="github" />
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-600 antialiased dark:text-gray-300">
          SOURCE CODE
        </div>
        <Link target="_blank" href={url} className="truncate">
          {url}
        </Link>
      </div>
    </div>
  )
}
