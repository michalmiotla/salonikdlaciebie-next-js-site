import Container from '../Container/Container'
import Map from '../Map/Map'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Contact.module.css'

export default function Contact() {
	return (
		<Container>
			<section className={styles.contact_section} id='kontakt'>
				<SectionTitle title={'kontakt'} />
				<Map />
				<div className={styles.contact_container}>
					<p className={styles.title}>Oficjalne źródła i kontakt *</p>
					<div className={styles.box}>
						<p>kolporter.com.pl</p>
						<p>Oficjalna strona firmy Kolporter Sp. z o.o.</p>
					</div>
					<div className={styles.box}>
						<p>news.kolporter.com.pl</p>
						<p>Aktualności z życia firmy</p>
					</div>
					<div className={styles.box}>
						<p>rynekprasowy.pl</p>
						<p>Aktualności z rynku prasowego</p>
					</div>
					<div className={styles.box}>
						<p>twojsalonik.pl</p>
						<p>Aktualne oferty pracy</p>
					</div>
					<div className={styles.box}>
						<p>biuro@kolporter.com.pl</p>
						<p>Mailowy adres kontaktowy</p>
					</div>
					<div className={styles.box}>
						<p>+48 41 367 88 88</p>
						<p>Numer infolinii biura </p>
					</div>
					<p className={styles.description}>
						* strona ma charakter informacyjny i nie jest oficjalną stroną sieci Saloników. Każdy Salonik posiada własny
						numer i dane kontaktowe. W sprawach reklamacji, zamówień lub usług, prosimy kontaktować się bezpośrednio z
						wybraną placówką lub z głównym oddziałem firmy.
					</p>
				</div>
			</section>
		</Container>
	)
}
