import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function Card({ title, description, imageUrl, link }: CardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Link href={link} className="group">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{
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
        </div>
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}

