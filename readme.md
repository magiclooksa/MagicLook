# Magic Look — Design System · النظرة الساحرة

Magic Look (**النظرة الساحرة**) is a furniture and interiors brand based in Dammam, Saudi Arabia (Al Manar district, Abu Bakr Al Siddiq St., opposite Al Rajhi Bank). It sells upholstered seating, sofas, bedrooms and curtains, and communicates mainly through Arabic-first social posts and stories (@MAGICLOOK on Facebook, X/Twitter, Instagram, WhatsApp, Telegram). The identity is a two-letter **L M** mark in ochre with a bilingual signature.

## Sources
- `uploads/identity.pdf` — "MAGIC LOOK / IDENTITY SYSTEM", 25 pages (mark, colour, type, pattern, stationery, social, signage, file guide). Text was extracted; page renders were too heavy to rasterise here.
- Local folder `magic-look/` (read-only): `0000-magic-look-brand-identity.ai`, `…-social-designs.ai`, `…-social-media-templates.ai` (not readable here), `4x/identity.png` (29765px, too large to decode), `posters-templates/` (mostly third-party reference images — not brand), `Products/0001…0007` product photo sets, poster outputs, and `Products/0000-magic-look-vectors/…vector-asset-01.svg` (story template with editable mark, wordmark and pattern paths — source of every vector in `assets/`).
- No codebase, website or app exists. Products/surfaces = **social media (story + feed post)** and **print stationery** (described in the PDF only).

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` — 16 foundation cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see list below), one card per folder
- `ui_kits/social/` — Story 1080×1920 + Post 1080×1350 recreations with a thin editor shell
- `templates/social-posters/SocialPosters.dc.html` — poster template page: 4 feed posts (product in interior, lifestyle, detail callouts, typographic on ink) + 2 stories (pattern card, ink)
- `assets/` — `logo.svg` / `logo-mark*.svg` (mark), `pattern/pattern-tile-*.svg`, `icons/social-*.svg`, `brand/title.png` (gold calligraphy headline), `brand/story-template-source.svg`, `backgrounds/background.png`, `products/*`, `posters/*`
- `SKILL.md` — Agent-Skill wrapper; `thumbnail.html` — homepage tile

## Components
- **Brand** (`components/brand/`): `Logo`, `LogoMark`, `ArabicWordmark`, `Pattern`, `SocialLinks`, `SocialIcon`, `FeatureLine`
- **Core** (`components/core/`): `Button`, `IconButton`, `Badge`, `Card`, `ProductCard`, `Divider`
- **Forms** (`components/forms/`): `Input`, `Select`, `Checkbox`
- **Navigation** (`components/navigation/`): `Tabs`
- **Feedback** (`components/feedback/`): `Dialog`

No source component library exists, so this is an authored set sized to the brand (social + light web/catalogue use). Intentional additions beyond a generic set: `Pattern`, `FeatureLine`, `SocialLinks` — they encode recurring poster structures.

## CONTENT FUNDAMENTALS
- **Arabic first.** Headlines and body are Modern Standard Arabic; English appears only in the signature ("MAGIC LOOK"), handle (@MAGICLOOK) and phone numbers. Layout is RTL.
- **Short, sensory, admiring.** Headlines are 2–4 words about beauty, presence or comfort: "جماله في تفاصيله" (its beauty is in its details), "حضور يلفت وراحة تحتضنك" (a presence that catches the eye, comfort that embraces you), "أناقة تسكن تفاصيلك".
- **Material facts as features.** Supporting lines name materials/construction, separated by ochre dots: "ملمس مخملي • ظهر بتصميم منحني • خشب زان متين" (velvet touch • curved back • solid beech wood). Fragments, no verbs, no prices.
- **Voice:** the product is the subject (third person "جماله"), occasionally addressing the reader with "you" (تحتضنك, تفاصيلك). No "we", no hard-sell imperatives, no exclamation marks.
- **Casing:** Latin is ALL CAPS (MAGIC LOOK, @MAGICLOOK); spaced caps "M A G I C L O O K" in the stacked lockup.
- **Contact block:** "الدمام - حي المنار - شارع ابوبكر الصديق - امام بنك الراجحي" and "05 10 65 73 89 - 05 35 34 65 55" — hyphen-separated, digits grouped in pairs.
- **No emoji.** The identity PDF's own taglines: "A considered identity", "Warmth with restraint", "Useful, quietly branded".
- **Arabic name: النظرة الساحرة** (confirmed by the owner). The identity PDF and its vector wordmark read "نظرة ساحرة" without the article — do not use that form. In lockups the name is set as live text in Noto Kufi Arabic Medium (`ArabicWordmark`).

## VISUAL FOUNDATIONS
- **Colour:** four masters — Ochre `#7B5D08`, Ink `#17191B`, Ivory `#F4F0E8`, White. Ratio **60% ivory/white · 30% ink · 10% ochre**. Ochre is the mark, rules, dots, footer bars and primary buttons — never large text fields. HEX is authoritative (CMYK in PDF is approximate). Posters also use a warmer card cream (`--ml-ivory-deep #F6EBDB`).
- **Type:** Noto Kufi Arabic (Medium headings/signature, Regular body) + Almarai (Bold English signature/headings, Regular info). Some posters use a gold-edged calligraphic headline image (`assets/brand/title.png`) for hero titles — treat as artwork, not a font.
- **Pattern:** bespoke repeat of two fragments of the mark — "The Bend" (L corner) and "The Valley" (M notch) — 240-unit seamless half-drop cell. Quiet: 13% on ivory, 10% on ink. Scale uniformly; keep text on a clear field.
- **Backgrounds:** (a) patterned ivory field with an inset rounded cream card; (b) full-bleed warm, sunlit luxury interior (cream marble, brass fluting, arched niche, olive plant, diagonal light shafts). No gradients, no textures beyond photography.
- **Imagery:** warm, golden-hour, high-key cream/beige with brass accents; products are deep-colour (navy velvet, walnut) cut-outs with soft contact shadow. No grain, no B&W.
- **Layout:** signature top-right (mark at the outer edge), headline right-aligned below, ochre 2px rule, dotted features, product centred low, handle + social icons bottom-left. Feed posts end with an 80px (1080 scale) solid ochre footer bar: handle/icons/phones left, address right, ivory text.
- **Corners:** soft — story card ≈44px at 1080 width; UI radii 6/12/24/40; buttons pill. Echoes the rounded L bend.
- **Borders & rules:** 2px ochre rule under headlines; 1px ink-20 hairlines in UI. No outlines on the mark.
- **Shadows:** almost none. Flat cards; a soft product drop shadow only on photography; `--shadow-soft` for floating UI (dialogs).
- **Cards:** flat cream fill, large radius, no border, no shadow, no coloured left-borders.
- **Transparency/blur:** only the pattern (10–13%) and the dialog scrim (ink 45%). No glass/blur.
- **Motion:** calm — `cubic-bezier(.22,.61,.36,1)`, 140–480ms fades and colour shifts; slow 3% image zoom on product hover. No bounce.
- **Hover:** primary darkens to ochre-700; outline buttons fill ink; ghost gets ochre-100 tint. **Press:** scale .98.
- **Logo rules:** mark is 604×448 units, two closed paths, no joins; clear space = one stem width (94 units); min 8mm symbol / 25mm signature; never stretch, merge, outline, or place on busy imagery. Inverse ivory on dark.

## ICONOGRAPHY
- The only icon set in the sources is five **social icons** (Facebook, X/Twitter bird, Instagram, WhatsApp, Telegram) as mono outline/solid SVGs (`assets/icons/social-*.svg`, 32×32, originally `#5B5B5B`). They always appear as a row in that order beside "@MAGICLOOK". `SocialIcon` embeds the same paths.
- Bullets are **solid ochre dots** (●), not glyphs or emoji.
- No UI icon font exists. If generic UI icons are needed, use **Lucide** (CDN, 1.5–2px stroke) — this is a substitution, not brand-sourced.
- No emoji, no unicode pictographs.

## Font substitution flag
No font binaries were supplied; both brand faces are loaded from Google Fonts (exact families, not substitutes).
