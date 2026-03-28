import Container from '@/app/components/Container/Container'
import { getAllNews } from '@/app/data/news/news'
import styles from './Article.module.css'

export async function generateStaticParams() {
	const news = await getAllNews()

	return news.map(article => ({
		slug: article.slug,
	}))
}

export default async function ArticlePage({ params }) {
	const { slug } = await params

	const news = await getAllNews()

	const article = news.find(item => item.slug === slug)

	if (!article) {
		return <div>Nie znaleziono artykułu</div>
	}

	return (
		<Container>
			<article className={styles.article_section}>
				<h1>{article.title}</h1>
				<p>{article.date}</p>

				<div>{article.content}</div>
			</article>
		</Container>
	)
}
