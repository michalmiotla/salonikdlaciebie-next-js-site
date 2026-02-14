const assortmentData = [
	{
		index: 0,
		title: 'Prasa',
		icon: '/press.svg',
		alt: 'press icon',
		description:
			'U nas zawsze znajdziesz coś do poczytania — od codziennych dzienników po inspirujące magazyny i kolekcje. Oferujemy tytuły o hobby, rozrywce, publicystyce oraz prasę dziecięcą. Niezależnie od tego, czy szukasz chwili relaksu, czy konkretnych informacji, bogaty wybór pozwoli łatwo znaleźć coś dla siebie.',
		hashtags: ['dzienniki', 'kolekcje', 'publicystyka', 'rozrywka', 'dziecięce'],
	},
	{
		index: 1,
		title: 'Tytoniowe',
		icon: '/flame.svg',
		alt: 'flame icon',
		description:
			'Dostępne są najpopularniejsze marki papierosów oraz szeroki wybór wyrobów tytoniowych. Dbamy o wysoką dostępność produktów i regularne dostawy. W ofercie znajdują się również tytonie i cygaretki w różnych wariantach — szybko i bez zbędnych komplikacji.',
		hashtags: ['papierosy', 'tytonie', 'cygaretki', 'cygara', 'tabaki'],
	},
	{
		index: 2,
		title: 'Nowatorskie tyt.',
		icon: '/battery.svg',
		alt: 'battery icon',
		description:
			'Jesteśmy na bieżąco z nowościami w kategorii produktów nowatorskich. Oferujemy wkłady i liquidy zgodnie z obowiązującymi przepisami oraz aktualnymi trendami. Regularnie aktualizujemy asortyment, aby zapewnić dostęp do najnowszych rozwiązań w jednym miejscu.',
		hashtags: ['liquidy', 'wkłady tytoniowe', 'woreczki nikotynowe'],
	},
	{
		index: 3,
		title: 'Dodatki tyt.',
		icon: '/add.svg',
		alt: 'battery icon',
		description:
			'Wszystko, czego potrzeba w jednym miejscu — zapalniczki, filtry, bibułki czy nabijarki. Oferujemy również lufki szklane w różnych wariantach. Szeroki wybór i stała dostępność sprawiają, że szybko znajdziesz potrzebne akcesoria.',
		hashtags: ['zapalniczki', 'filtry', 'bibułki', 'nabijarki', 'lufki szklane'],
	},
	{
		index: 4,
		title: 'Okolicznościowe',
		icon: '/confetti.svg',
		alt: 'confetti icon',
		description:
			'Kartki, torebki i zaproszenia na każdą okazję — od urodzin po wyjątkowe jubileusze. Duży wybór i różne wzory pozwalają dopasować coś idealnego do charakteru wydarzenia. To szybki sposób, by nadać prezentowi osobisty akcent.',
		hashtags: ['kartki', 'zaproszenia', 'torebki'],
	},
	{
		index: 5,
		title: 'Karty podarunkowe',
		icon: '/gift.svg',
		alt: 'gift icon',
		description:
			'Nie wiesz, co wybrać na prezent? Karty podarunkowe z kategorii gaming, muzyka, filmy czy moda to zawsze trafiony wybór. To praktyczne i wygodne rozwiązanie, które daje swobodę wyboru obdarowanej osobie.',
		hashtags: ['gaming', 'muzyka', 'filmy', 'moda'],
	},
	{
		index: 6,
		title: 'Zabawki',
		icon: '/ball.svg',
		alt: 'ball icon',
		description:
			'Kolorowe figurki, maskotki, komiksy i karty kolekcjonerskie — coś dla małych i dużych fanów popkultury. Asortyment podąża za trendami i jest zawsze „na czasie”. Idealne na drobny prezent lub uzupełnienie kolekcji.',
		hashtags: ['karty kolekcjonerskie', 'figurki', 'maskotki', 'komiksy'],
	},
	{
		index: 7,
		title: 'Spożywcze',
		icon: '/bottle.svg',
		alt: 'bottle icon',
		description:
			'Masz ochotę na coś słodkiego albo szybką przekąskę? Oferujemy słodycze, przekąski słone, gumy do żucia i napoje — wszystko szybko i pod ręką. Idealne rozwiązanie w biegu lub na małą przerwę w ciągu dnia.',
		hashtags: ['słodycze', 'słone', 'gumy do żucia', 'napoje'],
	},
	{
		index: 8,
		title: 'Apteczka',
		icon: '/pills.svg',
		alt: 'pills icon',
		description:
			'Czasem potrzebny jest szybki ratunek — dlatego oferujemy podstawowe produkty dostępne bez recepty. Znajdziesz tu środki przeciwbólowe, plastry oraz prezerwatywy w różnych wariantach. Wszystko wygodnie i od ręki.',
		hashtags: ['przeciwbólowe', 'prezerwatywy', 'plastry'],
	},

	{
		index: 9,
		title: 'Biurowe',
		icon: '/document.svg',
		alt: 'document icon',
		description:
			'Szkoła, praca, organizacja dokumentów — mamy to, czego potrzebujesz. Zeszyty, teczki na dokumenty, okładki, koszulki i spinacze dostępne są na miejscu. Szybko uzupełnisz brakujące artykuły bez specjalnej wyprawy do sklepu papierniczego.',
		hashtags: ['zeszyty', 'teczki na dokumenty', 'okładki', 'koszulki', 'spinacze'],
	},
	{
		index: 10,
		title: 'Gadżety',
		icon: '/glasses.svg',
		alt: 'glasses icon',
		description:
			'Małe rzeczy, które potrafią ucieszyć — magnesy, breloki czy praktyczne akcesoria samochodowe. W ofercie dostępne są także okulary i inne drobne dodatki. Idealne jako upominek albo coś „na szybko”.',
		hashtags: ['magnesy', 'okulary', 'breloki', 'akcesoria samochodowe'],
	},
	{
		index: 11,
		title: 'GSM',
		icon: '/sim.svg',
		alt: 'sim icon',
		description:
			'Potrzebna ładowarka, kabel lub słuchawki? W kategorii GSM znajdziesz najważniejsze akcesoria oraz karty SIM popularnych operatorów. To szybkie i wygodne rozwiązanie, gdy Twój telefon potrzebuje wsparcia.',
		hashtags: ['ładowarki', 'słuchawki', 'kable', 'karty SIM'],
	},
	{
		index: 12,
		title: 'Bilety',
		icon: '/bus.svg',
		alt: 'bus icon',
		description:
			'Bilety komunikacji miejskiej, PKP czy na mecze kupisz wygodnie w jednym miejscu. Bez zbędnych formalności i dodatkowych przystanków. Załatw wszystko przy okazji codziennych zakupów.',
		hashtags: ['bilety komunikacji miejskiej', 'bilety PKP', 'bilety na mecze'],
	},
]

export default assortmentData
