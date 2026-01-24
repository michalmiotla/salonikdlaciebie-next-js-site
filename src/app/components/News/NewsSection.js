import Link from 'next/link'
import Container from '../Container/Container'
import NewsMainPage from './NewsMainPage'
import styles from './NewsSection.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionLink from '../SectionLink/SectionLink'

export default function NewsSection() {
	return (
		<Container>
			<section className={styles.news_section}>
				<SectionTitle title={'aktualności'} />
				<div className={styles.news_container}>
					<NewsMainPage />
				</div>
				<SectionLink section={'aktualności'} link={'/aktualnosci'} />
			</section>
		</Container>
	)
}
