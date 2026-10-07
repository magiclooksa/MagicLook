import { BRAND } from '../../domain/brand.js';
import { HALLS } from '../../domain/catalog.js';
import { contactDetails, mapsLink, MESSAGES, whatsappLink } from '../contact-links.js';
import { NAV_ITEMS, OVERLAY } from '../navigation.js';
import { PAGE, routes } from '../routes.js';
import { VISIT_PERIODS, describeVisitRequest, isVisitRequestComplete, upcomingDays } from '../visit-booking.js';

function presentNavLinks(ctx) {
  return NAV_ITEMS.map(item => ({ label: item.label, active: item.pages.includes(ctx.route.page), select: ctx.go(item.route) }));
}

function presentInquiry(ctx, savedPieces) {
  const names = savedPieces.map(p => p.name);
  return {
    isMobile: ctx.viewport.isMobile,
    items: savedPieces.map(p => ({ ...p, remove: () => ctx.actions.toggleSaved(p.id) })),
    count: savedPieces.length,
    hasItems: savedPieces.length > 0,
    isEmpty: savedPieces.length === 0,
    sendWhatsApp: ctx.external(whatsappLink(MESSAGES.list(names))),
    openVisit: ctx.open(OVERLAY.VISIT),
    goHalls: ctx.go(routes.hall()),
    close: ctx.close
  };
}

function presentVisit(ctx, savedPieces) {
  const pieceNames = savedPieces.map(p => p.name);
  return {
    isMobile: ctx.viewport.isMobile,
    address: contactDetails().address,
    days: upcomingDays(),
    periods: VISIT_PERIODS,
    pieceNames,
    hasPieces: pieceNames.length > 0,
    isComplete: isVisitRequestComplete,
    describe: describeVisitRequest,
    submit: form => {
      if (!isVisitRequestComplete(form)) return false;
      ctx.actions.openExternal(whatsappLink(MESSAGES.visit({ ...describeVisitRequest(form), pieceNames })));
      return true;
    },
    close: ctx.close
  };
}

export function presentLayout(ctx, { pieces, savedPieces }) {
  const { route, viewport } = ctx;
  const isPiece = route.page === PAGE.PIECE;
  const piece = isPiece ? pieces.find(p => p.id === route.pieceId) : null;
  const links = presentNavLinks(ctx);
  const generalWhatsApp = whatsappLink(MESSAGES.general());
  const contact = contactDetails();
  const saved = { savedCount: savedPieces.length, hasSaved: savedPieces.length > 0 };
  const openVisit = ctx.open(OVERLAY.VISIT);
  const openInquiry = ctx.open(OVERLAY.INQUIRY);

  return {
    header: {
      ...viewport, ...saved, links,
      showBack: isPiece,
      whatsappLink: generalWhatsApp,
      goHome: ctx.go(routes.home()),
      goBack: ctx.go(routes.hall(piece ? piece.hall : undefined)),
      openMenu: ctx.open(OVERLAY.MENU),
      openInquiry, openVisit
    },
    tabBar: {
      ...saved,
      visible: viewport.isMobile && !isPiece,
      homeActive: route.page === PAGE.HOME,
      hallsActive: route.page === PAGE.HALL,
      goHome: ctx.go(routes.home()),
      goHalls: ctx.go(routes.hall()),
      openInquiry, openVisit
    },
    pieceBar: piece ? {
      visible: viewport.isMobile,
      saved: piece.saved, saveText: piece.saveText,
      toggleSaved: piece.toggleSaved,
      openWhatsApp: ctx.external(piece.whatsappLink)
    } : { visible: false },
    footer: {
      ...contact,
      brandLine: BRAND.footerLine,
      tagline: BRAND.tagline,
      halls: HALLS.map(h => ({ name: h.name, select: ctx.go(routes.hall(h.id)) })),
      whatsappLink: generalWhatsApp,
      goHome: ctx.go(routes.home()),
      goHalls: ctx.go(routes.hall()),
      goAbout: ctx.go(routes.about()),
      goSolutions: ctx.go(routes.solutions()),
      goProcess: ctx.go(routes.process()),
      openVisit,
      openMaps: ctx.external(mapsLink())
    },
    menu: { ...contact, links, whatsappLink: generalWhatsApp, openVisit, close: ctx.close },
    inquiry: presentInquiry(ctx, savedPieces),
    visit: presentVisit(ctx, savedPieces)
  };
}
