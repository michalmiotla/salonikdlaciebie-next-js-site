import Image from 'next/image'
import styles from './NewsMainPage.module.css'
import newsData from '@/app/data/newsData'

export default function NewsMainPage() {
	return newsData.slice(0, 2).map(news => (
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
				<p>{news.description}</p>
			</div>
		</div>
	))
}
