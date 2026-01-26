import Image from 'next/image'
import styles from './Service.module.css'

export default function Service() {
	return (
		<div className={styles.service}>
			<div className={styles.image_container}>
				<svg
					width={250}
					height={250}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='0.5'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<rect x='4' y='2' width='16' height='20' rx='2' />
					<line x1='8' y1='6' x2='16' y2='6' />
					<line x1='8' y1='10' x2='16' y2='10' />
					<line x1='8' y1='14' x2='12' y2='14' />
				</svg>
				{/* <Image src='/bill.svg' alt='img' fill /> */}
			</div>
			<div className={styles.title_container}>
				<p className={styles.title}>Tytuł usługi</p>
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
