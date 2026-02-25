import Container from '../Container/Container'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroImg from '../../../../public/newsstand.svg'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<Container>
				<div className={styles.main}>
					<div className={styles.main_titles}>
						<h1 className={styles.title}>twoje centrum informacji i drobnych przyjemności :)</h1>
						<h2>
							strona dla klientów Saloników Prasowych <strong>Kolporter</strong>.
						</h2>
						<h2>sprawdź najświeższe informacje oraz promocje i odwiedź swój najbliższy punkt!</h2>
					</div>
					<div className={styles.main_image_box}>
						<Image className={styles.main_image} src={HeroImg} alt='newsstand hero illustration' />
					</div>
				</div>
			</Container>
			<div className={styles.gradient}></div>
		</div>
	)
}
