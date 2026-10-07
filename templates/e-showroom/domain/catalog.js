// Showroom catalog: halls and the pieces displayed in them.
export const ALL_HALLS = 'all';
export const FEATURED_PIECE_ID = 'velvet-armchair';
export const RELATED_LIMIT = 3;

export const CATALOG = Object.freeze({
  kicker: 'القاعات',
  allLabel: 'كل القطع',
  allLine: 'مختارات من قاعات المعرض الأربع',
  fullRangeTitle: 'للتشكيلة الكاملة',
  fullRangeText: 'المعروض هنا مختارات من المعرض. اطلب الكتالوج كاملاً عبر واتساب.',
  sizesNote: 'للاستفسار عن المقاسات والخامات المتاحة تواصل عبر واتساب أو زر المعرض.'
});

export const HALLS = [
  { id: 'armchairs', no: '01', name: 'الكراسي المنفردة', line: 'حضور يلفت وراحة تحتضنك', img: './media/chair-lifestyle.jpg' },
  { id: 'majlis', no: '02', name: 'المجالس والكنب', line: 'جماله في تفاصيله', img: './media/sofa.jpg' },
  { id: 'bedrooms', no: '03', name: 'غرف النوم', line: 'أناقة تسكن تفاصيلك', img: './media/bedroom.jpg' },
  { id: 'curtains', no: '04', name: 'الستائر', line: 'ضوء ناعم وخصوصية هادئة', img: './media/curtains.jpg' }
];

export const PIECES = [
  {
    id: 'velvet-armchair', hall: 'armchairs', name: 'كرسي مخملي كحلي', short: 'ملمس مخملي • خشب زان متين',
    lead: 'كرسي بظهر منحني يحتضن الجلسة، تحيط به أعمدة خشبية محفورة وتنتهي أرجله بأطراف نحاسية.',
    features: ['ملمس مخملي', 'ظهر بتصميم منحني', 'خشب زان متين'],
    specs: [{ label: 'القماش', value: 'مخمل كحلي' }, { label: 'الهيكل', value: 'خشب زان' }, { label: 'الأعمدة', value: 'خشب بتفاصيل محفورة' }, { label: 'الأرجل', value: 'أطراف نحاسية' }],
    cover: './media/chair-lifestyle.jpg',
    images: [{ src: './media/chair-lifestyle.jpg' }, { src: './media/chair-cutout.jpg', cutout: true }, { src: './media/chair-showroom.jpg' }, { src: './media/chair-inside.jpg' }],
    detail: { src: './media/chair-cutout.jpg', ratio: '1/1', cutout: true },
    spots: [
      { x: 50, y: 12, label: 'ظهر بتصميم منحني', note: 'خط واحد متصل يلتف حول الجلسة.' },
      { x: 50, y: 46, label: 'ملمس مخملي', note: 'مخمل كثيف بلون كحلي عميق.' },
      { x: 86.5, y: 40, label: 'خشب بتفاصيل محفورة', note: 'أعمدة جانبية بحفر طولي منتظم.' },
      { x: 14, y: 89, label: 'أطراف نحاسية', note: 'لمسة ذهبية تنهي الأرجل.' }
    ]
  },
  {
    id: 'floor-sofa', hall: 'majlis', name: 'كنبة أرضية بمساند أسطوانية', short: 'قماش جاكار منقوش • أرجل كروية',
    lead: 'جلسة منخفضة على قاعدة خشبية داكنة، بوسائد جاكار منقوشة ومساند أسطوانية بحواف مخيطة.',
    features: ['قماش جاكار منقوش', 'مساند أسطوانية', 'أرجل كروية'],
    specs: [{ label: 'المقعد', value: 'قماش ناعم بحواف داكنة' }, { label: 'الوسائد', value: 'جاكار منقوش' }, { label: 'القاعدة', value: 'خشب بلون داكن' }, { label: 'الأرجل', value: 'كروية' }],
    cover: './media/sofa.jpg',
    images: [{ src: './media/sofa.jpg' }, { src: './media/sofa-details.jpg' }],
    detail: { src: './media/sofa.jpg', ratio: '1500/1027' },
    spots: [
      { x: 41, y: 24, label: 'وسائد جاكار منقوشة', note: 'نقش بارز يمنح الوسائد عمقاً وملمساً.' },
      { x: 90, y: 28, label: 'مساند أسطوانية', note: 'حواف داكنة مخيطة على طرفي المسند.' },
      { x: 47, y: 46, label: 'حواف مخيطة', note: 'خط داكن يرسم حدود المقعد.' },
      { x: 73, y: 75, label: 'قاعدة بأرجل كروية', note: 'قاعدة خشبية داكنة ترفع الجلسة قليلاً عن الأرض.' }
    ]
  },
  {
    id: 'upholstered-bed', hall: 'bedrooms', name: 'سرير منجّد بلون رملي', short: 'رأس منجّد • قماش ناعم الملمس',
    lead: 'سرير بخطوط هادئة، رأسه وإطاره منجّدان بقماش ناعم بلون رملي يتناغم مع الخشب الدافئ.',
    features: ['رأس سرير منجّد', 'قماش ناعم الملمس', 'إطار بحواف مستديرة'],
    specs: [{ label: 'التنجيد', value: 'قماش ناعم بلون رملي' }, { label: 'الرأس', value: 'منجّد بارتفاع كامل' }, { label: 'الإطار', value: 'منجّد بحواف مستديرة' }],
    cover: './media/bedroom.jpg',
    images: [{ src: './media/bedroom.jpg' }],
    detail: { src: './media/bedroom.jpg', ratio: '1536/1024' },
    spots: [
      { x: 47.5, y: 47, label: 'رأس سرير منجّد', note: 'لوح عريض بتنجيد مشدود.' },
      { x: 47, y: 84, label: 'إطار بحواف مستديرة', note: 'إطار منجّد يحيط بالمرتبة.' },
      { x: 68, y: 60, label: 'كومودينو خشبي', note: 'قطعة مستديرة من الخشب الدافئ بجانب السرير.' }
    ]
  },
  {
    id: 'pleated-curtain', hall: 'curtains', name: 'ستارة بطيات منتظمة', short: 'طيات منتظمة • تفصيل حسب المقاس',
    lead: 'ستارة تنسدل من السقف حتى الأرض بطيات منتظمة، وتُفصّل حسب ارتفاع المساحة وعرضها.',
    features: ['طيات منتظمة', 'تركيب مخفي في السقف', 'تفصيل حسب المقاس'],
    specs: [{ label: 'القماش', value: 'قماش ثقيل بلون رملي' }, { label: 'التركيب', value: 'مجرى مخفي في السقف' }, { label: 'المقاس', value: 'حسب المساحة' }],
    cover: './media/curtains.jpg',
    images: [{ src: './media/curtains.jpg' }],
    detail: { src: './media/curtains.jpg', ratio: '560/1024' },
    spots: [
      { x: 45, y: 7, label: 'تركيب مخفي في السقف', note: 'المجرى يختفي داخل السقف مع إضاءة غير مباشرة.' },
      { x: 46, y: 46, label: 'طيات منتظمة', note: 'طيات متساوية على كامل العرض.' },
      { x: 45, y: 72, label: 'طول يلامس الأرض', note: 'تُفصّل لتلامس الأرض بدقة.' }
    ]
  }
];

export const findHall = id => HALLS.find(hall => hall.id === id) || null;
export const findPiece = id => PIECES.find(piece => piece.id === id) || null;
