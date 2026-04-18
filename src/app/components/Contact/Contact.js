'use client'

import Link from 'next/link'
import Container from '../Container/Container'
import Map from '../Map/Map'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Contact.module.css'
import { useState } from 'react'

export default function Contact() {
	const [copiedMail, setCopiedMail] = useState(false)
	const [copiedPhone, setCopiedPhone] = useState(false)

	const mail = 'biuro@kolporter.com.pl'
	const phone = '+48 41 367 88 88'

	const CopyMail = async () => {
		try {
			await navigator.clipboard.writeText(mail)

			setCopiedMail(true)

			setTimeout(() => {
				setCopiedMail(false)
			}, 2000)
		} catch (error) {
			console.error('Błąd kopiowania', error)
		}
	}

	const CopyPhone = async () => {
		try {
			await navigator.clipboard.writeText(phone)

			setCopiedPhone(true)

			setTimeout(() => {
				setCopiedPhone(false)
			}, 2000)
		} catch (error) {
			console.error('Błąd kopiowania', error)
		}
	}

	return (
		<Container>
			<section className={styles.contact_section} id='kontakt'>
				<SectionTitle title={'kontakt'} />
				<Map />
				<div className={styles.contact_container}>
					<p className={styles.title}>Oficjalne źródła i kontakt *</p>
					<div className={styles.box}>
						<Link target='_blank' href={'https://www.kolporter.com.pl'} className={styles.site}>
							kolporter.com.pl
						</Link>
						<p>Oficjalna strona firmy Kolporter Sp. z o.o.</p>
					</div>
					<div className={styles.box}>
						<Link target='_blank' href={'https://news.kolporter.com.pl'} className={styles.site}>
							news.kolporter.com.pl
						</Link>
						<p>Aktualności z życia firmy</p>
					</div>
					<div className={styles.box}>
						<Link target='_blank' href={'https://dostawa.kolporter.com.pl'} className={styles.site}>
							dostawa.kolporter.com.pl
						</Link>
						<p>Lista tytułów w dzisiejszej dostawie prasy</p>
					</div>
					<div className={styles.box}>
						<Link target='_blank' href={'https://www.rynekprasowy.pl'} className={styles.site}>
							rynekprasowy.pl
						</Link>
						<p>Aktualności z rynku prasowego</p>
					</div>
					<div className={styles.box}>
						<Link target='_blank' href={'https://twojsalonik.pl'} className={styles.site}>
							twojsalonik.pl
						</Link>
						<p>Aktualne oferty pracy</p>
					</div>
					<div className={styles.box}>
						<p onClick={CopyMail} className={styles.site}>
							{mail}
							{copiedMail && <span className={styles.alert}>Skopiowano!</span>}
						</p>

						<p>Mailowy adres kontaktowy</p>
					</div>
					<div className={styles.box}>
						<p onClick={CopyPhone} className={styles.site}>
							{phone}
							{copiedPhone && <span className={styles.alert}>Skopiowano!</span>}
						</p>

						<p>Numer infolinii biura </p>
					</div>
					<p className={styles.description}>
						* strona ma charakter informacyjny i nie jest oficjalną stroną sieci Saloników. Każdy Salonik posiada własny
						numer i dane kontaktowe oraz adresy korespondencyjne i mailowe. W sprawach m.in. reklamacji, zamówień, usług
						lub współpracy, prosimy kontaktować się bezpośrednio z wybraną placówką lub z głównym oddziałem firmy.
					</p>
				</div>
			</section>
		</Container>
	)
}
