import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AssortmentSection.module.css'

export default function AssortmentSection() {
	return (
		<Container>
			<section className={styles.assortment_section}>
				<SectionTitle title={'asortyment'} />
				<div className={styles.assortment_container}>
					<div className={styles.list}>
						<ul>
							<li>Prasa</li>
							<li>Słodycze</li>
							<li>Napoje</li>
							<li>Papierosy</li>
							<li>Tytonie</li>
							<li>Liquidy</li>
							<li>Bilety</li>
							<li>Kartki okolicznościowe</li>
							<li>Papierosy</li>
							<li>Tytonie</li>
							<li>Liquidy</li>
							<li>Bilety</li>
							<li>Kartki okolicznościowe</li>
						</ul>
					</div>
					<div className={styles.details}>123</div>
				</div>
			</section>
		</Container>
	)
}
