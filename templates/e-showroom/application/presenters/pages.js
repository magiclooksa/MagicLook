import { ABOUT } from '../../domain/company.js';
import { BRAND } from '../../domain/brand.js';
import { FEATURED_PIECE_ID, HALLS } from '../../domain/catalog.js';
import { HOME } from '../../domain/home.js';
import { PROCESS } from '../../domain/process.js';
import { SOLUTIONS } from '../../domain/solutions.js';
import { contactDetails, mapsLink, MESSAGES, whatsappLink } from '../contact-links.js';
import { OVERLAY } from '../navigation.js';
import { routes } from '../routes.js';
import { homeCrumb, numbered, pad2, withSeparators } from './shared.js';

function numberedPhases() {
  let step = 0;
  return PROCESS.phases.map((phase, i) => {
    const first = step + 1;
    const steps = phase.steps.map(text => ({ text, no: pad2(++step) }));
    return { ...phase, no: 'المرحلة ' + pad2(i + 1), range: pad2(first) + ' — ' + pad2(step), steps };
  });
}

export function presentHome(ctx, pieces) {
  const { hero, intro, halls, inside, featured, solutions, process, visit } = HOME;
  const photoHero = ctx.options.heroStyle !== 'pattern';
  const showCalligraphy = ctx.options.useCalligraphy;
  return {
    hero: { ...hero, features: withSeparators(hero.features), photo: photoHero, pattern: !photoHero, showCalligraphy, plainTitle: !showCalligraphy },
    intro: { ...intro, kicker: BRAND.signature, strengths: numbered(ABOUT.strengths.items) },
    halls: { ...halls, items: HALLS.map(hall => ({ ...hall, label: 'القاعة ' + hall.no, open: ctx.go(routes.hall(hall.id)) })) },
    inside,
    featured: { ...featured, items: pieces },
    solutions: { ...solutions, items: numbered(SOLUTIONS.categories.items) },
    process: { ...process, items: numberedPhases() },
    visit: { ...visit, ...contactDetails() },
    goHalls: ctx.go(routes.hall()),
    goAbout: ctx.go(routes.about()),
    goSolutions: ctx.go(routes.solutions()),
    goProcess: ctx.go(routes.process()),
    openFeatured: ctx.go(routes.piece(FEATURED_PIECE_ID)),
    openVisit: ctx.open(OVERLAY.VISIT),
    openMaps: ctx.external(mapsLink())
  };
}

export function presentAbout(ctx) {
  return {
    ...ABOUT,
    breadcrumb: homeCrumb(ctx, 'من نحن'),
    hero: { ...ABOUT.hero, kicker: BRAND.signature },
    strengths: { ...ABOUT.strengths, items: numbered(ABOUT.strengths.items).map(s => ({ ...s, tags: s.tags || [], hasTags: Boolean(s.tags) })) },
    goSolutions: ctx.go(routes.solutions()),
    openVisit: ctx.open(OVERLAY.VISIT)
  };
}

export function presentSolutions(ctx) {
  const { categories, levels, scope } = SOLUTIONS;
  return {
    ...SOLUTIONS,
    breadcrumb: homeCrumb(ctx, 'الحلول'),
    scope: { ...scope, items: numbered(scope.items) },
    levels: { ...levels, items: levels.items.map((text, i) => ({ text, no: String(i + 1) })) },
    categories: {
      ...categories,
      items: numbered(categories.items).map(c => ({
        ...c,
        hasIntro: Boolean(c.intro),
        notes: c.notes || [],
        linksToHall: Boolean(c.hall),
        openHall: c.hall ? ctx.go(routes.hall(c.hall)) : undefined
      }))
    },
    goHalls: ctx.go(routes.hall()),
    goProcess: ctx.go(routes.process()),
    openVisit: ctx.open(OVERLAY.VISIT)
  };
}

export function presentProcess(ctx) {
  return {
    ...PROCESS,
    breadcrumb: homeCrumb(ctx, 'رحلة العمل'),
    phases: numberedPhases(),
    openVisit: ctx.open(OVERLAY.VISIT),
    openWhatsApp: ctx.external(whatsappLink(MESSAGES.general()))
  };
}
