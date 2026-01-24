import Link from 'next/link'
import styles from './SectionLink.module.css'

export default function SectionLink({ section, link }) {
	return (
		<Link className={styles.section_link} href={link}>
			{section} &gt;&gt;&gt;
		</Link>
	)
}
