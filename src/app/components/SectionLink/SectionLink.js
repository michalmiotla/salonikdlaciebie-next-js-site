import Link from 'next/link'
import styles from './SectionLink.module.css'
import Image from 'next/image'

export default function SectionLink({ section, link }) {
	return (
		<Link className={styles.section_link} href={link}>
			<p>{section}</p>
			<Image className={styles.img} alt='icon right' src='/right.svg' width={40} height={40}></Image>
		</Link>
	)
}
