import styles from './Map.module.css'

export default function Map() {
	return (
		<div className={styles.map_container}>
			<p className={styles.title}>Znajdź swój najbliższy punkt:</p>
			<iframe
				id='map'
				className={styles.map}
				src='https://www.google.com/maps/d/embed?mid=1Kj_ump14R975kUhYIm12vEimm356X7s&ehbc=2E312F'
				width='640'
				height='480'></iframe>
		</div>
	)
}
