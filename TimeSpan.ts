import { DateSpan } from "./DateSpan"

export interface TimeSpan extends DateSpan {
	hours?: number
	minutes?: number
	seconds?: number
	milliseconds?: number
}

export namespace TimeSpan {
	export function is(value: TimeSpan | any): value is TimeSpan {
		return (
			typeof value == "object" &&
			(typeof value.years == "number" || value.years == undefined) &&
			(typeof value.months == "number" || value.months == undefined) &&
			(typeof value.days == "number" || value.days == undefined) &&
			(typeof value.hours == "number" || value.hours == undefined) &&
			(typeof value.minutes == "number" || value.minutes == undefined) &&
			(typeof value.seconds == "number" || value.seconds == undefined) &&
			(typeof value.milliseconds == "number" || value.milliseconds == undefined) &&
			(typeof value.years == "number" ||
				typeof value.months == "number" ||
				typeof value.days == "number" ||
				typeof value.hours == "number" ||
				typeof value.minutes == "number" ||
				typeof value.seconds == "number" ||
				typeof value.milliseconds == "number")
		)
	}
	export function toHours(value: TimeSpan, round?: Round): number {
		const result =
			(dateToMilliseconds(value) + (value.milliseconds ?? 0)) / (60 * 60 * 1000) +
			(value.seconds ?? 0) / (60 * 60) +
			(value.minutes ?? 0) / 60 +
			(value.hours ?? 0)
		return performRound(result, round)
	}
	export function toMinutes(value: TimeSpan, round?: Round): number {
		const result =
			(dateToMilliseconds(value) + (value.milliseconds ?? 0)) / (60 * 1000) +
			(value.seconds ?? 0) / 60 +
			(value.minutes ?? 0) +
			(value.hours ?? 0) * 60
		return performRound(result, round)
	}
	export function toSeconds(value: TimeSpan, round?: Round): number {
		const result =
			(dateToMilliseconds(value) + (value.milliseconds ?? 0)) / 1000 +
			(value.seconds ?? 0) +
			(value.minutes ?? 0) * 60 +
			(value.hours ?? 0) * 60 * 60
		return performRound(result, round)
	}
	export function toMilliseconds(value: TimeSpan, round?: Round): number {
		const result =
			dateToMilliseconds(value) +
			(value.milliseconds ?? 0) +
			(value.seconds ?? 0) * 1000 +
			(value.minutes ?? 0) * 60 * 1000 +
			(value.hours ?? 0) * 60 * 60 * 1000
		return performRound(result, round)
	}
	export function add(...addends: TimeSpan[]): TimeSpan {
		return addends.reduce(
			(result, addend) =>
				Object.entries(addend).reduce(
					(result, [key, addend]: [keyof TimeSpan, number]) =>
						(({ [key]: value, ...result }) => sum(result, from[key]((value ?? 0) + addend)))(result),
					result
				),
			{}
		)
	}
	export function subtract(minuend: TimeSpan, ...subtrahends: TimeSpan[]): TimeSpan {
		return subtrahends.reduce(
			(result, subtrahend) =>
				Object.entries(subtrahend).reduce(
					(result, [key, subtrahend]: [keyof TimeSpan, number]) =>
						(({ [key]: value, ...result }) => sum(result, from[key]((value ?? 0) - subtrahend)))(result),
					result
				),
			minuend
		)
	}
	function sum(...addends: TimeSpan[]): TimeSpan {
		return addends.reduce(
			(result, addend) =>
				Object.entries(addend).reduce((result, [key, addend]: [keyof TimeSpan, number]) => {
					const sum = (result[key] ?? 0) + addend
					return !sum
						? (({ [key]: _, ...result }) => result)(result)
						: Object.assign(result, { [key]: (result[key] ?? 0) + addend })
				}, result),
			{}
		)
	}
	export function fromHours(
		value: number,
		options?: { precision?: "hours" | "minutes" | "seconds" | "milliseconds" }
	): TimeSpan {
		let result: ReturnType<typeof fromHours>
		const precision = options?.precision ?? "milliseconds"
		const hours = Math.trunc(value)
		const remainder = +(value % 1).toFixed(9)
		if (precision != "hours") {
			result = fromMinutes(remainder * 60, { precision })
			if (hours)
				result.hours = hours
		} else
			result = sum({ hours: hours + Math.round(remainder) })
		return result
	}
	export function fromMinutes(
		value: number,
		options?: { precision?: "minutes" | "seconds" | "milliseconds" }
	): TimeSpan {
		let result: ReturnType<typeof fromMinutes>
		const precision = options?.precision ?? "milliseconds"
		const minutes = Math.trunc(value)
		const remainder = +(value % 1).toFixed(7)
		if (precision != "minutes")
			result = sum(
				{ minutes: minutes % 60 },
				fromSeconds(remainder * 60, { precision }),
				minutes < 60 ? {} : fromHours(Math.trunc(minutes / 60), { precision: "hours" })
			)
		else {
			const rounded = minutes + Math.round(remainder)
			result = sum({ minutes: rounded % 60 }, fromHours(Math.trunc(rounded / 60), { precision: "hours" }))
		}
		return result
	}
	export function fromSeconds(value: number, options?: { precision?: "seconds" | "milliseconds" }): TimeSpan {
		let result: ReturnType<typeof fromSeconds>
		const precision = options?.precision ?? "milliseconds"
		const seconds = Math.trunc(value)
		const remainder = +(value % 1).toFixed(5)
		if (precision != "seconds")
			result = sum(
				{ seconds: seconds % 60 },
				fromMilliseconds(remainder * 1000),
				seconds < 60 ? {} : fromMinutes(Math.trunc(seconds / 60), { precision: "minutes" })
			)
		else {
			const rounded = seconds + Math.round(remainder)
			result = sum({ seconds: rounded % 60 }, fromMinutes(Math.trunc(rounded / 60), { precision: "minutes" }))
		}
		return result
	}
	export function fromMilliseconds(value: number): TimeSpan {
		const rounded = Math.round(value)
		return sum(
			{ milliseconds: rounded % 1000 },
			rounded < 1000 ? {} : fromSeconds(Math.trunc(rounded / 1000), { precision: "seconds" })
		)
	}
	const from = {
		years: (value: number) => ({ ...(value && { years: value }) }),
		months: (value: number) => ({ ...(value && { months: value }) }),
		days: (value: number) => ({ ...(value && { days: value }) }),
		hours: fromHours,
		minutes: fromMinutes,
		seconds: fromSeconds,
		milliseconds: fromMilliseconds,
	}
}

function dateToMilliseconds(span: TimeSpan): number {
	const now = Date.UTC(0, 0)
	const date = new Date(now)
	const future = Date.UTC(
		date.getUTCFullYear() + (span.years ?? 0),
		date.getUTCMonth() + (span.months ?? 0),
		date.getUTCDate() + (span.days ?? 0),
		date.getUTCHours(),
		date.getUTCMinutes(),
		date.getUTCSeconds(),
		date.getUTCMilliseconds()
	)
	return future.valueOf() - date.valueOf()
}

type Round = "round" | "floor" | "ceiling"
function performRound(value: number, round?: Round): number {
	return !round
		? value
		: round == "ceiling"
		? Math.ceil(value)
		: round == "floor"
		? Math.floor(value)
		: Math.round(value)
}
