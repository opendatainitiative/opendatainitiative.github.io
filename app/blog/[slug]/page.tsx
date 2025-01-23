import { getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getAllPosts()
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title
  }
}

export default function BlogPost({ params }: Props) {
  const posts = getAllPosts()
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-lg max-w-none">
      <h1>{post.title}</h1>
      <time className="text-gray-600 block mb-8">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.id
  }))
} 