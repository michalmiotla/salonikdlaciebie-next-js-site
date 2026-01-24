import Container from '../Container/Container'
import SectionLink from '../SectionLink/SectionLink'
import SectionTitle from '../SectionTitle/SectionTitle'
import PromoMainPage from './PromoMainPage'
import styles from './PromoSection.module.css'

export default function PromoSection() {
	return (
		<Container>
			<section className={styles.promo_section}>
				<SectionTitle title={'promocje'} />
				<div className={styles.promo_container}>
					<PromoMainPage />
					<PromoMainPage />
				</div>

				<SectionLink section={'promocje'} link={'promocje'} />
			</section>
		</Container>
	)
}
