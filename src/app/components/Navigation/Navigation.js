'use client'
import styles from './Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container/Container'
import LOGO from '../../../../public/logo.png'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Burger from '../../assets/burger.svg'
import Close from '../../assets/close.svg'

export default function Navigation() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false)
	const [elementWidth, setElementWidth] = useState(window.innerWidth)

	const pathname = usePathname()

	function toggleNavigation() {
		setIsMobileNavShown(!isMobileNavShown)
	}

	function backToTop() {
		setIsMobileNavShown(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		const handleResize = () => {
			setElementWidth(window.innerWidth)
		}

		elementWidth > 768 && setIsMobileNavShown(false)

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [elementWidth])

	return (
		<nav className={styles.navSection}>
			<Container>
				<div className={styles.navigation}>
					<div className={styles.mobile_top}>
						<div className={styles.logo_mobile}>
							<Link onClick={backToTop} href='/'>
								<Image src={LOGO} alt='salonikdlaciebie.pl' />
							</Link>
						</div>
						<div className={styles.menu}>
							{isMobileNavShown === false ? (
								<Image onClick={() => toggleNavigation()} className={styles.burger} src={Burger} alt='open menu' />
							) : (
								<Image onClick={() => toggleNavigation()} className={styles.close} src={Close} alt='close menu' />
							)}
						</div>
					</div>

					<div className={styles.navbar}>
						<div className={styles.logo}>
							<Link onClick={backToTop} href='/'>
								<Image src={LOGO} alt='salonikdlaciebie.pl' />
							</Link>
						</div>
						<ul>
							<li>
								<Link
									onClick={() => setIsMobileNavShown(false)}
									className={`${styles.navlinks} ${pathname.startsWith('/aktualnosci') ? styles.active : ''}`}
									href='/aktualnosci'>
									aktualności
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#promocje'>
									promocje
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#uslugi'>
									usługi
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#asortyment'>
									asortyment
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#kontakt'>
									kontakt
								</Link>
							</li>
						</ul>
					</div>
					<div className={`${isMobileNavShown ? styles.navbar_mobile_active : styles.navbar_mobile}`}>
						<ul>
							<li>
								<Link
									onClick={() => setIsMobileNavShown(false)}
									className={`${styles.navlinks} ${pathname.startsWith('/aktualnosci') ? styles.active : ''}`}
									href='/aktualnosci'>
									aktualności
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#promocje'>
									promocje
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#uslugi'>
									usługi
								</Link>
							</li>
							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#asortyment'>
									asortyment
								</Link>
							</li>

							<li>
								<Link onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} href='/#kontakt'>
									kontakt
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	)
}
