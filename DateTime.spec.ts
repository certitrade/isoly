import * as isoly from "./index"

describe("DateTime", () => {
	it("create + is", () => {
		const d = isoly.DateTime.create(new Date(Date.UTC(2020, 11, 31, 23, 59, 59)))
		expect(d).toBe("2020-12-31T23:59:59.000Z")
		expect(isoly.DateTime.is(d)).toEqual(true)
	})
	;(
		[
			["2019-04-01T01", new Date(2019, 3, 1, 1)],
			["2019-04-01T01Z", new Date(Date.UTC(2019, 3, 1, 1))],
			["2019-04-01T01+01:00", new Date(Date.UTC(2019, 3, 1, 0))],
			["2019-04-01T01:11", new Date(2019, 3, 1, 1, 11)],
			["2019-04-01T01:11Z", new Date(Date.UTC(2019, 3, 1, 1, 11))],
			["2019-04-01T01:11+01:00", new Date(Date.UTC(2019, 3, 1, 0, 11))],
			["2019-04-01T01:11:29", new Date(2019, 3, 1, 1, 11, 29)],
			["2019-04-01T01:11:29Z", new Date(Date.UTC(2019, 3, 1, 1, 11, 29))],
			["2019-04-01T01:11:29+01:00", new Date(Date.UTC(2019, 3, 1, 0, 11, 29))],
			["2019-04-01T01:11:29.123", new Date(2019, 3, 1, 1, 11, 29, 123)],
			["2019-04-01T01:11:29.123Z", new Date(Date.UTC(2019, 3, 1, 1, 11, 29, 123))],
			["2020-12-31T23:59:59.999Z", new Date(Date.UTC(2020, 11, 31, 23, 59, 59, 999))],
			["2019-04-01T01:11:29.123+01:00", new Date(Date.UTC(2019, 3, 1, 0, 11, 29, 123))],
		] as [isoly.DateTime, Date][]
	).forEach(([dateTime, date]) => {
		it("parse " + dateTime, () => {
			expect(isoly.DateTime.parse(dateTime)).toEqual(date)
		})
	})
	;(
		[
			["milliseconds", "2019-04-01T01:11:29.123+01:00", "2019-04-01T01:11:29.123+01:00"],
			["seconds", "2019-04-01T01:11:29+01:00", "2019-04-01T01:11:29.000+01:00"],
			["minutes", "2019-04-01T01:11+01:00", "2019-04-01T01:11:00.000+01:00"],
			["hours", "2019-04-01T01+01:00", "2019-04-01T01:00:00.000+01:00"],
		] as const
	).forEach(([precision, expected, padded]) => {
		it("truncate " + precision, () => {
			const dateTime = "2019-04-01T01:11:29.123+01:00"
			const truncated = isoly.DateTime.truncate(dateTime, precision)
			expect(truncated).toEqual(expected)
			expect(isoly.DateTime.truncate(truncated, "milliseconds")).toEqual(padded)
		})
	})
	;[
		"2019-04-01T01",
		"2019-04-01T01Z",
		"2019-04-01T01+01:00",
		"2019-04-01T01:11",
		"2019-04-01T01:11Z",
		"2019-04-01T01:11+01:00",
		"2019-04-01T01:11:29",
		"2019-04-01T01:11:29Z",
		"2019-04-01T01:11:29+01:00",
		"2019-04-01T01:11:29.000",
		"2019-04-01T01:11:29.000Z",
		"2020-12-31T23:59:59.999Z",
		"2019-04-01T01:11:29.000+01:00",
	].forEach(dateTime => {
		it("is " + dateTime, () => expect(isoly.DateTime.is(dateTime)).toEqual(true))
	})
	;[
		"2019-04-01T1",
		"2019-04-01T01:Z",
		"2019-04-01T01+25:00",
		"2019-04-01T01:1",
		"2019-04-01T01:1Z",
		"2019-04-01T01:1+01:00",
		"2019-04-01T01:11:29:",
		"2019-04-01T01:11:29:Z",
		"2019-04-01T01:11:2+01:00",
		"2019-02-30T01:11:29.000",
		"2019-04-01T01:11:29.00Z",
		"2019-04-01T01:11:29.000+01:0",
		"2019-04-01T24",
		"2019-04-01T25Z",
		"2019-04-01TA0+01:00",
		"2019-04-01T01:60Z",
		"2019-04-01T01:11:63",
		"2019-04-01T01:99:29Z",
		"2019-04-01T01:11:63+01:00",
		"2019-04-01T01:11:63.000",
	].forEach(dateTime => {
		it("is not " + dateTime, () => expect(isoly.DateTime.is(dateTime)).toEqual(false))
	})
	it("epoch", () => {
		expect(isoly.DateTime.epoch("2019-04-01T00:00:00.000Z")).toBe(1554076800)
	})
	if (new Date(Date.UTC(2020, 11, 31, 23, 59, 59)).getTimezoneOffset() == -60) {
		it("zero-pads localized", () => {
			expect(isoly.DateTime.localize(new Date("4 Jul 2020 10:20:30 GMT"), "sv-SE")).toEqual("2020-07-04 12:20:30")
		})
		const data = [
			["20 Jul 2019 10:30:40 GMT+2", "10:30:40"],
			["21 Jul 2019 10:30:50 GMT", "12:30:50"],
		]
		for (const date of data)
			it("localize with locale " + date[0], () =>
				expect(isoly.DateTime.localize(new Date(date[0]), "sv-SE").split(" ")[1]).toEqual(date[1])
			)
		for (const date of data)
			it("localize without locale " + date[0], () =>
				expect(isoly.DateTime.localize(new Date(date[0])).split(" ")[1]).toEqual(date[1])
			)
		it("localize DateTime with locale", () => {
			expect(isoly.DateTime.localize("2020-12-31T23:59:59.000Z", "en-US")).toEqual("01/01/2021, 12:59:59 AM")
		})

		it("localize 2020-12-31T23:59Z to en-US", () => {
			expect(isoly.DateTime.localize("2020-12-31T23:59Z", "en-US")).toEqual("01/01/2021, 12:59 AM")
		})
		it("localize 2020-12-31T23Z to en-US", () => {
			expect(isoly.DateTime.localize("2020-12-31T23Z", "en-US")).toEqual("01/01/2021, 12 AM")
		})
		it('localize 2020-12-31T23:12Z to en-US { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }', () => {
			expect(
				isoly.DateTime.localize(
					"2020-12-31T23:12Z",
					{ month: "short", day: "numeric", hour: "numeric", minute: "numeric" },
					"en-US"
				)
			).toEqual("Jan 1, 12:12 AM")
		})
		it('localize 2020-12-31T23:12Z to de-DE { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }', () => {
			expect(
				isoly.DateTime.localize(
					"2020-12-31T23:12Z",
					{ month: "short", day: "numeric", hour: "numeric", minute: "numeric" },
					"de-DE"
				)
			).toEqual("1. Jan., 00:12")
		})
		it('localize 2020-12-01T23:02Z to se-SE { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }', () => {
			expect(
				isoly.DateTime.localize(
					"2020-12-01T23:02Z",
					{ month: "short", day: "numeric", hour: "numeric", minute: "numeric" },
					"sv-SE"
				)
			).toEqual("2 dec. 00:02")
		})
		it('localize 2020-12-01T22:02+01:00 to se-SE { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }', () => {
			expect(
				isoly.DateTime.localize(
					"2020-06-01T22:02+05:00",
					{ month: "short", day: "numeric", hour: "numeric", minute: "numeric" },
					"en-GB"
				)
			).toEqual("2 dec. 00:02")
		})
		it("getDate", () => {
			expect(isoly.DateTime.getDate("2020-12-31T23:59:59.000Z")).toEqual("2020-12-31")
		})
		it("getTime", () => {
			expect(isoly.DateTime.getTime("2020-12-31T23:59:59.000Z")).toEqual("23:59:59.000Z")
		})
		it("getYear", () => {
			expect(isoly.DateTime.getYear("2020-12-31T23:59:59.000Z")).toEqual(2020)
		})
		it("getMonth", () => {
			expect(isoly.DateTime.getMonth("2020-12-31T23:59:59.000Z")).toEqual(12)
		})
		it("getDay", () => {
			expect(isoly.DateTime.getDay("2020-12-31T23:59:59.000Z")).toEqual(31)
		})
		it("getHour", () => {
			expect(isoly.DateTime.getHour("2020-12-31T23:59:59.000Z")).toEqual(23)
		})
		it("getMinute", () => {
			expect(isoly.DateTime.getMinute("2020-12-31T23:59:59.000Z")).toEqual(59)
		})
		it("getSecond", () => {
			expect(isoly.DateTime.getSecond("2020-12-31T23:59:57.000Z")).toEqual(57)
		})
		it("getMillisecond", () => {
			expect(isoly.DateTime.getMillisecond("2020-12-31T23:59:57.321Z")).toEqual(321)
		})
		it("precision minutes", () => {
			const value = "2020-12-31T23:59:59.123Z"
			const minutes = isoly.DateTime.truncate(value, "minutes")
			expect(minutes).toEqual("2020-12-31T23:59Z")
			expect(isoly.DateTime.is(minutes)).toEqual(true)
		})
		it("previousMillisecond", () => {
			expect(isoly.DateTime.previousMillisecond("2020-01-01T00:00:00.100Z", 200)).toEqual("2019-12-31T23:59:59.900Z")
		})
		it("span", () => {
			expect(isoly.DateTime.span("2013-01-19T22:01:20:000Z", "2023-03-20T00:00:0:003Z")).toEqual({
				years: -10,
				months: -2,
				days: -1,
				hours: 22,
				minutes: 1,
				seconds: 20,
				milliseconds: -3,
			})
		})
	}
})
