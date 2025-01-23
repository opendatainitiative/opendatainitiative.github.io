import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export async function debugMarkdownProcessing(fileName: string) {
  // Read original file
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  console.log('=== ORIGINAL CONTENT ===')
  console.log(fileContents)

  // Parse frontmatter
  const matterResult = matter(fileContents)
  console.log('\n=== AFTER MATTER PARSING ===')
  console.log(matterResult.content)

  // Clean content
  const cleanedContent = matterResult.content
    .replace(/^###\s*{{\s*page\.title\s*}}/, '')
    .replace(/{{\s*.*?\s*}}/g, '')
    .replace(/src=["']\/assets\/img\//g, 'src="/')
    .trim()
  console.log('\n=== AFTER CLEANING ===')
  console.log(cleanedContent)

  // Process markdown
  const result = await remark()
    .use(remarkGfm)
    .use(html, { 
      sanitize: false,
      allowDangerousHtml: true
    })
    .process(cleanedContent)
  
  console.log('\n=== FINAL HTML ===')
  console.log(result.toString())

  // Write debug output to file
  fs.writeFileSync('debug.log', `
Original Content:
${fileContents}

After Matter Parsing:
${matterResult.content}

After Cleaning:
${cleanedContent}

Final HTML:
${result.toString()}
  `)
} 