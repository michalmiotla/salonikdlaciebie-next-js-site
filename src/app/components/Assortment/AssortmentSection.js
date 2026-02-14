'use client'

import Image from 'next/image'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AssortmentSection.module.css'
import assortmentData from '@/app/data/AssortmentData'
import { useState } from 'react'

export default function AssortmentSection() {
	const [index, setIndex] = useState(0)

	return (
		<Container>
			<section className={styles.assortment_section}>
				<SectionTitle title={'asortyment'} />
				<div className={styles.assortment_container}>
					<div className={styles.list}>
						<ul>
							{assortmentData.map(assortment => (
								<li
									key={assortment.index}
									onClick={() => {
										setIndex(assortment.index)
									}}>
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
					<div className={styles.details}>
						<Image
							alt={assortmentData[index].alt}
							src={assortmentData[index].icon}
							className={styles.details_img}
							fill></Image>
						<p className={styles.details_title}>{assortmentData[index].title}</p>
						<p className={styles.details_description}>{assortmentData[index].description}</p>
						<div className={styles.hashtags}>
							<ul>
								{assortmentData[index].hashtags.map((hashtag, i) => (
									<li className={styles.hashtags_element} key={i}>
										{hashtag}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}
