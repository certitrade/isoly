import { isly } from "isly"
import type { Currency } from "."

export type Code = string

export namespace Code {
	export const values = [
		"008",
		"012",
		"032",
		"036",
		"044",
		"048",
		"050",
		"051",
		"052",
		"060",
		"064",
		"068",
		"072",
		"084",
		"090",
		"096",
		"104",
		"108",
		"116",
		"124",
		"132",
		"136",
		"144",
		"152",
		"156",
		"170",
		"174",
		"188",
		"191",
		"192",
		"203",
		"208",
		"214",
		"222",
		"230",
		"232",
		"238",
		"242",
		"262",
		"270",
		"292",
		"320",
		"324",
		"328",
		"332",
		"340",
		"344",
		"348",
		"352",
		"356",
		"360",
		"364",
		"368",
		"376",
		"388",
		"392",
		"398",
		"400",
		"404",
		"408",
		"410",
		"414",
		"417",
		"418",
		"422",
		"426",
		"430",
		"434",
		"446",
		"454",
		"458",
		"462",
		"480",
		"484",
		"496",
		"498",
		"504",
		"512",
		"516",
		"524",
		"532",
		"533",
		"548",
		"554",
		"558",
		"566",
		"578",
		"586",
		"590",
		"598",
		"600",
		"604",
		"608",
		"634",
		"643",
		"646",
		"654",
		"682",
		"690",
		"694",
		"702",
		"704",
		"706",
		"710",
		"728",
		"748",
		"752",
		"756",
		"760",
		"764",
		"776",
		"780",
		"784",
		"788",
		"800",
		"807",
		"818",
		"826",
		"834",
		"840",
		"858",
		"860",
		"882",
		"886",
		"901",
		"927",
		"928",
		"929",
		"930",
		"931",
		"932",
		"933",
		"934",
		"936",
		"938",
		"940",
		"941",
		"943",
		"944",
		"946",
		"947",
		"948",
		"949",
		"950",
		"951",
		"952",
		"953",
		"955",
		"956",
		"957",
		"958",
		"959",
		"960",
		"961",
		"962",
		"963",
		"964",
		"965",
		"967",
		"968",
		"969",
		"970",
		"971",
		"972",
		"973",
		"975",
		"976",
		"977",
		"978",
		"979",
		"980",
		"981",
		"984",
		"985",
		"986",
		"990",
		"994",
		"997",
		"999",
	] as const
	export const { type, is, flawed } = isly
		.string<Code>("value", ...values)
		.rename("isoly.CurrencyCode")
		.bind()
	export function from(currency: Currency): Code {
		return {
			ALL: "008",
			DZD: "012",
			ARS: "032",
			AUD: "036",
			BSD: "044",
			BHD: "048",
			BDT: "050",
			AMD: "051",
			BBD: "052",
			BMD: "060",
			BTN: "064",
			BOB: "068",
			BWP: "072",
			BZD: "084",
			SBD: "090",
			BND: "096",
			MMK: "104",
			BIF: "108",
			KHR: "116",
			CAD: "124",
			CVE: "132",
			KYD: "136",
			LKR: "144",
			CLP: "152",
			CNY: "156",
			COP: "170",
			KMF: "174",
			CRC: "188",
			HRK: "191",
			CUP: "192",
			CZK: "203",
			DKK: "208",
			DOP: "214",
			SVC: "222",
			ETB: "230",
			ERN: "232",
			FKP: "238",
			FJD: "242",
			DJF: "262",
			GMD: "270",
			GIP: "292",
			GTQ: "320",
			GNF: "324",
			GYD: "328",
			HTG: "332",
			HNL: "340",
			HKD: "344",
			HUF: "348",
			ISK: "352",
			INR: "356",
			IDR: "360",
			IRR: "364",
			IQD: "368",
			ILS: "376",
			JMD: "388",
			JPY: "392",
			KZT: "398",
			JOD: "400",
			KES: "404",
			KPW: "408",
			KRW: "410",
			KWD: "414",
			KGS: "417",
			LAK: "418",
			LBP: "422",
			LSL: "426",
			LRD: "430",
			LYD: "434",
			MOP: "446",
			MWK: "454",
			MYR: "458",
			MVR: "462",
			MUR: "480",
			MXN: "484",
			MNT: "496",
			MDL: "498",
			MAD: "504",
			OMR: "512",
			NAD: "516",
			NPR: "524",
			ANG: "532",
			AWG: "533",
			VUV: "548",
			NZD: "554",
			NIO: "558",
			NGN: "566",
			NOK: "578",
			PKR: "586",
			PAB: "590",
			PGK: "598",
			PYG: "600",
			PEN: "604",
			PHP: "608",
			QAR: "634",
			RUB: "643",
			RWF: "646",
			SHP: "654",
			SAR: "682",
			SCR: "690",
			SLL: "694",
			SGD: "702",
			VND: "704",
			SOS: "706",
			ZAR: "710",
			SSP: "728",
			SZL: "748",
			SEK: "752",
			CHF: "756",
			SYP: "760",
			THB: "764",
			TOP: "776",
			TTD: "780",
			AED: "784",
			TND: "788",
			UGX: "800",
			MKD: "807",
			EGP: "818",
			GBP: "826",
			TZS: "834",
			USD: "840",
			UYU: "858",
			UZS: "860",
			WST: "882",
			YER: "886",
			TWD: "901",
			UYW: "927",
			VES: "928",
			MRU: "929",
			STN: "930",
			CUC: "931",
			ZWL: "932",
			BYN: "933",
			TMT: "934",
			GHS: "936",
			SDG: "938",
			UYI: "940",
			RSD: "941",
			MZN: "943",
			AZN: "944",
			RON: "946",
			CHE: "947",
			CHW: "948",
			TRY: "949",
			XAF: "950",
			XCD: "951",
			XOF: "952",
			XPF: "953",
			XBA: "955",
			XBB: "956",
			XBC: "957",
			XBD: "958",
			XAU: "959",
			XDR: "960",
			XAG: "961",
			XPT: "962",
			XTS: "963",
			XPD: "964",
			XUA: "965",
			ZMW: "967",
			SRD: "968",
			MGA: "969",
			COU: "970",
			AFN: "971",
			TJS: "972",
			AOA: "973",
			BGN: "975",
			CDF: "976",
			BAM: "977",
			EUR: "978",
			MXV: "979",
			UAH: "980",
			GEL: "981",
			BOV: "984",
			PLN: "985",
			BRL: "986",
			CLF: "990",
			XSU: "994",
			USN: "997",
			XXX: "999",
		}[currency] as Code
	}
	export function to(code: Code): Currency {
		return {
			"784": "AED",
			"971": "AFN",
			"008": "ALL",
			"051": "AMD",
			"532": "ANG",
			"973": "AOA",
			"032": "ARS",
			"036": "AUD",
			"533": "AWG",
			"944": "AZN",
			"977": "BAM",
			"052": "BBD",
			"050": "BDT",
			"975": "BGN",
			"048": "BHD",
			"108": "BIF",
			"060": "BMD",
			"096": "BND",
			"068": "BOB",
			"984": "BOV",
			"986": "BRL",
			"044": "BSD",
			"064": "BTN",
			"072": "BWP",
			"933": "BYN",
			"084": "BZD",
			"124": "CAD",
			"976": "CDF",
			"947": "CHE",
			"756": "CHF",
			"948": "CHW",
			"990": "CLF",
			"152": "CLP",
			"156": "CNY",
			"170": "COP",
			"970": "COU",
			"188": "CRC",
			"931": "CUC",
			"192": "CUP",
			"132": "CVE",
			"203": "CZK",
			"262": "DJF",
			"208": "DKK",
			"214": "DOP",
			"012": "DZD",
			"818": "EGP",
			"232": "ERN",
			"230": "ETB",
			"978": "EUR",
			"242": "FJD",
			"238": "FKP",
			"826": "GBP",
			"981": "GEL",
			"936": "GHS",
			"292": "GIP",
			"270": "GMD",
			"324": "GNF",
			"320": "GTQ",
			"328": "GYD",
			"344": "HKD",
			"340": "HNL",
			"191": "HRK",
			"332": "HTG",
			"348": "HUF",
			"360": "IDR",
			"376": "ILS",
			"356": "INR",
			"368": "IQD",
			"364": "IRR",
			"352": "ISK",
			"388": "JMD",
			"400": "JOD",
			"392": "JPY",
			"404": "KES",
			"417": "KGS",
			"116": "KHR",
			"174": "KMF",
			"408": "KPW",
			"410": "KRW",
			"414": "KWD",
			"136": "KYD",
			"398": "KZT",
			"418": "LAK",
			"422": "LBP",
			"144": "LKR",
			"430": "LRD",
			"426": "LSL",
			"434": "LYD",
			"504": "MAD",
			"498": "MDL",
			"969": "MGA",
			"807": "MKD",
			"104": "MMK",
			"496": "MNT",
			"446": "MOP",
			"929": "MRU",
			"480": "MUR",
			"462": "MVR",
			"454": "MWK",
			"484": "MXN",
			"979": "MXV",
			"458": "MYR",
			"943": "MZN",
			"516": "NAD",
			"566": "NGN",
			"558": "NIO",
			"578": "NOK",
			"524": "NPR",
			"554": "NZD",
			"512": "OMR",
			"590": "PAB",
			"604": "PEN",
			"598": "PGK",
			"608": "PHP",
			"586": "PKR",
			"985": "PLN",
			"600": "PYG",
			"634": "QAR",
			"946": "RON",
			"941": "RSD",
			"643": "RUB",
			"646": "RWF",
			"682": "SAR",
			"090": "SBD",
			"690": "SCR",
			"938": "SDG",
			"752": "SEK",
			"702": "SGD",
			"654": "SHP",
			"694": "SLL",
			"706": "SOS",
			"968": "SRD",
			"728": "SSP",
			"930": "STN",
			"222": "SVC",
			"760": "SYP",
			"748": "SZL",
			"764": "THB",
			"972": "TJS",
			"934": "TMT",
			"788": "TND",
			"776": "TOP",
			"949": "TRY",
			"780": "TTD",
			"901": "TWD",
			"834": "TZS",
			"980": "UAH",
			"800": "UGX",
			"840": "USD",
			"997": "USN",
			"940": "UYI",
			"858": "UYU",
			"927": "UYW",
			"860": "UZS",
			"928": "VES",
			"704": "VND",
			"548": "VUV",
			"882": "WST",
			"950": "XAF",
			"961": "XAG",
			"959": "XAU",
			"955": "XBA",
			"956": "XBB",
			"957": "XBC",
			"958": "XBD",
			"951": "XCD",
			"960": "XDR",
			"952": "XOF",
			"964": "XPD",
			"953": "XPF",
			"962": "XPT",
			"994": "XSU",
			"963": "XTS",
			"965": "XUA",
			"999": "XXX",
			"886": "YER",
			"710": "ZAR",
			"967": "ZMW",
			"932": "ZWL",
		}[code] as Currency
	}
}
