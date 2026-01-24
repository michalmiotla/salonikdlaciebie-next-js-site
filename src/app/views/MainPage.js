import Subheadings from '../components/Subheadings/Subheadings'
import Hero from '../components/Hero/Hero'
import NewsSection from '../components/News/NewsSection'
import PromoSection from '../components/Promo/PromoSection'
import SercivesSection from '../components/Services/ServicesSection'

export default function MainPage() {
	return (
		<>
			<Hero />
			<Subheadings />
			<NewsSection />
			<PromoSection />
			<SercivesSection />
		</>
	)
}
