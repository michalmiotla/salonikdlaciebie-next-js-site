import Container from '../Container/Container'
import SectionLink from '../SectionLink/SectionLink'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './ServicesSection.module.css'

export default function SercivesSection() {
	return (
		<Container>
			<section className={styles.services_section}>
				<SectionTitle title={'usługi'} />
				<div className={styles.services_container}>
                    
                </div>
				<SectionLink section={'usługi'} link={'uslugi'} />
			</section>
		</Container>
	)
}
