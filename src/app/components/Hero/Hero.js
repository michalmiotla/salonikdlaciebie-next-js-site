'use client'

import Container from '../Container/Container'
import styles from './Hero.module.css'
import Button from '../Button/Button'
import Bar from '../Bar/Bar'

export default function Hero() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.main_image}></div>
				<div className={styles.gradient}></div>
				<Container>
					<div className={styles.main}>
						<div className={styles.titles}>
							<h1 className={styles.title}>
								<span>Twoje</span> źródło informacji i drobnych przyjemności :)
							</h1>
							<h2 className={styles.subtitle}>
								Strona dla klientów <span>Saloników Prasowych Kolporter</span>. Newsy, promocje, ciekawostki - wszystko
								co najważniejsze w jednym miejscu.
							</h2>
						</div>
						<div className={styles.buttons}>
							<Button title={'znajdź salonik'} link={'#map'}></Button>
							<Button title={'zobacz promocje'} link={'#promocje'}></Button>
						</div>
					</div>
				</Container>
			</div>
			<Bar />
		</>
	)
}
