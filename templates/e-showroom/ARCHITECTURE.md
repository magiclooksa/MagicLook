# E-showroom architecture

Dependencies point inward only: views → application → domain. Infrastructure implements the ports the application needs and is wired in by the composition root.

```
domain/            Pure data + lookups. No browser, no UI.
  brand, contact, catalog (halls, pieces), company (about), solutions, process, home
application/       Use cases and presentation logic. No DOM access.
  routes           route model, hash <-> route
  navigation       nav items, overlay ids
  inquiry-list     saved pieces (storage port injected)
  visit-booking    bookable days, validation, request summary
  contact-links    WhatsApp / maps links and message templates
  viewport         breakpoints
  presenters/      state -> one view model per screen region (header, footer, pages, overlays)
  index.js         createShowroomApp({ storage })
infrastructure/    Browser adapters: localStorage, hash history, resize, Escape key, device frame, GSAP/Lenis motion.
EShowroom.dc.html  Composition root: loads both layers, owns app state, passes `vm` to views.
Layout*/Page*/Overlay*  Views. Each receives a single `vm` prop and holds only local UI state (gallery index, form fields).
Ui*/PieceCard      Reusable presentational pieces.
```

## Adding content
- Copy changes: edit the matching `domain/*.js` file.
- New page: add a route in `application/routes.js`, a nav item in `navigation.js`, a presenter in `presenters/pages.js`, a `Page<Name>.dc.html` view, and one `<sc-if>` line in the shell.
- New piece/hall: append to `domain/catalog.js`.
