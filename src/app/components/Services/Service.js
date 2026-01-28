import Image from 'next/image'
import styles from './Service.module.css'

export default function Service({ icon, title }) {
	return (
		<div className={styles.service}>
			<div className={styles.image_container}>
				<Image src={icon} alt='img' fill />
			</div>
			<div className={styles.title_container}>
				<p className={styles.title}>{title}</p>
			</div>
			<div className={styles.description_container}>
				<p>
					Opis ada sdasdd adaads a sd asd adaads asdsad asd asd asd a defaultd asd sa d asdsad asdasdadas da dad ad
					adsasd asd asdadsasd daasdasd d sd sada aasdasdasdasads
				</p>
			</div>
		</div>
	)
}

// /bill.svg'
