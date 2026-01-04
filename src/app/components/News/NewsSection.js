import Container from '../Container/Container'
import NewsMainPage from './NewsMainPage'
import styles from './NewsSection.module.css'

export default function NewsSection() {
	return (
		<Container>
			<section className={styles.news_section}>
				<div className={styles.section_title}>
					<p>aktualności</p>
					<hr></hr>
				</div>
				<div className={styles.news_container}>
					<NewsMainPage />
				</div>
			</section>
		</Container>
	)
}
