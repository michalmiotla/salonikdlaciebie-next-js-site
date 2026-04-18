'use client'

import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import LOGO from '../../../../public/logo-white.png'
import FB from '../../../../public/fb.svg'
import INSTA from '../../../../public/insta.svg'
import LINKED from '../../../../public/linked.svg'
import Container from '../Container/Container'
import { useState } from 'react'

export default function Footer() {
	const [copied, setCopied] = useState(false)

	const email = 'miotlamichal@gmail.com'

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email)

			setCopied(true)

			setTimeout(() => {
				setCopied(false)
			}, 2000)
		} catch (error) {
			console.error('Błąd kopiowania', error)
		}
	}

	function backToTop() {
		setIsMobileNavShown(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.logo_container}>
						<Link onClick={backToTop} href='/'>
							<Image src={LOGO} alt='salonikdlaciebie.pl' />
						</Link>
					</div>
					<div className={styles.socials_container}>
						<p>KOLPORTER w mediach społecznościowych:</p>
						<div className={styles.socials}>
							<Link target='_blank' href='https://www.kolporter.com.pl'>
								<Image className={styles.reference} width={30} height={30} src={FB} alt='kolporter facebook' />
							</Link>
							<Link target='_blank' href='https://www.instagram.com/kolporter.com.pl/'>
								<Image className={styles.reference} width={30} height={30} src={INSTA} alt='kolporter instagram' />
							</Link>
							<Link target='_blank' href='https://pl.linkedin.com/company/kolporter'>
								<Image className={styles.reference} width={30} height={30} src={LINKED} alt='kolporter linkedin' />
							</Link>
						</div>
					</div>
					<div className={styles.links}>
						<ul>
							<li>
								<Link className={styles.link} href='/aktualnosci'>
									aktualności
								</Link>
							</li>
							<li>
								<Link className={styles.link} href='/#promocje'>
									promocje
								</Link>
							</li>
							<li>
								<Link className={styles.link} href='/#uslugi'>
									usługi
								</Link>
							</li>
							<li>
								<Link className={styles.link} href='/#asortyment'>
									asortyment
								</Link>
							</li>
							<li>
								<Link className={styles.link} href='/#kontakt'>
									kontakt
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.disclaimer}>
						<p className={styles.description}>Masz uwagi do strony? Skontaktuj się ze mną:</p>
						<p className={styles.mail} onClick={handleCopy}>
							{email}
							{copied && <span className={styles.alert}>Skopiowano!</span>}
						</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
