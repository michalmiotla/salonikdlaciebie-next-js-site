import './globals.css'
import './theme.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
	style: ['normal'],
	weight: ['300', '400', '700'],
})

export const metadata = {
	title: 'salonikdlaciebie.pl',
	description: 'Strona dla klientów sieci saloników prasowych "Kolporter"',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={ubuntu.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
