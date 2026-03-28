import Image from 'next/image'
import styles from './NewsMainPage.module.css'
// import newsData from '@/app/data/newsData'
import { getAllNews } from '@/app/data/news/news'
import Link from 'next/link'

export default function NewsMainPage() {
	const news = getAllNews()

	return news.slice(0, 2).map(news => (
		<Link key={news.slug} href={`/aktualnosci/${news.slug}`}>
			<div className={styles.news} key={news.index}>
				<div className={styles.photo}>
					<Image
						className={styles.img}
						alt={news.title}
						src={news.image}
						fill
						objectFit='cover'
						objectPosition='center'
					/>
					<div className={styles.gradient}></div>
					<p>{news.title}</p>
				</div>
				<div className={styles.description}>
					<p>{news.excerpt}</p>
				</div>
			</div>
		</Link>
	))
}
