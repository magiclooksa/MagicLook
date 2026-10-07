// Application entry point: wires use cases around an injected storage port.
import { findPiece } from '../domain/catalog.js';
import { createInquiryList } from './inquiry-list.js';
import { present } from './presenters/index.js';
import { parseHash, toHash } from './routes.js';

export { OVERLAY } from './navigation.js';

export function createShowroomApp({ storage }) {
  const inquiryList = createInquiryList({ storage, isKnownPiece: id => Boolean(findPiece(id)) });
  return {
    initialState: hash => ({ route: parseHash(hash), savedIds: inquiryList.load(), overlay: null }),
    parseHash,
    toHash,
    toggleSaved: (ids, id) => inquiryList.toggle(ids, id),
    present
  };
}
