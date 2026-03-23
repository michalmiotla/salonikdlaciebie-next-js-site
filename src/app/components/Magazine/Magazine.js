import Image from 'next/image'
import Container from '../Container/Container'
import styles from './Magazine.module.css'

export function Magazine() {
	return (
		<Container>
			<div className={styles.magazine}>
				<div className={styles.description}>
					<p className={styles.title}>Salonik dla Ciebie - bezpłatna gazetka proomcyjna</p>
					<p className={styles.description}></p>
				</div>
				<div className={styles.photo}>
					<Image
						className={styles.img}
						alt='salonikdlaciebie bezpłatna gazetka pdf'
						src='/magazine.png'
						fill
						objectFit='cover'
						objectPosition='center'
					/>
				</div>
			</div>
		</Container>
	)
}
