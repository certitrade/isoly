import { Alpha2 } from "./Alpha2"
import { Alpha3 } from "./Alpha3"

export type Numeric = typeof Numeric.types[number]

export namespace Numeric {
	export const types = [
		4, 8, 10, 12, 16, 20, 24, 28, 31, 32, 36, 40, 44, 48, 50, 51, 52, 56, 60, 64, 68, 70, 72, 74, 76, 84, 86, 90, 92,
		96, 100, 104, 108, 112, 116, 120, 124, 132, 136, 140, 144, 148, 152, 156, 158, 162, 166, 170, 174, 175, 178, 180,
		184, 188, 191, 192, 196, 203, 204, 208, 212, 214, 218, 222, 226, 231, 232, 233, 234, 238, 239, 242, 246, 248, 250,
		254, 258, 260, 262, 266, 268, 270, 275, 276, 280, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 334,
		336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 398, 400, 404, 408, 410, 414, 417, 418,
		422, 426, 428, 430, 434, 438, 440, 442, 446, 450, 454, 458, 462, 466, 470, 474, 478, 480, 484, 492, 496, 498, 499,
		500, 504, 508, 512, 516, 520, 524, 528, 531, 533, 534, 535, 540, 548, 554, 558, 562, 566, 570, 574, 578, 580, 581,
		583, 584, 585, 586, 591, 598, 600, 604, 608, 612, 616, 620, 624, 626, 630, 634, 638, 642, 643, 646, 652, 654, 659,
		660, 662, 663, 666, 670, 674, 678, 682, 686, 688, 690, 694, 702, 703, 704, 705, 706, 710, 716, 724, 728, 729, 732,
		740, 744, 748, 752, 756, 760, 762, 764, 768, 772, 776, 780, 784, 788, 792, 795, 796, 798, 800, 804, 807, 818, 826,
		831, 832, 833, 834, 840, 850, 854, 858, 860, 862, 876, 882, 887, 894, 926,
	] as const
	export function is(value: any | Numeric): value is Numeric {
		return (
			typeof value == "number" &&
			value >= 0 &&
			value <= 999 &&
			Number.isInteger(value) &&
			types.includes(value as Numeric)
		)
	}
	export function from(country: Alpha2 | Alpha3): Numeric {
		return country.length == 2 ? alpha2ToNumeric[country as Alpha2] : from(Alpha2.from(country as Alpha3))
	}
}

const alpha2ToNumeric: Record<Alpha2, Numeric> = {
	AF: 4,
	AX: 248,
	AL: 8,
	DZ: 12,
	AS: 16,
	AD: 20,
	AO: 24,
	AI: 660,
	AQ: 10,
	AG: 28,
	AR: 32,
	AM: 51,
	AW: 533,
	AU: 36,
	AT: 40,
	AZ: 31,
	BS: 44,
	BH: 48,
	BD: 50,
	BB: 52,
	BY: 112,
	BE: 56,
	BZ: 84,
	BJ: 204,
	BM: 60,
	BT: 64,
	BO: 68,
	BQ: 535,
	BA: 70,
	BW: 72,
	BV: 74,
	BR: 76,
	IO: 86,
	BN: 96,
	BG: 100,
	BF: 854,
	BI: 108,
	CV: 132,
	KH: 116,
	CM: 120,
	CA: 124,
	KY: 136,
	CF: 140,
	TD: 148,
	CL: 152,
	CN: 156,
	CX: 162,
	CC: 166,
	CO: 170,
	KM: 174,
	CG: 178,
	CD: 180,
	CK: 184,
	CR: 188,
	CI: 384,
	HR: 191,
	CU: 192,
	CW: 531,
	CY: 196,
	CZ: 203,
	DK: 208,
	DJ: 262,
	DM: 212,
	DO: 214,
	EC: 218,
	EG: 818,
	SV: 222,
	GQ: 226,
	ER: 232,
	EE: 233,
	SZ: 748,
	ET: 231,
	FK: 238,
	FO: 234,
	FJ: 242,
	FI: 246,
	FR: 250,
	GF: 254,
	PF: 258,
	TF: 260,
	GA: 266,
	GM: 270,
	GE: 268,
	DE: 276,
	GH: 288,
	GI: 292,
	GR: 300,
	GL: 304,
	GD: 308,
	GP: 312,
	GU: 316,
	GT: 320,
	GG: 831,
	GN: 324,
	GW: 624,
	GY: 328,
	HT: 332,
	HM: 334,
	VA: 336,
	HN: 340,
	HK: 344,
	HU: 348,
	IS: 352,
	IN: 356,
	ID: 360,
	IR: 364,
	IQ: 368,
	IE: 372,
	IM: 833,
	IL: 376,
	IT: 380,
	JM: 388,
	JP: 392,
	JE: 832,
	JO: 400,
	KZ: 398,
	KE: 404,
	KI: 296,
	KP: 408,
	KR: 410,
	KW: 414,
	KG: 417,
	LA: 418,
	LV: 428,
	LB: 422,
	LS: 426,
	LR: 430,
	LY: 434,
	LI: 438,
	LT: 440,
	LU: 442,
	MO: 446,
	MG: 450,
	MW: 454,
	MY: 458,
	MV: 462,
	ML: 466,
	MT: 470,
	MH: 584,
	MQ: 474,
	MR: 478,
	MU: 480,
	YT: 175,
	MX: 484,
	FM: 583,
	MD: 498,
	MC: 492,
	MN: 496,
	ME: 499,
	MS: 500,
	MA: 504,
	MZ: 508,
	MM: 104,
	NA: 516,
	NR: 520,
	NP: 524,
	NL: 528,
	NC: 540,
	NZ: 554,
	NI: 558,
	NE: 562,
	NG: 566,
	NU: 570,
	NF: 574,
	MK: 807,
	MP: 580,
	NO: 578,
	OM: 512,
	PK: 586,
	PW: 585,
	PS: 275,
	PA: 591,
	PG: 598,
	PY: 600,
	PE: 604,
	PH: 608,
	PN: 612,
	PL: 616,
	PT: 620,
	PR: 630,
	QA: 634,
	RE: 638,
	RO: 642,
	RU: 643,
	RW: 646,
	BL: 652,
	SH: 654,
	KN: 659,
	LC: 662,
	MF: 663,
	PM: 666,
	VC: 670,
	WS: 882,
	SM: 674,
	ST: 678,
	SA: 682,
	SN: 686,
	RS: 688,
	SC: 690,
	SL: 694,
	SG: 702,
	SX: 534,
	SK: 703,
	SI: 705,
	SB: 90,
	SO: 706,
	ZA: 710,
	GS: 239,
	SS: 728,
	ES: 724,
	LK: 144,
	SD: 729,
	SR: 740,
	SJ: 744,
	SE: 752,
	CH: 756,
	SY: 760,
	TW: 158,
	TJ: 762,
	TZ: 834,
	TH: 764,
	TL: 626,
	TG: 768,
	TK: 772,
	TO: 776,
	TT: 780,
	TN: 788,
	TR: 792,
	TM: 795,
	TC: 796,
	TV: 798,
	UG: 800,
	UA: 804,
	AE: 784,
	GB: 826,
	US: 840,
	UM: 581,
	UY: 858,
	UZ: 860,
	VU: 548,
	VE: 862,
	VN: 704,
	VG: 92,
	VI: 850,
	WF: 876,
	EH: 732,
	YE: 887,
	ZM: 894,
	ZW: 716,
	XK: 926,
}
