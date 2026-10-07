import { routes } from '../routes.js';
import { classifyViewport } from '../viewport.js';

export const pad2 = n => String(n).padStart(2, '0');

export const numbered = (items, start = 1) =>
  items.map((item, i) => ({ ...(typeof item === 'string' ? { text: item } : item), no: pad2(start + i) }));

export const withSeparators = items => items.map((text, i) => ({ text, separated: i > 0 }));

export const homeCrumb = (ctx, current) => ({ trail: [{ label: 'الرئيسية', select: ctx.go(routes.home()) }], current });

export function createContext({ route, savedIds, width, options }, actions) {
  return {
    route, options, actions,
    savedIds: new Set(savedIds),
    viewport: classifyViewport(width),
    go: target => () => actions.navigate(target),
    open: overlay => () => actions.openOverlay(overlay),
    external: url => () => actions.openExternal(url),
    close: () => actions.closeOverlays()
  };
}
