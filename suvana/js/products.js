/**
 * SUVANA catalog & brand config
 * Edit products, prices, images, sizes, colors, WhatsApp, and Instagram here.
 */
window.SUVANA_CONFIG = {
  whatsapp: "10000000000",
  instagram: "https://instagram.com/suvana",
  facebook: "https://facebook.com/suvana",
  tiktok: "https://tiktok.com/@suvana",
  currency: "USD",
  currencySymbol: "$"
};

window.SUVANA_PRODUCTS = [
  {
    id: "essential-hoodie",
    category: "hoodies",
    featured: true,
    newest: true,
    price: 128,
    name: { en: "SUVANA Essential Hoodie", ar: "هودى سفانا الأساسي" },
    description: {
      en: "Heavyweight 450gsm fleece. Dropped shoulders, oversized hood, and a silent interior. Cut for the city — not the catalog.",
      ar: "فليز ثقيل ٤٥٠ جرام. أكتاف ساقطة، كابوش عريض، وداخل هادئ. مقصوص للشارع مش للكتالوج."
    },
    colors: [
      { id: "black", hex: "#111111", name: { en: "Black", ar: "أسود" } },
      { id: "charcoal", hex: "#3a3a3a", name: { en: "Charcoal", ar: "فحمي" } },
      { id: "bone", hex: "#e8e4dc", name: { en: "Bone", ar: "عاجي" } }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52c4d1d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d33f?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "oversized-hoodie",
    category: "hoodies",
    featured: true,
    newest: true,
    price: 148,
    name: { en: "SUVANA Oversized Hoodie", ar: "هودى سفانا أوفرسايز" },
    description: {
      en: "An exaggerated silhouette. Boxy torso, elongated sleeves, raw-edge hem. Built to move through night streets.",
      ar: "قصة مبالغ فيها. جسم مربع، أكمام طويلة، حافة خام. مصنوع للحركة في شوارع الليل."
    },
    colors: [
      { id: "black", hex: "#0d0d0d", name: { en: "Black", ar: "أسود" } },
      { id: "olive", hex: "#3d4633", name: { en: "Olive", ar: "زيتي" } }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "signature-sweatset",
    category: "sets", 
    featured: true,
    newest: true,
    price: 220,
    name: { en: "SUVANA Signature Sweatset", ar: "سويت ست سفانا سيجنتشر" },
    description: {
      en: "Matching hoodie and pant in washed cotton. Tapered cuff, hidden pockets, and the SUVANA mark at the nape.",
      ar: "هودى وبنطلون متطابقان من قطن مغسول. أسورة ضيقة، جيوب مخفية، وعلامة سفانا خلف الرقبة."
    },
    colors: [
      { id: "black", hex: "#121212", name: { en: "Black", ar: "أسود" } },
      { id: "grey", hex: "#6b6b6b", name: { en: "Ash", ar: "رمادي" } },
      { id: "navy", hex: "#1c2430", name: { en: "Night", ar: "كحلي" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "street-tee",
    category: "tshirts",
    featured: true,
    newest: false,
    price: 58,
    name: { en: "SUVANA Street T-Shirt", ar: "تيشيرت سفانا ستريت" },
    description: {
      en: "240gsm jersey. Slight crop, wide neck, printed mark that fades with the city. Wear it until it belongs to you.",
      ar: "جيرسي ٢٤٠ جرام. قصة قصيرة خفيفة، رقبة واسعة، وطبعة تتغير مع الوقت. البسه لحد ما يبقى بتاعك."
    },
    colors: [
      { id: "black", hex: "#111111", name: { en: "Black", ar: "أسود" } },
      { id: "white", hex: "#f2f2f2", name: { en: "White", ar: "أبيض" } },
      { id: "stone", hex: "#cfc8bc", name: { en: "Stone", ar: "حجري" } }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "cargo-pants",
    category: "pants",
    featured: true,
    newest: true,
    price: 138,
    name: { en: "SUVANA Cargo Pants", ar: "بنطلون كارجو سفانا" },
    description: {
      en: "Utility without the costume. Articulated knee, six pockets, matte hardware. Cut straight from hip to hem.",
      ar: "وظيفية من غير مبالغة. ركبة مفصلية، ستة جيوب، معدن مطفي. قصة مستقيمة من الورك للحافة."
    },
    colors: [
      { id: "black", hex: "#161616", name: { en: "Black", ar: "أسود" } },
      { id: "khaki", hex: "#6e664e", name: { en: "Khaki", ar: "كاكي" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca9c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "oversized-jacket",
    category: "jackets",
    featured: true,
    newest: true,
    price: 248,
    name: { en: "SUVANA Oversized Jacket", ar: "جاكت سفانا أوفرسايز" },
    description: {
      en: "A shell for weather and attitude. Storm flap, quiet lining, and a collar that stands. The piece you throw on last.",
      ar: "غلاف للطقس وللمزاج. سحاب محمي، بطانة هادئة، وياقة واقفة. القطعة اللي بتتحط في الآخر."
    },
    colors: [
      { id: "black", hex: "#0c0c0c", name: { en: "Black", ar: "أسود" } },
      { id: "charcoal", hex: "#2b2b2b", name: { en: "Charcoal", ar: "فحمي" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "graphic-hoodie",
    category: "hoodies",
    featured: false,
    newest: true,
    price: 158,
    name: { en: "SUVANA Shadow Hoodie", ar: "هودى سفانا شادو" },
    description: {
      en: "Tonal print that only reads in certain light. Same heavy fleece as the Essential, louder in silence.",
      ar: "طبعة نغمية تظهر في ضوء معيّن. نفس الفليز الثقيل، أوضح في الصمت."
    },
    colors: [
      { id: "black", hex: "#101010", name: { en: "Black", ar: "أسود" } },
      { id: "ink", hex: "#1a2030", name: { en: "Ink", ar: "حبر" } }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "core-set",
    category: "sets",
    featured: false,
    newest: false,
    price: 198,
    name: { en: "SUVANA Core Sweatset", ar: "سويت ست سفانا كور" },
    description: {
      en: "Everyday uniform. Mid-weight loopback, clean lines, no logos shouting. For people who already know.",
      ar: "يونيفورم يومي. وزن متوسط، خطوط نظيفة، من غير شعارات صاخبة. للناس اللي عارفة."
    },
    colors: [
      { id: "grey", hex: "#5a5a5a", name: { en: "Ash", ar: "رمادي" } },
      { id: "black", hex: "#141414", name: { en: "Black", ar: "أسود" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "longline-tee",
    category: "tshirts",
    featured: false,
    newest: true,
    price: 64,
    name: { en: "SUVANA Longline Tee", ar: "تيشيرت سفانا لونج لاين" },
    description: {
      en: "Extended hem, dropped armhole. Layer it under a jacket or let it hang. Soft hand, hard presence.",
      ar: "طول زيادة، فتحة كم ساقطة. تحت الجاكت أو لوحده. ملمس ناعم وحضور قوي."
    },
    colors: [
      { id: "black", hex: "#111", name: { en: "Black", ar: "أسود" } },
      { id: "white", hex: "#eee", name: { en: "White", ar: "أبيض" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618354690434-4370a8b5d8c3?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "wide-pants",
    category: "pants",
    featured: false,
    newest: false,
    price: 128,
    name: { en: "SUVANA Wide Pants", ar: "بنطلون سفانا واسع" },
    description: {
      en: "Pleated front, floating drape. Streetwear cut with tailoring discipline. Pockets sit where your hands expect them.",
      ar: "كسرة أمامية وانسياب حر. قصة ستريت وير بانضباط تفصيل. الجيوب في المكان اللي إيدك بتدور عليه."
    },
    colors: [
      { id: "black", hex: "#1a1a1a", name: { en: "Black", ar: "أسود" } },
      { id: "stone", hex: "#9a9488", name: { en: "Stone", ar: "حجري" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca9c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "bomber",
    category: "jackets",
    featured: false,
    newest: false,
    price: 268,
    name: { en: "SUVANA Night Bomber", ar: "بومبر سفانا نايت" },
    description: {
      en: "Rib collar, matte zip, interior storm cuff. Compact volume with a long shadow.",
      ar: "ياقة رib، سحاب مطفي، أسورة داخلية ضد الهواء. حجم مضغوط وظل طويل."
    },
    colors: [
      { id: "black", hex: "#0b0b0b", name: { en: "Black", ar: "أسود" } },
      { id: "olive", hex: "#2f3628", name: { en: "Olive", ar: "زيتي" } }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: "washed-tee",
    category: "tshirts",
    featured: false,
    newest: false,
    price: 54,
    name: { en: "SUVANA Washed Tee", ar: "تيشيرت سفانا مغسول" },
    description: {
      en: "Enzyme wash, broken-in from day one. Slight twist in the grain. Nothing new about looking new.",
      ar: "غسيل إنزيم، مكسور من أول يوم. خيط فيه التواء خفيف. مفيش حاجة جديدة في إنك تبان جديد."
    },
    colors: [
      { id: "black", hex: "#2a2a2a", name: { en: "Washed Black", ar: "أسود مغسول" } },
      { id: "bone", hex: "#d8d2c8", name: { en: "Bone", ar: "عاجي" } }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=80"
    ]
  }
];

window.SUVANA_LOOKBOOK = [
  "https://images.unsplash.com/photo-1523398002811-dffb40d8e8a5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616adc40?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=1600&q=80"
];

window.SUVANA_INSTAGRAM = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523398002811-dffb40d8e8a5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616adc40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
];

window.SUVANA_HERO =
  "https://images.unsplash.com/photo-1523398002811-dffb40d8e8a5?auto=format&fit=crop&w=2400&q=80";

window.SUVANA_CATEGORIES = {
  hoodies: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1600&q=80",
  sets: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
  tshirts: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
  pants: "https://images.unsplash.com/photo-1548883354-7622d03aca9c?auto=format&fit=crop&w=1600&q=80"
};

window.getProductById = function (id) {
  return window.SUVANA_PRODUCTS.find(function (p) {
    return p.id === id;
  });
};
