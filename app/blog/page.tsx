import Image from 'next/image';
import { getAllPosts } from '@/lib/blog'
import React from 'react';

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="mb-8">Blog posts on government financial transparency</p>

      <table className="w-full">
        <tbody>
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <tr>
                <td className="py-4 pr-8 align-top text-gray-600 whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </td>
                <td className="py-4">
                  {post.image && (
                    <div className="mb-4">
                      <Image
                        src={post.image.replace('/assets/img/', '/')}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <div className="prose max-w-none mb-4 text-gray-700">
                    {post.excerpt}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="pb-4">
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    go to details
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="pb-4">
                  <hr className="border-gray-200" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
} 