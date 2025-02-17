import Link from '@/components/Link'
import SocialIcon from './social-icons'

interface Props {
  url: string
}
// <div className="flex flex-col bg-gray-100 rounded-md p-3">
//   <div className="text-sm font-semibold text-gray-600 antialiased">DEMO</div>
//   <Link target="_blank" href={url} >{url}</Link>
// </div>
export default function DemoLink({ url }: Props) {
  return (
    <div className="flex flex-row gap-3 rounded-md bg-gray-100 p-3 align-middle">
      <div className="flex items-center">
        <SocialIcon href={url} kind="demo" />
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-600 antialiased">DEMO</div>
        <Link target="_blank" href={url}>
          {url}
        </Link>
      </div>
    </div>
  )
}
