import { ALL_HALLS, CATALOG, HALLS, RELATED_LIMIT, findHall } from '../../domain/catalog.js';
import { MESSAGES, whatsappLink } from '../contact-links.js';
import { OVERLAY } from '../navigation.js';
import { routes } from '../routes.js';
import { homeCrumb, withSeparators } from './shared.js';

const SAVE_COPY = {
  saved: { label: 'إزالة من قائمة الاستفسار', text: 'في قائمة الاستفسار' },
  unsaved: { label: 'أضف إلى قائمة الاستفسار', text: 'أضف إلى قائمة الاستفسار' }
};

export function presentPiece(piece, ctx) {
  const hall = findHall(piece.hall);
  const saved = ctx.savedIds.has(piece.id);
  const copy = saved ? SAVE_COPY.saved : SAVE_COPY.unsaved;
  return {
    ...piece,
    hallName: hall.name,
    hallLabel: 'القاعة ' + hall.no + ' · ' + hall.name,
    features: withSeparators(piece.features),
    saved, saveLabel: copy.label, saveText: copy.text,
    whatsappLink: whatsappLink(MESSAGES.piece(piece.name)),
    open: ctx.go(routes.piece(piece.id)),
    toggleSaved: event => {
      if (event && event.stopPropagation) event.stopPropagation();
      ctx.actions.toggleSaved(piece.id);
    }
  };
}

export function presentHallPage(ctx, pieces) {
  const hall = findHall(ctx.route.hallId);
  const tabs = [{ id: ALL_HALLS, no: '—', label: CATALOG.allLabel }, ...HALLS.map(h => ({ id: h.id, no: h.no, label: h.name }))];
  return {
    breadcrumb: homeCrumb(ctx, CATALOG.kicker),
    kicker: hall ? 'القاعة ' + hall.no : CATALOG.kicker,
    title: hall ? hall.name : CATALOG.allLabel,
    subtitle: hall ? hall.line : CATALOG.allLine,
    tabs: tabs.map(tab => ({ ...tab, active: tab.id === ctx.route.hallId, select: ctx.go(routes.hall(tab.id)) })),
    items: hall ? pieces.filter(p => p.hall === hall.id) : pieces,
    fullRange: { title: CATALOG.fullRangeTitle, text: CATALOG.fullRangeText, link: whatsappLink(MESSAGES.general()) },
    isDesktop: ctx.viewport.isDesktop,
    notDesktop: ctx.viewport.notDesktop
  };
}

export function presentPiecePage(ctx, pieces) {
  const piece = pieces.find(p => p.id === ctx.route.pieceId);
  return {
    piece,
    related: pieces.filter(p => p.id !== piece.id).slice(0, RELATED_LIMIT),
    breadcrumb: { trail: [{ label: 'الرئيسية', select: ctx.go(routes.home()) }, { label: piece.hallName, select: ctx.go(routes.hall(piece.hall)) }], current: piece.name },
    sizesNote: CATALOG.sizesNote,
    isMobile: ctx.viewport.isMobile,
    notMobile: ctx.viewport.notMobile,
    goHalls: ctx.go(routes.hall()),
    openVisit: ctx.open(OVERLAY.VISIT),
    openWhatsApp: ctx.external(piece.whatsappLink)
  };
}
