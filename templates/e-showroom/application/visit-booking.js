// Use case: booking a showroom visit.
export const VISIT_PERIODS = [{ id: 'am', label: 'صباحاً' }, { id: 'pm', label: 'مساءً' }];
export const BOOKABLE_DAYS = 6;
export const MIN_PHONE_LENGTH = 9;

const weekdayFormat = new Intl.DateTimeFormat('ar', { weekday: 'long' });
const dateFormat = new Intl.DateTimeFormat('ar-u-nu-latn', { day: 'numeric', month: 'long' });
let cache = { key: '', days: [] };

export function upcomingDays(from = new Date()) {
  const key = from.toDateString();
  if (cache.key === key) return cache.days;
  const days = Array.from({ length: BOOKABLE_DAYS }, (_, i) => {
    const day = new Date(from);
    day.setDate(day.getDate() + i + 1);
    const weekday = weekdayFormat.format(day), date = dateFormat.format(day);
    return { id: i, weekday, date, label: weekday + ' ' + date };
  });
  cache = { key, days };
  return days;
}

export const isVisitRequestComplete = ({ name, phone, dayId, periodId }) =>
  Boolean(name.trim() && phone.trim().length >= MIN_PHONE_LENGTH && dayId !== null && periodId);

export function describeVisitRequest(form) {
  const day = upcomingDays().find(d => d.id === form.dayId);
  const period = VISIT_PERIODS.find(p => p.id === form.periodId);
  return { name: form.name.trim(), phone: form.phone.trim(), day: day ? day.label : '', period: period ? period.label : '' };
}
