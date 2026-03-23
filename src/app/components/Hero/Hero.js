'use client'

import Container from '../Container/Container'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroNewsstand from '../../../../public/newsstand.svg'
import HeroReading from '../../../../public/reading.svg'
import HeroGaming from '../../../../public/gaming.svg'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Logo from '../../../../public/Kolporterbackground.png'

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [HeroNewsstand, HeroReading, HeroGaming]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 10000)

		return () => clearInterval(interval)
	}, [])

	const slide = slides[currentSlide]

	return (
		<div className={styles.hero}>
			<Container>
				<div className={styles.main}>
					<div className={styles.main_titles}>
						{/* <Image className={styles.logo} src={Logo} alt='newsstand hero illustration' /> */}
						<h1 className={styles.title}>KOLPORTER - twoje centrum informacji i drobnych przyjemności :)</h1>
						<Button color={'yellow'} title={'znajdź salonik'} />
						<Button color={'white'} title={'zobacz promocje'} />
					</div>
					<div className={styles.main_image_box}>
						<Image className={styles.main_image} src={slides[currentSlide]} alt='newsstand hero illustration' />
					</div>
				</div>
			</Container>
			<div className={styles.gradient}></div>
		</div>
	)
}
