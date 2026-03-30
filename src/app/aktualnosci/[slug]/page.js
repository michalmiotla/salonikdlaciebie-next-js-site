import Container from '@/app/components/Container/Container'
import { getAllNews } from '@/app/data/news/news'
import styles from './Article.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

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
				<div className={styles.titles}>
					<div className={styles.breadcrumbs}>
						<Link className={styles.link} href={'/'}>
							<p>strona główna</p>
						</Link>
						<p>/</p>
						<Link className={styles.link} href={'/aktualnosci'}>
							<p>aktualności</p>
						</Link>
						<p>/</p>
						<p>{article.title}</p>
					</div>

					<h2 className={styles.title}>{article.title}</h2>
				</div>
				<div className={styles.entry}>
					<div className={styles.info}>
						<p className={styles.excerpt}>{article.excerpt}</p>
						<p className={styles.date}>
							<Image
								className={styles.img_right}
								alt='icon calendar'
								src='/calendar.svg'
								width={30}
								height={30}></Image>
							{article.date}
						</p>
						<p className={styles.category}>
							<Image className={styles.img_right} alt='icon hashtag' src='/hashtag.svg' width={30} height={30}></Image>
							{article.category}
						</p>
					</div>

					<div className={styles.image_container}>
						<Image
							className={styles.img}
							alt={article.title}
							src={article.image}
							fill
							objectFit='cover'
							objectPosition='center'
						/>
					</div>
				</div>
				<MDXRemote source={article.content} className={styles.content} />
			</article>
		</Container>
	)
}
