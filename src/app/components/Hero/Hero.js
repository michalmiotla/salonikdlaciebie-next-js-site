'use client'

import Container from '../Container/Container'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroNewsstand from '../../../../public/newsstand.svg'
import HeroReading from '../../../../public/reading.svg'
import HeroGaming from '../../../../public/gaming.svg'
import HeroImg from '../../../../public/salonik.jpg'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'

export default function Hero() {
	// const [currentSlide, setCurrentSlide] = useState(0)

	// const slides = [HeroNewsstand, HeroReading, HeroGaming]

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentSlide(prev => (prev + 1) % slides.length)
	// 	}, 10000)

	// 	return () => clearInterval(interval)
	// }, [])

	// const slide = slides[currentSlide]

	return (
		<div className={styles.hero}>
			<div className={styles.main_image}></div>
			<div className={styles.gradient}></div>
			<Container>
				<div className={styles.main}>
					{/* <Image className={styles.logo} src={Logo} alt='newsstand hero illustration' /> */}
					<div className={styles.titles}>
						<h1 className={styles.title}>Twój punkt informacji i drobnych przyjemności :)</h1>
						<h2 className={styles.subtitle}>strona dla klientów Saloników Prasowych Kolporter</h2>
					</div>
					<div className={styles.buttons}>
						<Button title={'znajdź salonik'} link={'#map'}></Button>
						<Button title={'zobacz promocje'} link={'#promocje'}></Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
