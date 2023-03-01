import Image from 'next/image'

type Props = {
  title: string,
  src: string
}

const CodeSnippet = ({ title, src }: Props) => {
  return (
    <div>
      <Image src={src} className="w-100 h-100" alt={title} width={1000}
      height={330} />
    </div>
  )
}

export default CodeSnippet
