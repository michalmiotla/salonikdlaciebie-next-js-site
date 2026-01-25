import Image from 'next/image'
import styles from './Service.module.css'

export default function Service() {
	return (
		<div className={styles.service}>
			<div className={styles.image_container}>
				<Image src='/bill.svg' alt='img' fill />
			</div>
			<div className={styles.title_container}>
				<p className={styles.title}>Tytuł usługi</p>
			</div>
		</div>
	)
}
