import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import PromoMainPage from './PromoMainPage'
import styles from './PromoSection.module.css'

export default function PromoSection() {
	return (
		<Container>
			<section className={styles.promo_section}>
				<SectionTitle title={'promocje'} />
				<PromoMainPage />
				<PromoMainPage />
			</section>
		</Container>
	)
}
