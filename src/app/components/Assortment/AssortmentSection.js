import Image from 'next/image'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AssortmentSection.module.css'
import assortmentData from '@/app/data/AssortmentData'

export default function AssortmentSection() {
	return (
		<Container>
			<section className={styles.assortment_section}>
				<SectionTitle title={'asortyment'} />
				<div className={styles.assortment_container}>
					<div className={styles.list}>
						<ul>
							{assortmentData.map(assortment => (
								<li key={assortment.index}>
									<div className={styles.button_details}>
										<Image alt={assortment.alt} src={assortment.icon} width={40} height={40}></Image>
										<p>{assortment.title}</p>
									</div>
									<div className={styles.button_right}>
										<Image
											className={styles.img_right}
											alt='icon right'
											src='/right.svg'
											width={40}
											height={40}></Image>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.details}>123</div>
				</div>
			</section>
		</Container>
	)
}
