'use client'

import Container from '../Container/Container'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroNewsstand from '../../../../public/newsstand.svg'
import HeroReading from '../../../../public/reading.svg'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			image: HeroNewsstand,
			heading: 'twoje centrum informacji i drobnych przyjemności :)',
		},
		{
			image: HeroReading,
			headingOne: 'strona dla klientów Saloników Prasowych Kolporter',
			headingTwo: 'sprawdź promocje i odwiedź najbliższy punkt',
		},
	]

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentSlide(prev => (prev + 1) % slides.length)
	// 	}, 5000) // zmiana co 5s

	// 	return () => clearInterval(interval)
	// }, [])

	const slide = slides[currentSlide]

	return (
		<div className={styles.hero}>
			<Container>
				<div className={styles.main}>
					<div className={styles.main_titles}>
						{currentSlide === 0 ? (
							<>
								<h1 className={styles.title}>{slides[0].heading}</h1>
								<Button color={'yellow'} title={'sprawdź aktualności'} />
								<Button color={'white'} title={'zobacz promocje'} />
							</>
						) : (
							<>
								<h2>{slides[1].headingOne}</h2>
								<h2>{slides[1].headingTwo}</h2>
								<Button title={'znajdź salonik'} />
							</>
						)}
					</div>
					<div className={styles.main_image_box}>
						<Image className={styles.main_image} src={slide.image} alt='newsstand hero illustration' />
					</div>
				</div>
			</Container>
			<div className={styles.gradient}></div>
		</div>
	)
}
