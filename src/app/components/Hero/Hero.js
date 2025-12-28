import Container from '../Container/Container'
import styles from './Hero.module.css'
import Image from 'next/image'
import Kolporterbackground from '../../../../public/Kolporterbackground.png'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<Container>
				<div className={styles.main}>
					<h1 className={styles.title}>Twoje centrum informacji i drobnych przyjemności :)</h1>
					<Image className={styles.main_image} src={Kolporterbackground} alt='kolporter logo' />
				</div>
			</Container>
			<div className={styles.gradient}></div>
		</div>
	)
}
