import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="mb-8">Blog posts on government financial transparency</p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <div className="grid grid-cols-[200px,1fr] gap-4">
              <time className="text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <div>
                <p className="mb-2">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 