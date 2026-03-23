import Hero from './Hero/Hero'
import NewsSection from './News/NewsSection'
import PromoSection from './Promo/PromoSection'
import SercivesSection from './Services/ServicesSection'
import AssortmentSection from './Assortment/AssortmentSection'
import { Magazine } from './Magazine/Magazine'

export default function MainPage() {
	return (
		<>
			<Hero />
			<NewsSection />
			<Magazine />
			<PromoSection />
			<SercivesSection />
			<AssortmentSection />
		</>
	)
}
