import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export type BlogPost = {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
}

function cleanContent(content: string): string {
  return content
    .replace(/^###\s*{{\s*page\.title\s*}}/, '')  // Remove Jekyll title
    .replace(/{{\s*.*?\s*}}/g, '')  // Remove any remaining Jekyll templating
    .replace(/src=["']\/assets\/img\//g, 'src="/')  // Update image paths
    .trim()  // Remove any leading/trailing whitespace
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)  // Support GFM (tables, strikethrough, etc)
    .use(html, { 
      sanitize: false, // Don't sanitize to allow custom HTML
      allowDangerousHtml: true // Allow HTML to pass through
    })
    .process(content)
  return result.toString()
}

function extractExcerpt(content: string): string {
  // Remove markdown headers and Jekyll templating
  const cleanContent = content
    .replace(/^###\s*{{\s*page\.title\s*}}/, '')  // Remove Jekyll title
    .replace(/^#+\s*.*$/gm, '')  // Remove any markdown headers
    .replace(/{{\s*.*?\s*}}/g, '')  // Remove any remaining Jekyll templating
  
  // Remove any HTML tags
  const textContent = cleanContent.replace(/<[^>]*>/g, '')
  
  // Split into paragraphs
  const paragraphs = textContent.split('\n\n')
  
  // Find first non-empty paragraph
  const firstParagraph = paragraphs.find(p => p.trim().length > 0) || ''
  
  // Limit to ~200 characters while keeping whole words
  if (firstParagraph.length > 200) {
    return firstParagraph.substr(0, 200).split(' ').slice(0, -1).join(' ') + '...'
  }
  
  return firstParagraph
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Clean the content
    const cleanedContent = cleanContent(matterResult.content)

    // Process markdown to HTML
    const processedContent = await processMarkdown(cleanedContent)

    // Extract the first image from the processed content if it exists
    const imageMatch = processedContent.match(/<img.*?src=["'](.*?)["']/)
    const image = imageMatch ? imageMatch[1] : undefined

    // Extract a proper excerpt from the cleaned content
    const excerpt = extractExcerpt(cleanedContent)

    // Combine the data
    return {
      id,
      title: matterResult.data.title || '',
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : '',
      excerpt,
      content: processedContent,
      image: image
    }
  }))

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
} 