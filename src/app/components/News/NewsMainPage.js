import styles from './NewsMainPage.module.css'
import newsData from '@/app/data/newsData'

export default function NewsMainPage() {
	return newsData.slice(0, 2).map(news => (
		<div className={styles.news} key={news.index}>
			<p>{news.title}</p>
			<p>{news.description}</p>
		</div>
	))
}
