import { Alpha2 } from "../Alpha2"
import { Alpha3 } from "../Alpha3"
import { Numeric } from "../Numeric"

export namespace be {
	export function from(country: Alpha2 | Alpha3 | Numeric): string
	export function from(country: string | number): string | undefined
	export function from(country: string | number): string | undefined {
		const c =
			(typeof country == "string" && country.length == 3) || typeof country == "number" ? Alpha2.from(country) : country
		return c ? (names as Record<string | number, string | undefined>)[c] : undefined
	}
	export function parse(country: string): Alpha2 | undefined {
		return (Object.entries(names) as [Alpha2, string][]).find(
			entry => entry[1].toLowerCase() == country.toLowerCase()
		)?.[0]
	}

	const names: Record<Alpha2, string> = {
		AD: "Андора",
		AE: "Аб’яднаныя Арабскія Эміраты",
		AF: "Афганістан",
		AG: "Антыгуа і Барбуда",
		AI: "Ангілья",
		AL: "Албанія",
		AM: "Арменія",
		AO: "Ангола",
		AQ: "Антарктыка",
		AR: "Аргенціна",
		AS: "Амерыканскае Самоа",
		AT: "Аўстрыя",
		AU: "Аўстралія",
		AW: "Аруба",
		AX: "Аландскія астравы",
		AZ: "Азербайджан",
		BA: "Боснія і Герцагавіна",
		BB: "Барбадас",
		BD: "Бангладэш",
		BE: "Бельгія",
		BF: "Буркіна-Фасо",
		BG: "Балгарыя",
		BH: "Бахрэйн",
		BI: "Бурундзі",
		BJ: "Бенін",
		BL: "Сен-Бартэльмі",
		BM: "Бермудскія астравы",
		BN: "Бруней",
		BO: "Балівія",
		BQ: "Карыбскія Нідэрланды",
		BR: "Бразілія",
		BS: "Багамы",
		BT: "Бутан",
		BV: "Востраў Бувэ",
		BW: "Батсвана",
		BY: "Беларусь",
		BZ: "Беліз",
		CA: "Канада",
		CC: "Какосавыя (Кілінг) астравы",
		CD: "Конга (Кіншаса)",
		CF: "Цэнтральнаафрыканская Рэспубліка",
		CG: "Конга - Бразавіль",
		CH: "Швейцарыя",
		CI: "Кот-д’Івуар",
		CK: "Астравы Кука",
		CL: "Чылі",
		CM: "Камерун",
		CN: "Кітай",
		CO: "Калумбія",
		CR: "Коста-Рыка",
		CU: "Куба",
		CV: "Каба-Вердэ",
		CW: "Кюрасаа",
		CX: "Востраў Каляд",
		CY: "Кіпр",
		CZ: "Чэхія",
		DE: "Германія",
		DJ: "Джыбуці",
		DK: "Данія",
		DM: "Дамініка",
		DO: "Дамініканская Рэспубліка",
		DZ: "Алжыр",
		EC: "Эквадор",
		EE: "Эстонія",
		EG: "Егіпет",
		EH: "Заходняя Сахара",
		ER: "Эрытрэя",
		ES: "Іспанія",
		ET: "Эфіопія",
		FI: "Фінляндыя",
		FJ: "Фіджы",
		FK: "Фалклендскія астравы",
		FM: "Мікранезія",
		FO: "Фарэрскія астравы",
		FR: "Францыя",
		GA: "Габон",
		GB: "Вялікабрытанія",
		GD: "Грэнада",
		GE: "Грузія",
		GF: "Французская Гвіяна",
		GG: "Гернсі",
		GH: "Гана",
		GI: "Гібралтар",
		GL: "Грэнландыя",
		GM: "Гамбія",
		GN: "Гвінея",
		GP: "Гвадэлупа",
		GQ: "Экватарыяльная Гвінея",
		GR: "Грэцыя",
		GS: "Паўднёвая Джорджыя і Паўднёвыя Сандвічавы астравы",
		GT: "Гватэмала",
		GU: "Гуам",
		GW: "Гвінея-Бісау",
		GY: "Гаяна",
		HK: "Ганконг, САР (Кітай)",
		HM: "Астравы Херд і Макдональд",
		HN: "Гандурас",
		HR: "Харватыя",
		HT: "Гаіці",
		HU: "Венгрыя",
		ID: "Інданезія",
		IE: "Ірландыя",
		IL: "Ізраіль",
		IM: "Востраў Мэн",
		IN: "Індыя",
		IO: "Брытанская тэрыторыя ў Індыйскім акіяне",
		IQ: "Ірак",
		IR: "Іран",
		IS: "Ісландыя",
		IT: "Італія",
		JE: "Джэрсі",
		JM: "Ямайка",
		JO: "Іарданія",
		JP: "Японія",
		KE: "Кенія",
		KG: "Кыргызстан",
		KH: "Камбоджа",
		KI: "Кірыбаці",
		KM: "Каморскія Астравы",
		KN: "Сент-Кітс і Невіс",
		KP: "Паўночная Карэя",
		KR: "Паўднёвая Карэя",
		KW: "Кувейт",
		KY: "Кайманавы астравы",
		KZ: "Казахстан",
		LA: "Лаос",
		LB: "Ліван",
		LC: "Сент-Люсія",
		LI: "Ліхтэнштэйн",
		LK: "Шры-Ланка",
		LR: "Ліберыя",
		LS: "Лесота",
		LT: "Літва",
		LU: "Люксембург",
		LV: "Латвія",
		LY: "Лівія",
		MA: "Марока",
		MC: "Манака",
		MD: "Малдова",
		ME: "Чарнагорыя",
		MF: "Сен-Мартэн",
		MG: "Мадагаскар",
		MH: "Маршалавы Астравы",
		MK: "Македонія",
		ML: "Малі",
		MM: "М’янма (Бірма)",
		MN: "Манголія",
		MO: "Макаа, САР (Кітай)",
		MP: "Паўночныя Марыянскія астравы",
		MQ: "Марцініка",
		MR: "Маўрытанія",
		MS: "Мантсерат",
		MT: "Мальта",
		MU: "Маўрыкій",
		MV: "Мальдывы",
		MW: "Малаві",
		MX: "Мексіка",
		MY: "Малайзія",
		MZ: "Мазамбік",
		NA: "Намібія",
		NC: "Новая Каледонія",
		NE: "Нігер",
		NF: "Востраў Норфалк",
		NG: "Нігерыя",
		NI: "Нікарагуа",
		NL: "Нідэрланды",
		NO: "Нарвегія",
		NP: "Непал",
		NR: "Науру",
		NU: "Ніуэ",
		NZ: "Новая Зеландыя",
		OM: "Аман",
		PA: "Панама",
		PE: "Перу",
		PF: "Французская Палінезія",
		PG: "Папуа-Новая Гвінея",
		PH: "Філіпіны",
		PK: "Пакістан",
		PL: "Польшча",
		PM: "Сен-П’ер і Мікелон",
		PN: "Астравы Піткэрн",
		PR: "Пуэрта-Рыка",
		PS: "Палесцінскія Тэрыторыі",
		PT: "Партугалія",
		PW: "Палау",
		PY: "Парагвай",
		QA: "Катар",
		RE: "Рэюньён",
		RO: "Румынія",
		RS: "Сербія",
		RU: "Расія",
		RW: "Руанда",
		SA: "Саудаўская Аравія",
		SB: "Саламонавы Астравы",
		SC: "Сейшэльскія Астравы",
		SD: "Судан",
		SE: "Швецыя",
		SG: "Сінгапур",
		SH: "Востраў Святой Алены",
		SI: "Славенія",
		SJ: "Шпіцберген і Ян-Маен",
		SK: "Славакія",
		SL: "Сьера-Леонэ",
		SM: "Сан-Марына",
		SN: "Сенегал",
		SO: "Самалі",
		SR: "Сурынам",
		SS: "Паўднёвы Судан",
		ST: "Сан-Тамэ і Прынсіпі",
		SV: "Сальвадор",
		SX: "Сінт-Мартэн",
		SY: "Сірыя",
		SZ: "Свазіленд",
		TC: "Цёркс і Кайкас",
		TD: "Чад",
		TF: "Французскія Паўднёвыя тэрыторыі",
		TG: "Тога",
		TH: "Тайланд",
		TJ: "Таджыкістан",
		TK: "Такелау",
		TL: "Тымор-Лешці",
		TM: "Туркменістан",
		TN: "Туніс",
		TO: "Тонга",
		TR: "Турцыя",
		TT: "Трынідад і Табага",
		TV: "Тувалу",
		TW: "Тайвань",
		TZ: "Танзанія",
		UA: "Украіна",
		UG: "Уганда",
		UM: "Малыя Аддаленыя астравы ЗША",
		US: "Злучаныя Штаты Амерыкі",
		UY: "Уругвай",
		UZ: "Узбекістан",
		VA: "Ватыкан",
		VC: "Сент-Вінсент і Грэнадзіны",
		VE: "Венесуэла",
		VG: "Брытанскія Віргінскія астравы",
		VI: "Амерыканскія Віргінскія астравы",
		VN: "В’етнам",
		VU: "Вануату",
		WF: "Уоліс і Футуна",
		WS: "Самоа",
		XK: "Косава",
		YE: "Емен",
		YT: "Маёта",
		ZA: "Паўднёваафрыканская Рэспубліка",
		ZM: "Замбія",
		ZW: "Зімбабв",
	}
}
