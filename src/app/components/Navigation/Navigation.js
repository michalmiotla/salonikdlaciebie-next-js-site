'use client'
import styles from './Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container/Container'
import LOGO from '../../../../public/logo.png'
import { useEffect, useState } from 'react'
import Burger from '../../assets/burger.svg'
import Close from '../../assets/close.svg'

export default function Navigation() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false)
	const [elementWidth, setElementWidth] = useState(window.innerWidth)

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
							<a onClick={backToTop} to='/'>
								<Image src={LOGO} alt='salonikdlaciebie.pl' />
							</a>
						</div>
						<ul>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/oferta'>
									aktualności
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/pakiety'>
									promocje
								</a>
							</li>

							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/portfolio'>
									usługi
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									asortyment
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									blog
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									kontakt
								</a>
							</li>
						</ul>
					</div>
					<div className={`${isMobileNavShown ? styles.navbar_mobile_active : styles.navbar_mobile}`}>
						<ul>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/oferta'>
									aktualności
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/pakiety'>
									promocje
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/portfolio'>
									usługi
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									asortyment
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									blog
								</a>
							</li>
							<li>
								<a onClick={() => setIsMobileNavShown(false)} className={styles.navlinks} to='/kontakt'>
									kontakt
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	)
}
