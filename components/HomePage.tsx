'use client';

import { Card } from '@/components/Card'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'My Blog',
    description: 'A blog that records my programming mistakes',
    imageUrl: 'https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/common/next-homepage/next-homepage-blog.jpg?height=300&width=400',
    link: 'https://blog.wozien.icu',
  }
]

export const HomePage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Wozien&apos;s Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                opacity: mounted ? 1 : 0,
                transform: `translateY(${mounted ? 0 : '20px'})`,
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <Card {...project} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

