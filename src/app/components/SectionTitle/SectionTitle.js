import styles from './SectionTitle.module.css'

export default function SectionTitle({ title }) {
	return (
		<div className={styles.section_title}>
			<p>{title}</p>
			<hr></hr>
		</div>
	)
}
