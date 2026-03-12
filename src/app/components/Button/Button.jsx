import Image from 'next/image'
import styles from './Button.module.css'

export default function Button({ title }) {
	return (
		<button className={styles.button}>
			{title}
			<Image className={styles.img_right} alt='icon right' src='/right_white.svg' width={40} height={40}></Image>
		</button>
	)
}
