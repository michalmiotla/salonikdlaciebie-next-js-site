import Container from '../Container/Container'
import SectionLink from '../SectionLink/SectionLink'
import SectionTitle from '../SectionTitle/SectionTitle'
import Service from './Service'
import styles from './ServicesSection.module.css'

export default function SercivesSection() {
	return (
		<Container>
			<section className={styles.services_section}>
				<SectionTitle title={'usługi'} />
				<div className={styles.services_container}>
					<div className={styles.description}>
						<p>
							Salonik Prasowy “Kolporter” to idealne miejsce dla tych, którzy cenią sobie wygodę i szybkie załatwianie
							codziennych spraw. To wygodny punkt, w którym m. in. opłacisz rachunki, doładujesz telefon lub odbierzesz
							paczkę.
						</p>
						<p>Sprawdź, jakie usługi zrealizujesz w naszych punktach!</p>
					</div>
					<div className={styles.services}>
						<Service icon={'/bill.svg'} title={'Płatności rachunków'} />
						<Service icon={'/box.svg'} title={'Obsługa paczek'} />
						<Service icon={'/card.svg'} title={'Doładowania biletów miejskich'} />
						<Service icon={'/sim.svg'} title={'Rejestracja kart SIM'} />
						<Service icon={'/receipt.svg'} title={'Doładowania telefoniczne'} />
						<Service icon={'/game.svg'} title={'Doładowania do gier'} />
					</div>
				</div>
				<SectionLink section={'usługi'} link={'uslugi'} />
			</section>
		</Container>
	)
}
