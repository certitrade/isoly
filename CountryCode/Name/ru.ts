import { Alpha2 } from "../Alpha2"
import { Alpha3 } from "../Alpha3"
import { Numeric } from "../Numeric"

export namespace ru {
	export function from(country: Alpha2 | Alpha3 | Numeric): string {
		return (
			(names as Record<Alpha2 | Alpha3 | Numeric, string | undefined>)[country] ??
			from(Alpha2.from(country as Alpha3 | Numeric))
		)
	}
	export function parse(country: string): Alpha2 | undefined {
		return (Object.entries(names) as [Alpha2, string][]).find(
			entry => entry[1].toLowerCase() == country.toLowerCase()
		)?.[0]
	}

	const names: Record<Alpha2, string> = {
		AU: "Австралия",
		AT: "Австрия",
		AZ: "Азербайджан",
		AX: "Аландские острова",
		AL: "Албания",
		DZ: "Алжир",
		VI: "Виргинские Острова (США)",
		AS: "Американское Самоа",
		AI: "Ангилья",
		AO: "Ангола",
		AD: "Андорра",
		AQ: "Антарктида",
		AG: "Антигуа и Барбуда",
		AR: "Аргентина",
		AM: "Армения",
		AW: "Аруба",
		AF: "Афганистан",
		BS: "Багамы",
		BD: "Бангладеш",
		BB: "Барбадос",
		BH: "Бахрейн",
		BZ: "Белиз",
		BY: "Беларусь",
		BE: "Бельгия",
		BJ: "Бенин",
		BM: "Бермуды",
		BG: "Болгария",
		BO: "Боливия",
		BQ: "Бонэйр, Синт-Эстатиус и Саба",
		BA: "Босния и Герцеговина",
		BW: "Ботсвана",
		BR: "Бразилия",
		IO: "Британская территория в Индийском океане",
		VG: "Виргинские Острова (Великобритания)",
		BN: "Бруней",
		BF: "Буркина-Фасо",
		BI: "Бурунди",
		BT: "Бутан",
		VU: "Вануату",
		VA: "Ватикан",
		GB: "Великобритания",
		HU: "Венгрия",
		VE: "Венесуэла",
		UM: "Внешние малые острова (США)",
		TL: "Восточный Тимор",
		VN: "Вьетнам",
		GA: "Габон",
		HT: "Гаити",
		GY: "Гайана",
		GM: "Гамбия",
		GH: "Гана",
		GP: "Гваделупа",
		GT: "Гватемала",
		GF: "Гвиана",
		GN: "Гвинея",
		GW: "Гвинея-Бисау",
		DE: "Германия",
		GG: "Гернси",
		GI: "Гибралтар",
		HN: "Гондурас",
		HK: "Гонконг",
		GD: "Гренада",
		GL: "Гренландия",
		GR: "Греция",
		GE: "Грузия",
		GU: "Гуам",
		DK: "Дания",
		JE: "Джерси",
		DJ: "Джибути",
		DM: "Доминика",
		DO: "Доминиканская Республика",
		CD: "Демократическая Республика Конго",
		EG: "Египет",
		ZM: "Замбия",
		EH: "САДР",
		ZW: "Зимбабве",
		IL: "Израиль",
		IN: "Индия",
		ID: "Индонезия",
		JO: "Иордания",
		IQ: "Ирак",
		IR: "Иран",
		IE: "Ирландия",
		IS: "Исландия",
		ES: "Испания",
		IT: "Италия",
		YE: "Йемен",
		CV: "Кабо-Верде",
		KZ: "Казахстан",
		KY: "Острова Кайман",
		KH: "Камбоджа",
		CM: "Камерун",
		CA: "Канада",
		QA: "Катар",
		KE: "Кения",
		CY: "Кипр",
		KG: "Киргизия",
		KI: "Кирибати",
		TW: "Китайская Республика",
		KP: "КНДР (Корейская Народно-Демократическая Республика)",
		CN: "КНР (Китайская Народная Республика)",
		CC: "Кокосовые острова",
		CO: "Колумбия",
		KM: "Коморы",
		CR: "Коста-Рика",
		CI: "Кот-д’Ивуар",
		CU: "Куба",
		KW: "Кувейт",
		CW: "Кюрасао",
		LA: "Лаос",
		LV: "Латвия",
		LS: "Лесото",
		LR: "Либерия",
		LB: "Ливан",
		LY: "Ливия",
		LT: "Литва",
		LI: "Лихтенштейн",
		LU: "Люксембург",
		MU: "Маврикий",
		MR: "Мавритания",
		MG: "Мадагаскар",
		YT: "Майотта",
		MO: "Макао",
		MK: "Македония",
		MW: "Малави",
		MY: "Малайзия",
		ML: "Мали",
		MV: "Мальдивы",
		MT: "Мальта",
		MA: "Марокко",
		MQ: "Мартиника",
		MH: "Маршалловы Острова",
		MX: "Мексика",
		FM: "Микронезия",
		MZ: "Мозамбик",
		MD: "Молдавия",
		MC: "Монако",
		MN: "Монголия",
		MS: "Монтсеррат",
		MM: "Мьянма",
		NA: "Намибия",
		NR: "Науру",
		NP: "Непал",
		NE: "Нигер",
		NG: "Нигерия",
		NL: "Нидерланды",
		NI: "Никарагуа",
		NU: "Ниуэ",
		NZ: "Новая Зеландия",
		NC: "Новая Каледония",
		NO: "Норвегия",
		AE: "ОАЭ",
		OM: "Оман",
		BV: "Остров Буве",
		IM: "Остров Мэн",
		CK: "Острова Кука",
		NF: "Остров Норфолк",
		CX: "Остров Рождества",
		PN: "Острова Питкэрн",
		SH: "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
		PK: "Пакистан",
		PW: "Палау",
		PS: "Государство Палестина",
		PA: "Панама",
		PG: "Папуа — Новая Гвинея",
		PY: "Парагвай",
		PE: "Перу",
		PL: "Польша",
		PT: "Португалия",
		PR: "Пуэрто-Рико",
		CG: "Республика Конго",
		KR: "Республика Корея",
		RE: "Реюньон",
		RU: "Россия",
		RW: "Руанда",
		RO: "Румыния",
		SV: "Сальвадор",
		WS: "Самоа",
		SM: "Сан-Марино",
		ST: "Сан-Томе и Принсипи",
		SA: "Саудовская Аравия",
		SZ: "Свазиленд",
		MP: "Северные Марианские Острова",
		SC: "Сейшельские Острова",
		BL: "Сен-Бартелеми",
		MF: "Сен-Мартен",
		PM: "Сен-Пьер и Микелон",
		SN: "Сенегал",
		VC: "Сент-Винсент и Гренадины",
		KN: "Сент-Китс и Невис",
		LC: "Сент-Люсия",
		RS: "Сербия",
		SG: "Сингапур",
		SX: "Синт-Мартен",
		SY: "Сирия",
		SK: "Словакия",
		SI: "Словения",
		SB: "Соломоновы Острова",
		SO: "Сомали",
		SD: "Судан",
		SR: "Суринам",
		US: "США",
		SL: "Сьерра-Леоне",
		TJ: "Таджикистан",
		TH: "Таиланд",
		TZ: "Танзания",
		TC: "Теркс и Кайкос",
		TG: "Того",
		TK: "Токелау",
		TO: "Тонга",
		TT: "Тринидад и Тобаго",
		TV: "Тувалу",
		TN: "Тунис",
		TM: "Туркмения",
		TR: "Турция",
		UG: "Уганда",
		UZ: "Узбекистан",
		UA: "Украина",
		WF: "Уоллис и Футуна",
		UY: "Уругвай",
		FO: "Фареры",
		FJ: "Фиджи",
		PH: "Филиппины",
		FI: "Финляндия",
		FK: "Фолклендские острова",
		FR: "Франция",
		PF: "Французская Полинезия",
		TF: "Французские Южные и Антарктические Территории",
		HM: "Херд и Макдональд",
		HR: "Хорватия",
		CF: "ЦАР",
		TD: "Чад",
		ME: "Черногория",
		CZ: "Чехия",
		CL: "Чили",
		CH: "Швейцария",
		SE: "Швеция",
		SJ: "Шпицберген и Ян-Майен",
		LK: "Шри-Ланка",
		EC: "Эквадор",
		GQ: "Экваториальная Гвинея",
		ER: "Эритрея",
		EE: "Эстония",
		ET: "Эфиопия",
		ZA: "ЮАР",
		GS: "Южная Георгия и Южные Сандвичевы Острова",
		SS: "Южный Судан",
		JM: "Ямайка",
		JP: "Япония",
		XK: "Косов",
	}
}
