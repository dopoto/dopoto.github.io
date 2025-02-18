import Link from '@/components/Link'
import SocialIcon from './social-icons'
import CustomLink from './CustomLink'

interface Props {
  url: string
}

export default function GitHubRepoLink({ url }: Props) {
  return <CustomLink socialIconKind={'github'} label={'SOURCE CODE'} url={url} />
}
