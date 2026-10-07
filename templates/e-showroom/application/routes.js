import { ALL_HALLS, findHall, findPiece } from '../domain/catalog.js';

export const PAGE = Object.freeze({ HOME: 'home', ABOUT: 'about', SOLUTIONS: 'solutions', PROCESS: 'process', HALL: 'hall', PIECE: 'piece' });

const STATIC_PAGES = [PAGE.ABOUT, PAGE.SOLUTIONS, PAGE.PROCESS];

export const routes = Object.freeze({
  home: () => ({ page: PAGE.HOME }),
  about: () => ({ page: PAGE.ABOUT }),
  solutions: () => ({ page: PAGE.SOLUTIONS }),
  process: () => ({ page: PAGE.PROCESS }),
  hall: (hallId = ALL_HALLS) => ({ page: PAGE.HALL, hallId }),
  piece: pieceId => ({ page: PAGE.PIECE, pieceId })
});

export function parseHash(hash = '') {
  const [page, param] = hash.replace(/^#\/?/, '').split('/');
  if (page === PAGE.HALL) return routes.hall(findHall(param) ? param : ALL_HALLS);
  if (page === PAGE.PIECE && findPiece(param)) return routes.piece(param);
  if (STATIC_PAGES.includes(page)) return { page };
  return routes.home();
}

export function toHash(route) {
  switch (route.page) {
    case PAGE.HOME: return '#/';
    case PAGE.HALL: return '#/hall/' + route.hallId;
    case PAGE.PIECE: return '#/piece/' + route.pieceId;
    default: return '#/' + route.page;
  }
}
