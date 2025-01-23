import { getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getAllPosts()
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

export default async function BlogPost({ params }: Props) {
  const posts = await getAllPosts()
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-32">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-600 block mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:list-disc prose-ul:pl-6
            prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-img:rounded-lg prose-img:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.id
  }))
} 