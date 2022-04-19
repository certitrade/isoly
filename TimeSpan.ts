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
			(value.milliseconds ?? 0) / (60 * 60 * 1000) +
			(value.seconds ?? 0) / (60 * 60) +
			(value.minutes ?? 0) / 60 +
			(value.hours ?? 0)
		return performRound(result, round)
	}
	export function toMinutes(value: TimeSpan, round?: Round): number {
		const result =
			(value.milliseconds ?? 0) / (60 * 1000) +
			(value.seconds ?? 0) / 60 +
			(value.minutes ?? 0) +
			(value.hours ?? 0) * 60
		return performRound(result, round)
	}
	export function toSeconds(value: TimeSpan, round?: Round): number {
		const result =
			(value.milliseconds ?? 0) / 1000 + (value.seconds ?? 0) + (value.minutes ?? 0) * 60 + (value.hours ?? 0) * 60 * 60
		return performRound(result, round)
	}
	export function toMilliseconds(value: TimeSpan, round?: Round): number {
		const result =
			(value.milliseconds ?? 0) +
			(value.seconds ?? 0) * 1000 +
			(value.minutes ?? 0) * 60 * 1000 +
			(value.hours ?? 0) * 60 * 60 * 1000
		return performRound(result, round)
	}
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
