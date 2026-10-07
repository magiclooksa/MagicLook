// Use case: the visitor's inquiry list (saved pieces), persisted through an injected storage port.
export function createInquiryList({ storage, isKnownPiece }) {
  return {
    load() {
      const ids = storage.read();
      return Array.isArray(ids) ? ids.filter(isKnownPiece) : [];
    },
    toggle(ids, id) {
      const next = ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id];
      storage.write(next);
      return next;
    }
  };
}
