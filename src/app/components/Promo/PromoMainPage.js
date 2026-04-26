import Image from 'next/image'
import styles from './PromoMainPage.module.css'

export default function PromoMainPage({ src }) {
	return (
		<div className={styles.image_box}>
			<Image src={src} alt='promo img' className={styles.img} fill objectFit='cover' objectPosition='center' />
		</div>
	)
}
