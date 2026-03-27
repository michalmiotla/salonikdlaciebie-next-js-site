import { getAllNews } from '@/app/data/news/news'

export default function Page() {
	async function generateStaticParams() {
		const news = getAllNews()

		return news.map(article => ({
			slug: article.slug,
		}))
	}

	return <div>artykul</div>
}
