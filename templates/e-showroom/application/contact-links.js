import { CONTACT } from '../domain/contact.js';

export const whatsappLink = text => 'https://wa.me/' + CONTACT.whatsappNumber + '?text=' + encodeURIComponent(text);
export const mapsLink = () => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONTACT.mapsQuery);

export const MESSAGES = Object.freeze({
  general: () => 'مرحباً، أود الاستفسار عن قطع معرض النظرة الساحرة.',
  piece: name => 'مرحباً، أود الاستفسار عن: ' + name,
  list: names => ['مرحباً، أود الاستفسار عن القطع التالية:', ...names.map(name => '• ' + name)].join('\n'),
  visit: ({ name, phone, day, period, pieceNames }) => [
    'طلب زيارة لمعرض النظرة الساحرة',
    'الاسم: ' + name,
    'الجوال: ' + phone,
    'اليوم: ' + day,
    'الفترة: ' + period,
    ...(pieceNames.length ? ['القطع: ' + pieceNames.join('، ')] : [])
  ].join('\n')
});

export const contactDetails = () => ({
  address: CONTACT.address,
  phones: CONTACT.phones,
  phonesLine: CONTACT.phones.join(' - ')
});
