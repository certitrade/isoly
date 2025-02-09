import { Address as isolyAddress } from "./Address"
import { CallingCode as isolyCallingCode } from "./CallingCode"
import { CountryCode as isolyCountryCode } from "./CountryCode"
import { Currency as isolyCurrency } from "./Currency"
import { Date as isolyDate } from "./Date"
import { DateRange as isolyDateRange } from "./DateRange"
import { DateSpan as isolyDateSpan } from "./DateSpan"
import { DateTime as isolyDateTime } from "./DateTime"
import { DayOfWeek as isolyDayOfWeek } from "./DayOfWeek"
import { Encoding as isolyEncoding } from "./Encoding"
import { Language as isolyLanguage } from "./Language"
import { Locale as isolyLocale } from "./Locale"
import { Month as isolyMonth } from "./Month"
import { Time as isolyTime } from "./Time"
import { TimeRange as isolyTimeRange } from "./TimeRange"
import { TimeSpan as isolyTimeSpan } from "./TimeSpan"
import { TimeZone as isolyTimeZone } from "./TimeZone"
import { Week as isolyWeek } from "./Week"

export namespace isoly {
	export import Address = isolyAddress
	export import CallingCode = isolyCallingCode
	export import CountryCode = isolyCountryCode
	export import DateSpan = isolyDateSpan
	export import DateRange = isolyDateRange
	export import Currency = isolyCurrency
	/// @deprecated
	export import CurrencyCode = Currency.Code
	export import Date = isolyDate
	export import DateTime = isolyDateTime
	export import DayOfWeek = isolyDayOfWeek
	export import Encoding = isolyEncoding
	export import Language = isolyLanguage
	export import Locale = isolyLocale
	export import Month = isolyMonth
	export import Time = isolyTime
	export import TimeRange = isolyTimeRange
	export import TimeSpan = isolyTimeSpan
	export import TimeZone = isolyTimeZone
	export import Week = isolyWeek
}
