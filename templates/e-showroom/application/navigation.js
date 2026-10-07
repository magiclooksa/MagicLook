import { PAGE, routes } from './routes.js';

export const NAV_ITEMS = [
  { label: 'الرئيسية', route: routes.home(), pages: [PAGE.HOME] },
  { label: 'من نحن', route: routes.about(), pages: [PAGE.ABOUT] },
  { label: 'الحلول', route: routes.solutions(), pages: [PAGE.SOLUTIONS] },
  { label: 'القاعات', route: routes.hall(), pages: [PAGE.HALL, PAGE.PIECE] },
  { label: 'رحلة العمل', route: routes.process(), pages: [PAGE.PROCESS] }
];

export const OVERLAY = Object.freeze({ MENU: 'menu', INQUIRY: 'inquiry', VISIT: 'visit' });
