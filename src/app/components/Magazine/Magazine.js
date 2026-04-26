import Image from 'next/image'
import Container from '../Container/Container'
import styles from './Magazine.module.css'
import Link from 'next/link'
import SectionLink from '../SectionLink/SectionLink'

export function Magazine() {
	return (
		<Container>
			<div className={styles.magazine_section}>
				<Link target='_blank' href='https://www.kolporter.com.pl/wydawnictwa/salonik_prasowy/Salonik_dla_Ciebie.pdf'>
					<div className={styles.magazine}>
						<div className={styles.description}>
							<p className={styles.title}>Salonik dla Ciebie - bezpłatna gazetka promocyjna</p>
							<p className={styles.paragraph}>
								W miesięczniku &quot;Salonik dla Ciebie&quot; znajdą Państwo m. in. informacje dotyczące najnowszych
								wydań prasowych oraz promowanych kolekcji, aktualne oferty specjalne oraz ciekawostki związane z
								działalnością firmy. Miesięcznik dostępny jest we wszystkich punktach sieci &quot;Kolporter&quot; oraz
								online, w formacie PDF.
							</p>
						</div>
						<div className={styles.arrow}>
							<Image
								className={styles.right}
								alt='arrow right'
								src='/right.svg'
								fill
								objectFit='contain'
								objectPosition='center'
							/>
						</div>
						<div className={styles.photo}>
							<Image
								className={styles.img}
								alt='salonikdlaciebie bezpłatna gazetka pdf'
								src='/magazine.png'
								fill
								objectFit='contain'
								objectPosition='center'
							/>
						</div>
					</div>
				</Link>
				<SectionLink section={'więcej aktualności'} link={'/aktualnosci'} />
			</div>
		</Container>
	)
}
