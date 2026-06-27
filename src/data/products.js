// Maruti Steel India - Product Catalogue Database
// 38 Products across 7 Categories

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'sheets', name: 'Sheets & Plates' },
  { id: 'pipes', name: 'Pipes & Tubes' },
  { id: 'pipe-fittings', name: 'Pipe Fittings' },
  { id: 'flanges', name: 'Flanges' },
  { id: 'industrial-fittings', name: 'Valves & Fittings' },
  { id: 'fasteners', name: 'Fasteners' },
  { id: 'accessories', name: 'Accessories' }
];

export const products = [
  // CATEGORY: SHEETS & PLATES (Sheets, Plates, Coils, Strips)
  {
    id: 'ss-sheets',
    name: 'Stainless Steel Sheets',
    description: 'Hot rolled and cold rolled premium stainless steel sheets with various finishes (2B, BA, No.4, Hairline, Mirror). Highly corrosion-resistant and ideal for chemical vessels, architectural facades, and food equipment.',
    category: 'sheets',
    grades: ['304', '304L', '316', '316L', '321', '310S'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.20 AM.jpeg',
    sizes: '0.3mm to 6.0mm thickness',
    rating: 4.8,
    dateAdded: '2026-01-15'
  },
  {
    id: 'ss-plates',
    name: 'Stainless Steel Plates',
    description: 'Heavy-duty industrial grade stainless steel plates designed to withstand extreme pressure and temperatures. Extensively used in industrial manufacturing, structural engineering, oil & gas reactors, and shipbuilding.',
    category: 'sheets',
    grades: ['ASTM A240', '316L', '304', '317L', '904L', 'Dual Phase'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.21 AM.jpeg',
    sizes: '6.0mm to 100mm thickness',
    rating: 4.9,
    dateAdded: '2026-02-10'
  },
  {
    id: 'ss-coils',
    name: 'Stainless Steel Coils',
    description: 'Premium quality slit and wide SS coils with precise dimensional tolerance. Available in matte, polished, and custom surfaces, perfect for continuous fabrication, stamping, and tube manufacturing.',
    category: 'sheets',
    grades: ['304', '316', '430', '201', '316L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.21 AM (1).jpeg',
    sizes: 'Width: 1000mm, 1219mm, 1500mm, custom slit widths',
    rating: 4.7,
    dateAdded: '2026-03-01'
  },
  {
    id: 'ss-strips',
    name: 'Stainless Steel Strips',
    description: 'Precision thin-gauge stainless steel strips with high tensile strength and excellent formability. Suitable for spring applications, electronics, automotive components, and medical instruments.',
    category: 'sheets',
    grades: ['301 Spring Hard', '304', '316', '409'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.27.29 AM.jpeg',
    sizes: 'Thickness: 0.05mm to 3.0mm, Widths: 5mm to 500mm',
    rating: 4.6,
    dateAdded: '2026-04-12'
  },

  // CATEGORY: PIPES & TUBES (SS Slot Pipes, Round Pipes, Square Pipes, Rectangular Pipes, Seamless Pipes, Welded Pipes)
  {
    id: 'ss-slot-pipes',
    name: 'SS Slot Pipes',
    description: 'Specially engineered slotted pipes for architectural glass railings and drainage filtration systems. Made with precision-cut slots and mirror/satin finishes for high-end aesthetic installations.',
    category: 'pipes',
    grades: ['304', '316', '316L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.23 AM.jpeg',
    sizes: 'Diameter 50.8mm, 63.5mm, 76.2mm with custom slots',
    rating: 4.9,
    dateAdded: '2026-05-20'
  },
  {
    id: 'ss-round-pipes',
    name: 'SS Round Pipes',
    description: 'Premium stainless steel round pipes for fluid transportation, decorative balustrades, structural framework, and automotive exhaust systems. Exceptional durability and anti-rust properties.',
    category: 'pipes',
    grades: ['ASTM A312', 'TP304', 'TP316L', 'TP321'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.23 AM (1).jpeg',
    sizes: 'OD: 1/4" to 24", Schedule: 10S to XXS',
    rating: 4.9,
    dateAdded: '2026-01-20'
  },
  {
    id: 'ss-square-pipes',
    name: 'SS Square Pipes',
    description: 'High-strength structural square hollow sections (SHS). Features clean welded seams and sharp corners, widely utilized in industrial machinery building, safety barriers, gates, and furniture.',
    category: 'pipes',
    grades: ['304', '316', '202'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.23 AM (2).jpeg',
    sizes: '20x20mm to 150x150mm, Wall thickness: 1mm to 8mm',
    rating: 4.8,
    dateAdded: '2026-03-15'
  },
  {
    id: 'ss-rectangular-pipes',
    name: 'SS Rectangular Pipes',
    description: 'Stainless steel rectangular hollow sections (RHS) manufactured to international quality standards. Ideal for load-bearing frameworks, structural support in architectural projects, and transport trailer manufacturing.',
    category: 'pipes',
    grades: ['304', '316L', '310S'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.27.30 AM.jpeg',
    sizes: '20x10mm to 200x100mm, Wall thickness: 1.2mm to 10mm',
    rating: 4.7,
    dateAdded: '2026-02-28'
  },
  {
    id: 'seamless-pipes',
    name: 'Stainless Steel Seamless Pipes',
    description: 'Extruded high-pressure seamless pipes with no weld seam. Specially manufactured for extreme hazardous environments, high temperature steam systems, chemical reactors, and deep-sea petroleum transport.',
    category: 'pipes',
    grades: ['ASTM A312', 'TP316/316L', 'TP304/304L', 'TP347H', 'UNS S31803 Duplex'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.24 AM.jpeg',
    sizes: '1/8" NB to 24" NB, SCH 5S to SCH 160 & XXS',
    rating: 5.0,
    dateAdded: '2026-05-02'
  },
  {
    id: 'welded-pipes',
    name: 'Stainless Steel Welded Pipes',
    description: 'Electric fusion welded (EFW) and longitudinal submerged arc welded (LSAW) stainless steel pipes. Tested online for weld seam integrity, ideal for water supply pipelines, paper mills, and industrial waste treatment.',
    category: 'pipes',
    grades: ['ASTM A312', 'ASTM A358', '304', '316L', '321'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.24 AM (1).jpeg',
    sizes: '1/2" NB to 48" NB, SCH 5S to SCH 40S',
    rating: 4.7,
    dateAdded: '2026-05-18'
  },

  // CATEGORY: PIPE FITTINGS (SS Elbows, Tees, Reducers, End Caps, Stub Ends, Pipe Nipples, Couplings, Unions, Cross Fittings)
  {
    id: 'ss-elbows-90',
    name: 'SS 90-Degree Elbows',
    description: '90-Degree butt-weld pipe elbow used to change fluid flow direction by 90 degrees. Made under tight tolerances to prevent pressure drops and turbulent flow. Available in Long Radius (LR) and Short Radius (SR).',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304L', 'WP316L', 'WP321'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.25 AM.jpeg',
    sizes: '1/2" to 36" (Sch 10s to Sch 80s)',
    rating: 4.9,
    dateAdded: '2026-04-01'
  },
  {
    id: 'ss-elbows-45',
    name: 'SS 45-Degree Elbows',
    description: '45-Degree stainless steel elbow designed to modify line flow angles gently. Reduces hydraulic resistance and prevents wear in slurry or high-velocity liquid piping systems.',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.25 AM (1).jpeg',
    sizes: '1/2" to 24" NB',
    rating: 4.8,
    dateAdded: '2026-04-05'
  },
  {
    id: 'ss-elbows-lr',
    name: 'SS Long Radius (LR) Elbows',
    description: 'Long Radius (center-to-end distance equal to 1.5 times the pipe diameter) elbows for smooth piping turns. Drastically reduces frictional pressure loss and internal pipeline erosion.',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP316', 'WP304', 'WP310S'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.27.30 AM (1).jpeg',
    sizes: '1" to 48" NB, SCH 10 to SCH XXS',
    rating: 4.9,
    dateAdded: '2026-04-10'
  },
  {
    id: 'ss-elbows-sr',
    name: 'SS Short Radius (SR) Elbows',
    description: 'Short Radius (center-to-end distance equal to 1.0 times the pipe diameter) elbows. Specifically engineered for tight, space-constrained industrial installations where clearance is limited.',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP316L', 'WP304L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.27.30 AM (2).jpeg',
    sizes: '3/4" to 24" NB',
    rating: 4.7,
    dateAdded: '2026-04-15'
  },
  {
    id: 'ss-tees',
    name: 'SS Equal & Reducing Tees',
    description: 'Butt-weld and forged high-pressure Tees used to merge or split fluid flows. Includes Equal Tees (same outlet size) and Reducing Tees (smaller branch size) for integrated industrial process plumbing.',
    category: 'pipe-fittings',
    grades: ['WP304', 'WP316L', 'WP310', 'Duplex'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.25 AM (2).jpeg',
    sizes: '1/2" to 24" NB',
    rating: 4.8,
    dateAdded: '2026-01-30'
  },
  {
    id: 'ss-reducers',
    name: 'SS Concentric & Eccentric Reducers',
    description: 'SS Reducers used to transition between different pipe diameters. Concentric reducers maintain center line alignment (vertical lines), while Eccentric reducers maintain flat top or bottom lines (horizontal gas/steam lines).',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L', 'WP321'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.26 AM.jpeg',
    sizes: '3/4" x 1/2" to 36" x 24" NB',
    rating: 4.8,
    dateAdded: '2026-03-25'
  },
  {
    id: 'ss-end-caps',
    name: 'SS End Caps',
    description: 'Dome-shaped butt-weld end caps used to block fluid flow and close off pipe ends permanently. Made of heavy forged steel to handle line shut-off pressures safely.',
    category: 'pipe-fittings',
    grades: ['WP304L', 'WP316L', '310S'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.27.31 AM.jpeg',
    sizes: '1/2" to 24" NB',
    rating: 4.7,
    dateAdded: '2026-02-15'
  },
  {
    id: 'ss-stub-ends',
    name: 'SS Lap Joint Stub Ends',
    description: 'Lap joint stub ends designed to work in conjunction with lap joint (backing) flanges. Allows quick pipeline disassembly, inspection, and cleaning in food processing and chemical plants.',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.28.17 AM.jpeg',
    sizes: '1/2" to 12" NB (Short/Long Type)',
    rating: 4.6,
    dateAdded: '2026-04-18'
  },
  {
    id: 'ss-pipe-nipples',
    name: 'SS Pipe Nipples',
    description: 'Short lengths of stainless steel pipe with male threads at both ends or one end (barrel and hex nipples). Used to connect valves and other fittings in high pressure water and chemical instrumentation.',
    category: 'pipe-fittings',
    grades: ['304', '316', '316L (Threaded NPT/BSP)'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.26 AM (1).jpeg',
    sizes: 'Length: 2" to 12", OD: 1/8" to 4" NB',
    rating: 4.7,
    dateAdded: '2026-05-10'
  },
  {
    id: 'ss-couplings',
    name: 'SS Couplings (Full & Half)',
    description: 'Forged threaded and socket-weld couplings used to join pipes of same or different sizes. Full couplings are for complete pipeline extensions, while half couplings are for branch outlets.',
    category: 'pipe-fittings',
    grades: ['ASTM A182', 'F304', 'F316L', '3000 Class'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.28.17 AM (1).jpeg',
    sizes: '1/4" to 4" (Socket weld / Threaded)',
    rating: 4.7,
    dateAdded: '2026-05-22'
  },
  {
    id: 'ss-unions',
    name: 'SS Unions (M/F & F/F)',
    description: 'Threaded high-pressure pipe unions designed to allow quick decoupling of pipes for maintenance or device replacement. Features leak-proof metal-to-metal seating.',
    category: 'pipe-fittings',
    grades: ['F304', 'F316', '3000 PSI Rating'],
    image: 'https://images.unsplash.com/photo-1585713181935-d5f622cc2415?auto=format&fit=crop&w=600&q=80',
    sizes: '1/4" to 3" NB NPT/BSP',
    rating: 4.8,
    dateAdded: '2026-03-05'
  },
  {
    id: 'ss-cross-fittings',
    name: 'SS Cross Fittings',
    description: 'Four-way pipe fittings used to connect four pipes at a central intersection. Fabricated for distributing heat, chemical processes, and hydraulic power fluids in automated machines.',
    category: 'pipe-fittings',
    grades: ['WP304', 'WP316L', 'F316'],
    image: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 12" NB',
    rating: 4.6,
    dateAdded: '2026-02-20'
  },

  // CATEGORY: FLANGES (SS Flanges, Slip-On Flanges, Blind Flanges, Threaded Flanges, Weld Neck Flanges, Socket Weld Flanges)
  {
    id: 'ss-flanges',
    name: 'Industrial SS Flanges',
    description: 'Forged plate and hubbed flanges designed to connect pipes, valves, pumps, and other equipment to form a piping system. Easy cleaning, inspection, and modification.',
    category: 'flanges',
    grades: ['ASTM A182', 'F304', 'F316L', 'F321', 'F310'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.27 AM.jpeg',
    sizes: '1/2" to 48", Class 150 to Class 2500',
    rating: 4.9,
    dateAdded: '2026-01-28'
  },
  {
    id: 'slip-on-flanges',
    name: 'SS Slip-On Flanges (SORF)',
    description: 'Slip-on flanges designed to slide over the end of the pipe and then be welded both inside and outside. Offers cost-effective pipeline joints and easier alignment than weld neck designs.',
    category: 'flanges',
    grades: ['ANSI B16.5', 'F304L', 'F316L'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.27 AM (1).jpeg',
    sizes: '1/2" to 24" (Class 150/300/600)',
    rating: 4.9,
    dateAdded: '2026-02-18'
  },
  {
    id: 'blind-flanges',
    name: 'SS Blind Flanges (BLRF)',
    description: 'Solid forged steel flanges without a center bore. Used to seal the ends of piping systems, pressure vessel openings, or tank ports. Built to withstand massive backpressure.',
    category: 'flanges',
    grades: ['F304', 'F316L', 'F51 Duplex'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.27 AM (2).jpeg',
    sizes: '1/2" to 36" NB',
    rating: 4.8,
    dateAdded: '2026-03-20'
  },
  {
    id: 'threaded-flanges',
    name: 'SS Threaded Flanges',
    description: 'Flanges fitted with internal pipe threads (NPT/BSP) in the bore, matching external threads on the pipe. Ideal for highly volatile gas pipeline installations where welding is prohibited.',
    category: 'flanges',
    grades: ['ASTM A182', 'F304', 'F316L'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 6" NB',
    rating: 4.7,
    dateAdded: '2026-04-22'
  },
  {
    id: 'weld-neck-flanges',
    name: 'SS Weld Neck Flanges (WNRF)',
    description: 'High-strength flanges featuring a long tapered hub that is butt-welded to the pipe. Transfer stress from the flange to the pipe itself, perfect for high pressure and severe temperature service.',
    category: 'flanges',
    grades: ['ASTM A182', 'F316L', 'F304L', 'F347H'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 48" NB, Class 150 to Class 2500',
    rating: 5.0,
    dateAdded: '2026-05-14'
  },
  {
    id: 'socket-weld-flanges',
    name: 'SS Socket Weld Flanges (SWRF)',
    description: 'Similar to a slip-on flange, but the pipe is inserted into a socket bore and welded around the shoulder. Primarily used for small-size high-pressure piping lines (chemical dosing lines).',
    category: 'flanges',
    grades: ['ANSI B16.5', 'F304', 'F316L'],
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 4" NB (Class 150 to 1500)',
    rating: 4.8,
    dateAdded: '2026-05-25'
  },

  // CATEGORY: VALVES & FITTINGS (Ball Valves, Gate Valves, Check Valves, Ferrules, Clamps)
  {
    id: 'ss-ball-valves',
    name: 'SS Ball Valves (1/2/3 Piece)',
    description: 'Stainless steel quarter-turn rotary ball valves. Designed for leak-tight shut-off or throttling, using a floating or trunnion ball. Corrosion-resistant and fire-safe certified for petrochemical loops.',
    category: 'industrial-fittings',
    grades: ['CF8', 'CF8M (316)', 'CF3M (316L)', 'PTFE Seats'],
    image: '/images/WhatsApp Image 2026-06-27 at 11.11.28 AM.jpeg',
    sizes: '1/4" to 8" (Screwed, Flanged, Socket-weld)',
    rating: 4.9,
    dateAdded: '2026-02-05'
  },
  {
    id: 'ss-gate-valves',
    name: 'SS Gate Valves',
    description: 'Heavy duty multi-turn rising stem gate valves. Designed for full open or full closed service in pipelines. Minimal fluid resistance and high pressure tolerance, ideal for slurry and oil pipelines.',
    category: 'industrial-fittings',
    grades: ['ASTM A351', 'CF8M', 'CF8', 'Stellite Faced'],
    image: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 24" (Class 150/300/600)',
    rating: 4.8,
    dateAdded: '2026-03-12'
  },
  {
    id: 'ss-check-valves',
    name: 'SS Non-Return Check Valves',
    description: 'Swing check, lift check, and dual plate check valves. Automatically prevents backflow in chemical processing pipelines and water treatment systems without external power or manual actuation.',
    category: 'industrial-fittings',
    grades: ['CF8', 'CF8M', 'Hastelloy Spring', 'Metal Seated'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 16" NB',
    rating: 4.7,
    dateAdded: '2026-04-20'
  },
  {
    id: 'ss-ferrules',
    name: 'SS Twin Ferrule Compression Fittings',
    description: 'High-precision double ferrule fittings for gas chromatography, oil hydraulics, and laboratory instrumentation loops. Delivers leak-proof, torque-free seals under severe vibrations.',
    category: 'industrial-fittings',
    grades: ['316 Cold Drawn Barstock', 'Dual Ferrule System'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    sizes: '1/16" to 1" Tube OD, 3mm to 25mm Tube OD',
    rating: 4.8,
    dateAdded: '2026-05-05'
  },
  {
    id: 'ss-clamps',
    name: 'SS Tri-Clamp Fittings',
    description: 'Sanitary tri-clamp quick-release pipe clamps. Extensively used in pharmaceutical, food, dairy, and brewery pipelines for rapid dismounting and sterile flush cleaning.',
    category: 'industrial-fittings',
    grades: ['304', '316L High Mirror Polish'],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 8" (TC Connection)',
    rating: 4.9,
    dateAdded: '2026-05-16'
  },

  // CATEGORY: FASTENERS (SS Fasteners, SS Nuts, SS Bolts, SS Washers)
  {
    id: 'ss-fasteners',
    name: 'SS Industrial Fasteners',
    description: 'Premium corrosion-proof threaded rods, studs, and custom anchors for chemical plants, coastal construction, and automotive machinery. Superior shear strength and rust resistance.',
    category: 'fasteners',
    grades: ['A2-70', 'A4-80 (316)', 'Duplex S31803', 'Super Duplex'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    sizes: 'M3 to M64, custom lengths up to 3 meters',
    rating: 4.8,
    dateAdded: '2026-01-10'
  },
  {
    id: 'ss-nuts',
    name: 'SS Hex & Lock Nuts',
    description: 'Hexagonal nuts, nylon insert lock nuts, dome nuts, and heavy hex nuts. Precision thread tapping ensures smooth installation and high vibration-resistance under stress.',
    category: 'fasteners',
    grades: ['SS304', 'SS316', 'ASTM A194 Gr 8/8M'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    sizes: 'M4 to M48, 1/8" to 2" UNC/UNF',
    rating: 4.7,
    dateAdded: '2026-02-08'
  },
  {
    id: 'ss-bolts',
    name: 'SS Hex Head & Carriage Bolts',
    description: 'Full threaded and half threaded hex bolts, socket cap screws, and anchor bolts. Hot forged heads provide excellent structural load distribution and thread integrity.',
    category: 'fasteners',
    grades: ['SS304', 'SS316', 'B8/B8M Class 2'],
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
    sizes: 'M5 to M50, lengths up to 500mm',
    rating: 4.8,
    dateAdded: '2026-03-10'
  },
  {
    id: 'ss-washers',
    name: 'SS Plain & Spring Washers',
    description: 'Flat plain washers, spring split washers, star lock washers, and tab washers. Used to distribute load, prevent bolt loosening, and protect mating surfaces from scratching.',
    category: 'fasteners',
    grades: ['SS304', 'SS316', 'Silicon Bronze', 'A2/A4'],
    image: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=600&q=80',
    sizes: 'M2 to M52, thickness 0.5mm to 8mm',
    rating: 4.6,
    dateAdded: '2026-04-25'
  },

  // CATEGORY: ACCESSORIES (Industrial Pipe Fittings & Accessories)
  {
    id: 'industrial-pipe-accessories',
    name: 'Industrial Pipe Fittings & Accessories',
    description: 'A complete range of piping accessories including spiral wound gaskets, flange isolation kits, Teflon tape, U-bolts, pipe hangers, and expansion joints to ensure complete pipeline sealing and support.',
    category: 'accessories',
    grades: ['Graphite Filled 316', 'PTFE', 'EPDM', 'Zinc Plated Steel'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    sizes: '1/2" to 48" sizes, matching standard flanges',
    rating: 4.7,
    dateAdded: '2026-05-30'
  }
];
