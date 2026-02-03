import Image from 'next/image'
import styles from './Service.module.css'

export default function Service({ icon, title, description }) {
	return (
		<div className={styles.service}>
			<div className={styles.image_container}>
				<Image src={icon} alt='img' fill />
			</div>
			<div className={styles.title_container}>
				<p className={styles.title}>{title}</p>
			</div>
			<div className={styles.description_container}>
				<p>{description}</p>
			</div>
		</div>
	)
}

// /bill.svg'
