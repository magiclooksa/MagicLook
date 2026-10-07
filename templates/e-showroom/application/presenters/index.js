// Presenter: turns application state into one view model per region of the screen.
import { PIECES } from '../../domain/catalog.js';
import { OVERLAY } from '../navigation.js';
import { PAGE } from '../routes.js';
import { presentHallPage, presentPiece, presentPiecePage } from './catalog.js';
import { presentLayout } from './layout.js';
import { presentAbout, presentHome, presentProcess, presentSolutions } from './pages.js';
import { createContext } from './shared.js';

const PAGE_PRESENTERS = {
  [PAGE.HOME]: presentHome,
  [PAGE.ABOUT]: presentAbout,
  [PAGE.SOLUTIONS]: presentSolutions,
  [PAGE.PROCESS]: presentProcess,
  [PAGE.HALL]: presentHallPage,
  [PAGE.PIECE]: presentPiecePage
};

export function present(state, actions) {
  const ctx = createContext(state, actions);
  const pieces = PIECES.map(piece => presentPiece(piece, ctx));
  const savedPieces = state.savedIds.map(id => pieces.find(p => p.id === id)).filter(Boolean);
  const { page } = state.route;
  return {
    page: {
      isHome: page === PAGE.HOME, isAbout: page === PAGE.ABOUT, isSolutions: page === PAGE.SOLUTIONS,
      isProcess: page === PAGE.PROCESS, isHall: page === PAGE.HALL, isPiece: page === PAGE.PIECE
    },
    overlay: { menu: state.overlay === OVERLAY.MENU, inquiry: state.overlay === OVERLAY.INQUIRY, visit: state.overlay === OVERLAY.VISIT },
    viewport: ctx.viewport,
    ...presentLayout(ctx, { pieces, savedPieces }),
    [page]: PAGE_PRESENTERS[page](ctx, pieces)
  };
}
