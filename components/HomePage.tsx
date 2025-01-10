"use client";

import { Card } from "@/components/Card";
import { Avatar } from "@/components/Avatar";
import { useEffect, useState } from "react";
import { PROJECT_LISTS as projects } from '@/utils/constant'

export const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Avatar
            src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/avatar/kunji.jpg"
            alt=""
            githubUsername="wozien"
          />
          <h1 className="text-center text-xl lg:text-2xl xl:text-4xl  font-bold text-gray-800 dark:text-gray-100">
            Wozien&apos;s Projects
          </h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                opacity: mounted ? 1 : 0,
                transform: `translateY(${mounted ? 0 : "20px"})`,
                transition: `opacity 0.5s ease-out ${
                  index * 0.1
                }s, transform 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <Card {...project} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
