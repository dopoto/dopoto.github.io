import Link from 'next/link'
import SocialIcon, { SocialIconKind } from './social-icons'

interface Props {
  socialIconKind: keyof typeof SocialIconKind
  label: string
  url: string
}

export default function CustomLink({ socialIconKind, label, url }: Props) {
  const urlText = url.replace('https://', '')
  const shortUrlText =
    urlText.length > 30 ? `${urlText.slice(0, 15)}...${urlText.slice(-15)}` : urlText

  return (
    <div className="prose-invert mb-2 flex max-w-full flex-row gap-3 overflow-hidden rounded-md bg-gray-100 p-3 align-middle dark:bg-gray-900">
      <div className="flex items-center">
        <SocialIcon href={url} kind={socialIconKind} />
      </div>
      <div className="block w-full">
        <div className="text-sm font-semibold text-gray-600 antialiased dark:text-gray-300">
          {label}
        </div>
        <Link
          target="_blank"
          href={url}
          className="block overflow-hidden text-sm text-ellipsis whitespace-nowrap sm:hidden"
        >
          {shortUrlText}
        </Link>
        <Link
          target="_blank"
          href={url}
          className="hidden overflow-hidden text-sm text-ellipsis whitespace-nowrap sm:block"
        >
          {urlText}
        </Link>
      </div>
    </div>
  )
}
