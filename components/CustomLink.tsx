import Link from '@/components/Link'
import SocialIcon, { SocialIconKind } from './social-icons'

interface Props {
  socialIconKind: keyof typeof SocialIconKind
  label: string
  url: string
}

export default function CustomLink({ socialIconKind, label, url }: Props) {
  return (
    <div className="prose-invert mb-2 flex flex-row gap-3 rounded-md bg-gray-100 p-3 align-middle dark:bg-gray-900">
      <div className="flex items-center">
        <SocialIcon href={url} kind={socialIconKind} />
      </div>
      <div className="truncate overflow-hidden text-ellipsis whitespace-nowrap">
        <div className="text-sm font-semibold text-gray-600 antialiased dark:text-gray-300">
          {label}
        </div>
        <Link
          target="_blank"
          href={url}
          className="truncate overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {url}
        </Link>
      </div>
    </div>
  )
}
