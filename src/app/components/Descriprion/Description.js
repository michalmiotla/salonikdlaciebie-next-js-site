import Container from '../Container/Container'
import styles from './Description.module.css'

export default function Description() {
	return (
		<Container>
			<div className={styles.description}>
				<h2 className={styles.second_heading}>
					Strona dla klientów Saloników Prasowych <strong>Kolporter</strong>.
				</h2>
				<h3 className={styles.third_heading}>
					Sprawdź najświeższe informacje oraz promocje i odwiedź swój najbliższy punkt!
				</h3>
			</div>
		</Container>
	)
}
