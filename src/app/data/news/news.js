import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const newsDirectory = path.join(process.cwd(), 'src/app/data/news')

export function getAllNews() {
	const files = fs.readdirSync(newsDirectory).filter(file => file.endsWith('.mdx'))

	const news = files.map(filename => {
		const filePath = path.join(newsDirectory, filename)
		const fileContent = fs.readFileSync(filePath, 'utf8')

		const { data, content } = matter(fileContent)

		return {
			...data,
			content,
		}
	})


	return news.sort((a, b) => new Date(b.date) - new Date(a.date))
}
