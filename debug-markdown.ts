import { debugMarkdownProcessing } from './lib/debug'

async function main() {
  await debugMarkdownProcessing('2018-05-23-ohio-data-demo-day.md')
}

main().catch(console.error) 