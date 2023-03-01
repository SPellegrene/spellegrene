import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Musings...
      </Link>
      </h2>
      </div>
  )
}

export default Header
