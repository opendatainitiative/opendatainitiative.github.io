import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export type BlogPost = {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data
    return {
      id,
      title: matterResult.data.title || '',
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
      excerpt: matterResult.content.split('\n')[0] || '',
      content: matterResult.content
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
} 