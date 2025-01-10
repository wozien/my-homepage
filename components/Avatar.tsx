import Image from 'next/image'
import Link from 'next/link'

interface AvatarProps {
  src: string
  alt: string
  githubUsername: string
}

export function Avatar({ src, alt, githubUsername }: AvatarProps) {
  return (
    <Link href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
      <div className="relative xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-8 h-8 mr-4 rounded-full overflow-hidden animate-rotate">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </Link>
  )
}

