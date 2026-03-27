import Image from 'next/image'
import { getAllNews } from '@/app/data/news/news'
import styles from './NewsSubpage.module.css'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'

export default function NewsSubpage() {
	const news = getAllNews()

	return (
		<Container>
			<div className={styles.news_subpage}>
				<SectionTitle title={'aktualności'} />

				{news.map(n => (
					<Link key={n.slug} href={`/aktualnosci/${n.slug}`}>
						<div className={styles.news} key={n.index}>
							<div className={styles.photo}>
								<Image
									className={styles.img}
									alt={n.title}
									src={n.image}
									fill
									objectFit='cover'
									objectPosition='center'
								/>
							</div>
							<div className={styles.description}>
								<p className={styles.title}>{n.title}</p>
								<p className={styles.excerpt}>{n.excerpt}</p>
								<p className={styles.date}>{n.date}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</Container>
	)
}
