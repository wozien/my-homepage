import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  githubLink: string
}

export function Card({ title, description, imageUrl, link, githubLink }: CardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="group relative">
      <div className="block" onClick={() => window.open(link)}>
        <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : '20px'})`,
          transition: 'opacity 0.5s, transform 0.5s',
        }}>
          <div className="relative h-48 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-white hover:text-gray-200 transition-colors duration-300">
                <Github size={32} />
              </Link>
            </div>
          </div>
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

