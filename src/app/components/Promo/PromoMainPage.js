import Image from 'next/image'
import styles from './PromoMainPage.module.css'

export default function PromoMainPage() {
	return (
		<div className={styles.promo}>
			<div className={styles.image_box}>
				<Image
					src='/promo1.png'
					alt='promo img'
					className={styles.img}
					fill
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
		</div>
	)
}
