import { Alpha2 } from "./Alpha2"
import { Numeric } from "./Numeric"

export type Alpha3 = typeof Alpha3.types[number]

export namespace Alpha3 {
	export const types = [
		"ABW",
		"AFG",
		"AGO",
		"AIA",
		"ALA",
		"ALB",
		"AND",
		"ARE",
		"ARG",
		"ARM",
		"ASM",
		"ATA",
		"ATF",
		"ATG",
		"AUS",
		"AUT",
		"AZE",
		"BDI",
		"BEL",
		"BEN",
		"BES",
		"BFA",
		"BGD",
		"BGR",
		"BHR",
		"BHS",
		"BIH",
		"BLM",
		"BLR",
		"BLZ",
		"BMU",
		"BOL",
		"BRA",
		"BRB",
		"BRN",
		"BTN",
		"BVT",
		"BWA",
		"CAF",
		"CAN",
		"CCK",
		"CHE",
		"CHL",
		"CHN",
		"CIV",
		"CMR",
		"COD",
		"COG",
		"COK",
		"COL",
		"COM",
		"CPV",
		"CRI",
		"CUB",
		"CUW",
		"CXR",
		"CYM",
		"CYP",
		"CZE",
		"DEU",
		"DJI",
		"DMA",
		"DNK",
		"DOM",
		"DZA",
		"ECU",
		"EGY",
		"ERI",
		"ESH",
		"ESP",
		"EST",
		"ETH",
		"FIN",
		"FJI",
		"FLK",
		"FRA",
		"FRO",
		"FSM",
		"GAB",
		"GBR",
		"GEO",
		"GGY",
		"GHA",
		"GIB",
		"GIN",
		"GLP",
		"GMB",
		"GNB",
		"GNQ",
		"GRC",
		"GRD",
		"GRL",
		"GTM",
		"GUF",
		"GUM",
		"GUY",
		"HKG",
		"HMD",
		"HND",
		"HRV",
		"HTI",
		"HUN",
		"IDN",
		"IMN",
		"IND",
		"IOT",
		"IRL",
		"IRN",
		"IRQ",
		"ISL",
		"ISR",
		"ITA",
		"JAM",
		"JEY",
		"JOR",
		"JPN",
		"KAZ",
		"KEN",
		"KGZ",
		"KHM",
		"KIR",
		"KNA",
		"KOR",
		"KWT",
		"LAO",
		"LBN",
		"LBR",
		"LBY",
		"LCA",
		"LIE",
		"LKA",
		"LSO",
		"LTU",
		"LUX",
		"LVA",
		"MAC",
		"MAF",
		"MAR",
		"MCO",
		"MDA",
		"MDG",
		"MDV",
		"MEX",
		"MHL",
		"MKD",
		"MLI",
		"MLT",
		"MMR",
		"MNE",
		"MNG",
		"MNP",
		"MOZ",
		"MRT",
		"MSR",
		"MTQ",
		"MUS",
		"MWI",
		"MYS",
		"MYT",
		"NAM",
		"NCL",
		"NER",
		"NFK",
		"NGA",
		"NIC",
		"NIU",
		"NLD",
		"NOR",
		"NPL",
		"NRU",
		"NZL",
		"OMN",
		"PAK",
		"PAN",
		"PCN",
		"PER",
		"PHL",
		"PLW",
		"PNG",
		"POL",
		"PRI",
		"PRK",
		"PRT",
		"PRY",
		"PSE",
		"PYF",
		"QAT",
		"REU",
		"ROU",
		"RUS",
		"RWA",
		"SAU",
		"SDN",
		"SEN",
		"SGP",
		"SGS",
		"SHN",
		"SJM",
		"SLB",
		"SLE",
		"SLV",
		"SMR",
		"SOM",
		"SPM",
		"SRB",
		"SSD",
		"STP",
		"SUR",
		"SVK",
		"SVN",
		"SWE",
		"SWZ",
		"SXM",
		"SYC",
		"SYR",
		"TCA",
		"TCD",
		"TGO",
		"THA",
		"TJK",
		"TKL",
		"TKM",
		"TLS",
		"TON",
		"TTO",
		"TUN",
		"TUR",
		"TUV",
		"TWN",
		"TZA",
		"UGA",
		"UKR",
		"UMI",
		"URY",
		"USA",
		"UZB",
		"VAT",
		"VCT",
		"VEN",
		"VGB",
		"VIR",
		"VNM",
		"VUT",
		"WLF",
		"WSM",
		"XKX",
		"YEM",
		"ZAF",
		"ZMB",
		"ZWE",
	] as const
	export function is(value: any | Alpha3): value is Alpha3 {
		return typeof value == "string" && value.length == 3 && types.includes(value as Alpha3)
	}
	export function from(country: Alpha2 | Numeric): Alpha3 {
		return typeof country == "number" ? from(Alpha2.from(country)) : alpha2ToAlpha3[country]
	}
}

