const assortmentData = [
	{
		index: 0,
		title: 'Prasa',
		icon: '/press.svg',
		alt: 'press icon',
		description:
			'Nasze Saloniki są miejscem, w którym zawsze znajdziesz coś do poczytania — od codziennych dzienników po inspirujące magazyny i specjalistyczne wydania. Niezależnie od tego, czy szukasz chwili relaksu, czy konkretnych informacji, bogaty wybór pozwoli łatwo znaleźć coś dla siebie. Twoje ulubione numery możesz również zamawiać w ramach prenumeraty.',
		hashtags: ['dzienniki', 'kolekcje', 'publicystyka', 'rozrywka', 'dziecięce'],
	},
	{
		index: 1,
		title: 'Tytoniowe',
		icon: '/flame.svg',
		alt: 'flame icon',
		description:
			'W naszych punktach dostępne są najpopularniejsze marki papierosów oraz szeroki wybór wyrobów tytoniowych. Dbamy o wysoką dostępność produktów i regularne dostawy, dzięki czemu każdy użytkownik będzie w stanie znaleźć u nas coś dla siebie. W ofercie znajdują się również tytonie i cygaretki w różnych wariantach.',
		hashtags: ['papierosy', 'tytonie', 'cygaretki', 'cygara', 'tabaki'],
	},
	{
		index: 2,
		title: 'Nowatorskie tyt.',
		icon: '/battery.svg',
		alt: 'battery icon',
		description:
			'Jesteśmy na bieżąco z nowościami w kategorii produktów nowatorskich. Oferujemy wkłady i liquidy zgodne z obowiązującymi przepisami oraz aktualnymi trendami. Regularnie aktualizujemy asortyment, aby zapewnić dostęp do najnowszych rozwiązań w jednym miejscu.',
		hashtags: ['liquidy', 'wkłady tytoniowe', 'woreczki nikotynowe'],
	},
	{
		index: 3,
		title: 'Dodatki tyt.',
		icon: '/add.svg',
		alt: 'battery icon',
		description:
			'Mamy wszystko, czego potrzeba, w jednym miejscu — m. in. zapalniczki, również krzesiwowe i żarowe, krótkie i długie bibułki z filtrami lub bez, filtry o różnych grubościach, nabijarki do gilz itp. Szeroki wybór i stała dostępność sprawiają, że szybko znajdziesz niezbędne akcesoria.',
		hashtags: ['zapalniczki', 'filtry', 'bibułki', 'nabijarki', 'lufki szklane'],
	},
	{
		index: 4,
		title: 'Okolicznościowe',
		icon: '/confetti.svg',
		alt: 'confetti icon',
		description:
			'Kartki, torebki i zaproszenia na każdą okazję — od urodzin po wyjątkowe wydarzenia, takie jak chrzest, Komunia Święta, 18-stka itp. Duży wybór i różne wzory pozwalają dopasować coś idealnego do charakteru wydarzenia. To szybki sposób, by nadać głównemu prezentowi osobisty akcent.',
		hashtags: ['kartki', 'zaproszenia', 'torebki'],
	},
	{
		index: 5,
		title: 'Karty podarunkowe',
		icon: '/gift.svg',
		alt: 'gift icon',
		description:
			'Karty podarunkowe to strzał w "10", gdy nie masz pomysłu na prezent, lub chcesz coś "dołożyć" do upominku. To praktyczne i wygodne rozwiązanie, które daje swobodę wyboru obdarowanej osobie. W ofercie posiadamy karty m. in. do Netflixa, Google Play, Steama, Allegro i wiele, wiele więcej.',
		hashtags: ['gaming', 'muzyka', 'filmy', 'moda'],
	},
	{
		index: 6,
		title: 'Zabawki',
		icon: '/ball.svg',
		alt: 'ball icon',
		description:
			'W naszych punktach najmłodsi klienci mają dostęp do szerokiego wyboru różnych typów zabawek, od kolorowych figurek, przez pluszaki i maskotki, po komiksy i karty kolekcjonerskie. Asortyment podąża za trendami i jest zawsze „na czasie”. Idealne na drobny prezent lub uzupełnienie kolekcji.',
		hashtags: ['karty kolekcjonerskie', 'figurki', 'maskotki', 'komiksy'],
	},
	{
		index: 7,
		title: 'Spożywcze',
		icon: '/bottle.svg',
		alt: 'bottle icon',
		description:
			'Gdy masz ochotę na coś słodkiego albo szybką przekąskę, nasze saloniki spieszą z pomocą! Oferujemy słodycze, przekąski, gumy do żucia i napoje — wszystko szybko i pod ręką. Idealne rozwiązanie w biegu, lub na małą przerwę w ciągu dnia.',
		hashtags: ['słodycze', 'słone', 'gumy do żucia', 'napoje'],
	},
	{
		index: 8,
		title: 'Apteczka',
		icon: '/pills.svg',
		alt: 'pills icon',
		description:
			'Czasem potrzebny jest szybki ratunek — dlatego oferujemy podstawowe produkty dostępne bez recepty. Znajdziesz w naszych punktach m.in. środki przeciwbólowe, plastry oraz prezerwatywy w różnych wariantach. Wszystko wygodnie i od ręki.',
		hashtags: ['przeciwbólowe', 'prezerwatywy', 'plastry'],
	},

	{
		index: 9,
		title: 'Biurowe / szkolne',
		icon: '/document.svg',
		alt: 'document icon',
		description:
			'Szkoła, praca, organizacja dokumentów — mamy to, czego potrzebujesz. Szybko uzupełnisz brakujące artykuły bez specjalnej wyprawy do sklepu papierniczego. Mamy w ofercie m.in zeszyty we wszystkich najpopularniejszych rodzajach i grubościach, papierowe i plastikowe teczki na dokumenty oraz okładki i koszulki.',
		hashtags: ['zeszyty', 'teczki na dokumenty', 'okładki', 'koszulki', 'spinacze'],
	},
	{
		index: 10,
		title: 'Gadżety',
		icon: '/glasses.svg',
		alt: 'glasses icon',
		description:
			'Małe rzeczy, które potrafią ucieszyć — to z pewnością znajdziesz w naszych Salonikach. Mamy m.in. magnesy na lodówkę (imienne, lokalne, ze znakami zodiaku), breloki, okulary do czytania i przeciwsłonczne oraz akcesoria samochodowe, takie jak ładowarki lub uchwyty. Idealne jako upominek albo coś „na szybko”.',
		hashtags: ['magnesy', 'okulary', 'breloki', 'akcesoria samochodowe'],
	},
	{
		index: 11,
		title: 'GSM',
		icon: '/sim.svg',
		alt: 'sim icon',
		description:
			'Potrzebna ładowarka sieciowa, kabel lub słuchawki? W dziale GSM znajdziesz najważniejsze akcesoria oraz karty SIM najpopularniejszych polskich operatorów. To szybkie i wygodne rozwiązanie, gdy Twój telefon potrzebuje wsparcia.',
		hashtags: ['ładowarki', 'słuchawki', 'kable', 'karty SIM'],
	},
	{
		index: 12,
		title: 'Bilety',
		icon: '/bus.svg',
		alt: 'bus icon',
		description:
			'Bilety komunikacji miejskiej, PKP lub na mecz ulubionej drużyny kupisz wygodnie w jednym miejscu, bez zbędnych formalności i dodatkowych przystanków. W wybranych punktach możesz również doładować swoją kartę miejską. Załatw wszystko przy okazji codziennych zakupów.',
		hashtags: ['bilety komunikacji miejskiej', 'bilety PKP', 'bilety na mecze'],
	},
]

export default assortmentData
