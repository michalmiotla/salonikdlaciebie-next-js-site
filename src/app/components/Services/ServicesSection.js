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
						<Service
							icon={'/bill.svg'}
							title={'Płatności rachunków'}
							description={
								'U nas szybko i wygodnie opłacisz rachunki z niską prowizją, bez zbędnych formalności. Realizujemy przelewy dowolne, w tym opłaty do ZUS i KRUS. Przyjmujemy również płatności za mandaty oraz inne zobowiązania urzędowe. Wszystko w jednym miejscu, bez kolejek i stresu.'
							}
						/>
						<Service
							icon={'/box.svg'}
							title={'Obsługa paczek'}
							description={
								'Nadaj lub odbierz paczkę szybko i bezproblemowo, także w opcji za pobraniem. Obsługujemy przesyłki krajowe i zagraniczne, dopasowane do Twoich potrzeb. Współpracujemy z renomowanymi firmami kurierskimi: DPD, UPS, GLS, FedEx, Allegro One. Jedno miejsce — wiele możliwości wysyłki.'
							}
						/>
						<Service
							icon={'/card.svg'}
							title={'Doładowania biletów miejskich'}
							description={
								'Doładuj bilety miejskie szybko i dokładnie na taką liczbę dni, jakiej potrzebujesz. Obsługujemy doładowania aplikacji Lubika oraz umożliwiamy sprawdzenie daty ważności biletu. Cały proces zajmuje tylko chwilę i nie wymaga instalowania dodatkowych aplikacji. Wygodnie, jasno i bez komplikacji.'
							}
						/>
						<Service
							icon={'/sim.svg'}
							title={'Rejestracja kart SIM'}
							description={
								'Zarejestrujesz u nas karty SIM wszystkich najpopularniejszych sieci w Polsce. Pomagamy również obcokrajowcom — sprawnie i zgodnie z obowiązującymi przepisami. Cały proces jest szybki i bezpieczny. Wystarczy dokument, resztą zajmiemy się na miejscu.'
							}
						/>
						<Service
							icon={'/receipt.svg'}
							title={'Doładowania telefoniczne'}
							description={
								'Oferujemy doładowania telefoniczne w wielu nominałach, dopasowanych do różnych potrzeb. Obsługujemy zarówno popularne sieci, jak i mniej znane, m.in. Telegrosik czy LycaMobile. Każda transakcja potwierdzona jest czytelnym wydrukiem. Szybko, przejrzyście i bez ukrytych kosztów.'
							}
						/>
						<Service
							icon={'/game.svg'}
							title={'Doładowania do gier'}
							description={
								'Kupisz u nas paysafecard classic oraz paysafecard direct — idealne do bezpiecznych płatności online. Oferujemy również karty podarunkowe do Xbox, Steam, PlayStation i Fortnite. To świetne rozwiązanie dla graczy w każdym wieku. Bez konieczności używania karty płatniczej.'
							}
						/>
					</div>
				</div>
				<SectionLink section={'usługi'} link={'uslugi'} />
			</section>
		</Container>
	)
}
