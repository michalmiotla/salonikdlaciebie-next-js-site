import Image from 'next/image'
import Container from '../Container/Container'
import styles from './Bar.module.css'

export default function Bar() {
	return (
		<Container>
			<div className={styles.bar_section}>
				<div className={styles.bar}>
					<div className={styles.info}>
						<Image
							className={styles.icon}
							alt='icon'
							src='/calendar.svg'
							width={75}
							height={75}
							style={{ animationDelay: '0ms' }}
						/>
						<p className={styles.data}>35</p>
						<p className={styles.description}>lat doświadczenia</p>
					</div>
					<div className={styles.info}>
						<Image
							className={styles.icon}
							alt='icon'
							src='/shop.svg'
							width={75}
							height={75}
							style={{ animationDelay: '500ms' }}
						/>
						<p className={styles.data}>420</p>
						<p className={styles.description}>Saloników w całej Polsce</p>
					</div>
					<div className={styles.logo}>
						<Image className={styles.logo_img} alt='Kolporter logo' src='/Kolporterbackground.png' fill />
					</div>
					<div className={styles.info}>
						<Image
							className={styles.icon}
							alt='icon'
							src='/press.svg'
							width={75}
							height={75}
							style={{ animationDelay: '1000ms' }}
						/>
						<p className={styles.data}>70</p>
						<p className={styles.description}>% udziału w rynku dystrybucji prasy</p>
					</div>
					<div className={styles.info}>
						<Image
							className={styles.icon}
							alt='icon'
							src='/point.svg'
							width={75}
							height={75}
							style={{ animationDelay: '1500ms' }}
						/>
						<p className={styles.data}>40.000</p>
						<p className={styles.description}> m2 powierzchni magazynowej</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