const alpha2ToAlpha3: Record<Alpha2, Alpha3> = {
	AF: "AFG",
	AX: "ALA",
	AL: "ALB",
	DZ: "DZA",
	AS: "ASM",
	AD: "AND",
	AO: "AGO",
	AI: "AIA",
	AQ: "ATA",
	AG: "ATG",
	AR: "ARG",
	AM: "ARM",
	AW: "ABW",
	AU: "AUS",
	AT: "AUT",
	AZ: "AZE",
	BS: "BHS",
	BH: "BHR",
	BD: "BGD",
	BB: "BRB",
	BY: "BLR",
	BE: "BEL",
	BZ: "BLZ",
	BJ: "BEN",
	BM: "BMU",
	BT: "BTN",
	BO: "BOL",
	BQ: "BES",
	BA: "BIH",
	BW: "BWA",
	BV: "BVT",
	BR: "BRA",
	IO: "IOT",
	BN: "BRN",
	BG: "BGR",
	BF: "BFA",
	BI: "BDI",
	CV: "CPV",
	KH: "KHM",
	CM: "CMR",
	CA: "CAN",
	KY: "CYM",
	CF: "CAF",
	TD: "TCD",
	CL: "CHL",
	CN: "CHN",
	CX: "CXR",
	CC: "CCK",
	CO: "COL",
	KM: "COM",
	CG: "COG",
	CD: "COD",
	CK: "COK",
	CR: "CRI",
	CI: "CIV",
	HR: "HRV",
	CU: "CUB",
	CW: "CUW",
	CY: "CYP",
	CZ: "CZE",
	DK: "DNK",
	DJ: "DJI",
	DM: "DMA",
	DO: "DOM",
	EC: "ECU",
	EG: "EGY",
	SV: "SLV",
	GQ: "GNQ",
	ER: "ERI",
	EE: "EST",
	SZ: "SWZ",
	ET: "ETH",
	FK: "FLK",
	FO: "FRO",
	FJ: "FJI",
	FI: "FIN",
	FR: "FRA",
	GF: "GUF",
	PF: "PYF",
	TF: "ATF",
	GA: "GAB",
	GM: "GMB",
	GE: "GEO",
	DE: "DEU",
	GH: "GHA",
	GI: "GIB",
	GR: "GRC",
	GL: "GRL",
	GD: "GRD",
	GP: "GLP",
	GU: "GUM",
	GT: "GTM",
	GG: "GGY",
	GN: "GIN",
	GW: "GNB",
	GY: "GUY",
	HT: "HTI",
	HM: "HMD",
	VA: "VAT",
	HN: "HND",
	HK: "HKG",
	HU: "HUN",
	IS: "ISL",
	IN: "IND",
	ID: "IDN",
	IR: "IRN",
	IQ: "IRQ",
	IE: "IRL",
	IM: "IMN",
	IL: "ISR",
	IT: "ITA",
	JM: "JAM",
	JP: "JPN",
	JE: "JEY",
	JO: "JOR",
	KZ: "KAZ",
	KE: "KEN",
	KI: "KIR",
	KP: "PRK",
	KR: "KOR",
	KW: "KWT",
	KG: "KGZ",
	LA: "LAO",
	LV: "LVA",
	LB: "LBN",
	LS: "LSO",
	LR: "LBR",
	LY: "LBY",
	LI: "LIE",
	LT: "LTU",
	LU: "LUX",
	MO: "MAC",
	MG: "MDG",
	MW: "MWI",
	MY: "MYS",
	MV: "MDV",
	ML: "MLI",
	MT: "MLT",
	MH: "MHL",
	MQ: "MTQ",
	MR: "MRT",
	MU: "MUS",
	YT: "MYT",
	MX: "MEX",
	FM: "FSM",
	MD: "MDA",
	MC: "MCO",
	MN: "MNG",
	ME: "MNE",
	MS: "MSR",
	MA: "MAR",
	MZ: "MOZ",
	MM: "MMR",
	NA: "NAM",
	NR: "NRU",
	NP: "NPL",
	NL: "NLD",
	NC: "NCL",
	NZ: "NZL",
	NI: "NIC",
	NE: "NER",
	NG: "NGA",
	NU: "NIU",
	NF: "NFK",
	MK: "MKD",
	MP: "MNP",
	NO: "NOR",
	OM: "OMN",
	PK: "PAK",
	PW: "PLW",
	PS: "PSE",
	PA: "PAN",
	PG: "PNG",
	PY: "PRY",
	PE: "PER",
	PH: "PHL",
	PN: "PCN",
	PL: "POL",
	PT: "PRT",
	PR: "PRI",
	QA: "QAT",
	RE: "REU",
	RO: "ROU",
	RU: "RUS",
	RW: "RWA",
	BL: "BLM",
	SH: "SHN",
	KN: "KNA",
	LC: "LCA",
	MF: "MAF",
	PM: "SPM",
	VC: "VCT",
	WS: "WSM",
	SM: "SMR",
	ST: "STP",
	SA: "SAU",
	SN: "SEN",
	RS: "SRB",
	SC: "SYC",
	SL: "SLE",
	SG: "SGP",
	SX: "SXM",
	SK: "SVK",
	SI: "SVN",
	SB: "SLB",
	SO: "SOM",
	ZA: "ZAF",
	GS: "SGS",
	SS: "SSD",
	ES: "ESP",
	LK: "LKA",
	SD: "SDN",
	SR: "SUR",
	SJ: "SJM",
	SE: "SWE",
	CH: "CHE",
	SY: "SYR",
	TW: "TWN",
	TJ: "TJK",
	TZ: "TZA",
	TH: "THA",
	TL: "TLS",
	TG: "TGO",
	TK: "TKL",
	TO: "TON",
	TT: "TTO",
	TN: "TUN",
	TR: "TUR",
	TM: "TKM",
	TC: "TCA",
	TV: "TUV",
	UG: "UGA",
	UA: "UKR",
	AE: "ARE",
	GB: "GBR",
	US: "USA",
	UM: "UMI",
	UY: "URY",
	UZ: "UZB",
	VU: "VUT",
	VE: "VEN",
	VN: "VNM",
	VG: "VGB",
	VI: "VIR",
	WF: "WLF",
	EH: "ESH",
	YE: "YEM",
	ZM: "ZMB",
	ZW: "ZWE",
	XK: "XKX",
}
