type LocaleDateOrder = "YMD" | "DMY" | "MDY"
export const locales: Record<string, { order: LocaleDateOrder; divider: string }> = {
	"af-ZA": { order: "YMD", divider: "-" },
	"-ET": { order: "DMY", divider: "/" },
	"arn-CL": { order: "DMY", divider: "/" },
	"az-az": { order: "DMY", divider: "." },
	"az-Cyrl-AZ": { order: "DMY", divider: "." },
	"az-Latn-AZ": { order: "DMY", divider: "." },
	"ba-RU": { order: "DMY", divider: "/" },
	"be-BY": { order: "DMY", divider: "." },
	"bg-BG": { order: "DMY", divider: "." },
	"bo-CN": { order: "YMD", divider: "-" },
	"br-FR": { order: "DMY", divider: "/" },
	"bs-Cyrl-BA": { order: "DMY", divider: "." },
	"bs-Latn-BA": { order: "DMY", divider: "." },
	"ca-ES": { order: "DMY", divider: "/" },
	"co-FR": { order: "DMY", divider: "/" },
	"cs-CZ": { order: "DMY", divider: ". " },
	"cy-GB": { order: "DMY", divider: "/" },
	"da-DK": { order: "DMY", divider: "." },
	"de-AT": { order: "DMY", divider: "." },
	"de-CH": { order: "DMY", divider: "." },
	"de-DE": { order: "DMY", divider: "." },
	"de-LI": { order: "DMY", divider: "." },
	"de-LU": { order: "DMY", divider: "." },
	// "dsb-DE": "DD. MM YYYY",
	"dv-MV": { order: "DMY", divider: "/" },
	"el-CY": { order: "DMY", divider: "/" },
	"el-GR": { order: "DMY", divider: "/" },
	"en-0DD": { order: "MDY", divider: "/" },
	"en-AU": { order: "DMY", divider: "/" },
	"en-BZ": { order: "DMY", divider: "/" },
	"en-CA": { order: "YMD", divider: "-" },
	"en-cb": { order: "MDY", divider: "/" },
	"en-GB": { order: "DMY", divider: "/" },
	"en-IE": { order: "DMY", divider: "/" },
	"en-IN": { order: "DMY", divider: "/" },
	"en-JM": { order: "DMY", divider: "/" },
	"en-MT": { order: "DMY", divider: "/" },
	"en-MY": { order: "DMY", divider: "/" },
	"en-NZ": { order: "DMY", divider: "/" },
	"en-PH": { order: "DMY", divider: "/" },
	"en-SG": { order: "DMY", divider: "/" },
	"en-TT": { order: "DMY", divider: "/" },
	"en-US": { order: "MDY", divider: "/" },
	"en-ZA": { order: "YMD", divider: "/" },
	"en-ZW": { order: "DMY", divider: "/" },
	"sv-SE": { order: "YMD", divider: "-" },
	"es-AR": { order: "DMY", divider: "/" },
	"es-BO": { order: "DMY", divider: "/" },
	"es-CL": { order: "DMY", divider: "-" },
	"es-CO": { order: "DMY", divider: "/" },
	"es-CR": { order: "DMY", divider: "/" },
	"es-DO": { order: "DMY", divider: "/" },
	"es-EC": { order: "DMY", divider: "/" },
	"es-ES": { order: "DMY", divider: "/" },
	"es-GT": { order: "DMY", divider: "/" },
	"es-HN": { order: "DMY", divider: "/" },
	"es-MX": { order: "DMY", divider: "/" },
	"es-NI": { order: "DMY", divider: "/" },
	"es-PA": { order: "MDY", divider: "/" },
	"es-PE": { order: "DMY", divider: "/" },
	"es-PR": { order: "MDY", divider: "/" },
	"es-PY": { order: "DMY", divider: "/" },
	"es-SV": { order: "DMY", divider: "/" },
	"es-US": { order: "DMY", divider: "/" },
	"es-UY": { order: "DMY", divider: "/" },
	"es-VE": { order: "DMY", divider: "/" },
	"et-EE": { order: "DMY", divider: "." },
	"eu-ES": { order: "YMD", divider: "/" },
	"fi-FI": { order: "DMY", divider: "." },
	"fil-PH": { order: "MDY", divider: "/" },
	"fo-FO": { order: "DMY", divider: "." },
	"fr-BE": { order: "DMY", divider: "/" },
	"fr-CA": { order: "YMD", divider: "-" },
	"fr-CH": { order: "DMY", divider: "." },
	"fr-FR": { order: "DMY", divider: "/" },
	"fr-LU": { order: "DMY", divider: "/" },
	"fr-MC": { order: "DMY", divider: "/" },
	"fy-NL": { order: "DMY", divider: "-" },
	"ga-IE": { order: "DMY", divider: "/" },
	"gd-GB": { order: "DMY", divider: "/" },
	"gd-ie": { order: "DMY", divider: "/" },
	// "gl-ES": "01:00:00, DD/MM/YYYY",
	"gsw-FR": { order: "DMY", divider: "." },
	"gu-IN": { order: "DMY", divider: "/" },
	"ha-Latn-NG": { order: "YMD", divider: "-" },
	"he-IL": { order: "DMY", divider: "." },
	"hi-IN": { order: "DMY", divider: "/" },
	"hr-BA": { order: "DMY", divider: ". " },
	"hr-HR": { order: "DMY", divider: ". " },
	// "hsb-DE": "DD. MM YYYY",
	"hu-HU": { order: "YMD", divider: ". " },
	"hy-": { order: "DMY", divider: "." },
	"id-ID": { order: "DMY", divider: "/" },
	"ig-NG": { order: "DMY", divider: "/" },
	"ii-CN": { order: "YMD", divider: "-" },
	"in-ID": { order: "DMY", divider: "/" },
	"is-IS": { order: "DMY", divider: "." },
	"it-CH": { order: "DMY", divider: "." },
	"it-IT": { order: "DMY", divider: "/" },
	"iu-Cans-CA": { order: "DMY", divider: "/" },
	"iu-Latn-CA": { order: "DMY", divider: "/" },
	"iw-IL": { order: "DMY", divider: "." },
	"ja-JP": { order: "YMD", divider: "/" },
	"ka-GE": { order: "DMY", divider: "." },
	"kk-KZ": { order: "DMY", divider: "." },
	"kl-GL": { order: "YMD", divider: "-" },
	"km-KH": { order: "DMY", divider: "/" },
	"kn-IN": { order: "DMY", divider: "/" },
	"kok-IN": { order: "DMY", divider: "-" },
	"ko-KR": { order: "YMD", divider: ". " },
	"lb-LU": { order: "DMY", divider: "." },
	"lo-LA": { order: "DMY", divider: "/" },
	"lt-LT": { order: "YMD", divider: "-" },
	"lv-LV": { order: "DMY", divider: "." },
	"mi-NZ": { order: "DMY", divider: "-" },
	"mk-MK": { order: "DMY", divider: "." },
	"ml-IN": { order: "DMY", divider: "/" },
	"mn-MN": { order: "YMD", divider: "." },
	"mn-Mong-CN": { order: "YMD", divider: "." },
	"moh-CA": { order: "DMY", divider: "/" },
	"ms-BN": { order: "DMY", divider: "/" },
	"ms-MY": { order: "DMY", divider: "/" },
	"mt-MT": { order: "DMY", divider: "/" },
	"nb-NO": { order: "DMY", divider: "." },
	"nl-BE": { order: "DMY", divider: "/" },
	"nl-NL": { order: "DMY", divider: "-" },
	"nn-NO": { order: "DMY", divider: "." },
	"no-no": { order: "DMY", divider: "." },
	"nso-ZA": { order: "DMY", divider: "/" },
	"oc-FR": { order: "DMY", divider: "/" },
	"or-IN": { order: "MDY", divider: "/" },
	"pa-IN": { order: "DMY", divider: "/" },
	"pl-PL": { order: "DMY", divider: "." },
	"pt-BR": { order: "DMY", divider: "/" },
	"pt-PT": { order: "DMY", divider: "/" },
	"qut-GT": { order: "DMY", divider: "/" },
	"quz-BO": { order: "DMY", divider: "/" },
	"quz-EC": { order: "DMY", divider: "/" },
	"quz-PE": { order: "DMY", divider: "/" },
	"rm-CH": { order: "DMY", divider: "-" },
	"ro-mo": { order: "DMY", divider: "." },
	"ro-RO": { order: "DMY", divider: "." },
	"ru-mo": { order: "DMY", divider: "." },
	"ru-RU": { order: "DMY", divider: "." },
	"rw-RW": { order: "YMD", divider: "-" },
	"sah-RU": { order: "YMD", divider: "-" },
	"se-FI": { order: "DMY", divider: "." },
	"se-NO": { order: "YMD", divider: "-" },
	"se-SE": { order: "YMD", divider: "-" },
	"si-LK": { order: "YMD", divider: "-" },
	"sk-SK": { order: "DMY", divider: ". " },
	"sl-SI": { order: "DMY", divider: ". " },
	"sma-NO": { order: "DMY", divider: "/" },
	"sma-SE": { order: "DMY", divider: "/" },
	"smj-NO": { order: "DMY", divider: "/" },
	"smj-SE": { order: "DMY", divider: "/" },
	"smn-FI": { order: "DMY", divider: "." },
	"sms-FI": { order: "DMY", divider: "/" },
	"sq-AL": { order: "DMY", divider: "." },
	"sr-BA": { order: "DMY", divider: "." },
	"sr-CS": { order: "DMY", divider: "." },
	"sr-Cyrl-BA": { order: "DMY", divider: "." },
	"sr-Cyrl-CS": { order: "DMY", divider: "." },
	"sr-Cyrl-ME": { order: "DMY", divider: "." },
	"sr-Cyrl-RS": { order: "DMY", divider: "." },
	"sr-Latn-BA": { order: "DMY", divider: "." },
	"sr-Latn-CS": { order: "DMY", divider: "." },
	"sr-Latn-ME": { order: "DMY", divider: "." },
	"sr-Latn-RS": { order: "DMY", divider: "." },
	"sr-ME": { order: "DMY", divider: "." },
	"sr-RS": { order: "DMY", divider: "." },
	"sr-sp": { order: "DMY", divider: "." },
	"sv-FI": { order: "YMD", divider: "-" },
	"sw-KE": { order: "DMY", divider: "/" },
	"syr-SY": { order: "DMY", divider: "/" },
	"ta-IN": { order: "DMY", divider: "/" },
	"te-IN": { order: "DMY", divider: "-" },
	"tg-Cyrl-TJ": { order: "DMY", divider: "/" },
	"tk-TM": { order: "DMY", divider: "." },
	"tn-ZA": { order: "DMY", divider: "/" },
	"tr-TR": { order: "DMY", divider: "." },
	"tt-RU": { order: "DMY", divider: "." },
	"tzm-Latn-DZ": { order: "DMY", divider: "/" },
	"ug-CN": { order: "YMD", divider: "-" },
	"uk-UA": { order: "DMY", divider: "." },
	"ur-PK": { order: "DMY", divider: "/" },
	"uz-Cyrl-UZ": { order: "DMY", divider: "/" },
	"uz-Latn-UZ": { order: "DMY", divider: "/" },
	"uz-uz": { order: "DMY", divider: "/" },
	// "vi-VN": "01:00:00, DD/MM/YYYY",
	"wo-SN": { order: "DMY", divider: "-" },
	"xh-ZA": { order: "YMD", divider: "-" },
	"yo-NG": { order: "DMY", divider: " " },
	"zh-CN": { order: "YMD", divider: "/" },
	"zh-HK": { order: "DMY", divider: "/" },
	"zh-MO": { order: "DMY", divider: "/" },
	// "zh-SG": "YYYY年MM月DD日",
	"zh-TW": { order: "YMD", divider: "/" },
	"zu-ZA": { order: "YMD", divider: "-" },
}
