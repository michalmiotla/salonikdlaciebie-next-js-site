'use client'

import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import LOGO from '../../../../public/logo.png'
import FB from '../../../../public/fb.svg'
import INSTA from '../../../../public/insta.svg'
import LINKED from '../../../../public/linked.svg'
import Container from '../Container/Container'

export default function Footer() {
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
							<Link onClick={backToTop} href='/'>
								<Image width={50} height={50} src={FB} alt='salonikdlaciebie.pl' />
							</Link>
							<Link onClick={backToTop} href='/'>
								<Image width={50} height={50} src={INSTA} alt='salonikdlaciebie.pl' />
							</Link>
							<Link onClick={backToTop} href='/'>
								<Image width={50} height={50} src={LINKED} alt='salonikdlaciebie.pl' />
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
						<p>Masz uwagi do strony? Napisz</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
