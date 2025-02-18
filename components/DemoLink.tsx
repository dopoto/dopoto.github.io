import CustomLink from './CustomLink'

interface Props {
  url: string
}

export default function DemoLink({ url }: Props) {
  return <CustomLink socialIconKind={'demo'} label={'DEMO'} url={url} />
}
