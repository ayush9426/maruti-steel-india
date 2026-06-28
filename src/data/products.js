// Maruti Steel India - Product Catalogue Database
// 38 Products across 7 Categories

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'slot-pipe', name: 'Slot Pipe' },
  { id: 'sheets', name: 'Sheets & Plates' },
  { id: 'pipe-fittings', name: 'Pipe Fittings' },
  { id: 'industrial-fittings', name: 'Industrial Fittings' }
];

export const products = [
  // CATEGORY: SHEETS & PLATES (Sheets, Plates, Coils, Strips)
  {
    id: 'ss-sheets',
    name: 'Stainless Steel Sheets',
    category: 'sheets',
    grades: ['304', '304L', '316', '316L', '321', '310S'],
    image: '/imageofmaruti/sheet1.png',
    sizes: '0.3mm to 6.0mm thickness',
  },
  {
    id: 'ss-plates',
    name: 'Stainless Steel Plates',
    category: 'sheets',
    grades: ['ASTM A240', '316L', '304', '317L', '904L', 'Dual Phase'],
    image: '/imageofmaruti/plate1.jpg',
    sizes: '6.0mm to 100mm thickness',
  },
  {
    id: 'ss-coils',
    name: 'Stainless Steel Coils',
    category: 'sheets',
    grades: ['304', '316', '430', '201', '316L'],
    image: '/imageofmaruti/coil1.jpg',
    sizes: 'Width: 1000mm, 1219mm, 1500mm, custom slit widths',
  },
  {
    id: 'ss-strips',
    name: 'Stainless Steel Strips',
    category: 'sheets',
    grades: ['301 Spring Hard', '304', '316', '409'],
    image: '/imageofmaruti/stripe1.jpg',
    sizes: 'Thickness: 0.05mm to 3.0mm, Widths: 5mm to 500mm',
  },

  // CATEGORY: SLOT PIPE (SS Slot Pipes, Round Pipes, Square Pipes, Rectangular Pipes, Seamless Pipes, Welded Pipes)
  {
    id: 'ss-slot-pipes',
    name: 'SS Slot Pipes',
    category: 'slot-pipe',
    grades: ['304', '316', '316L'],
    image: '/imageofmaruti/slot1.jpg',
    sizes: 'Diameter 50.8mm, 63.5mm, 76.2mm with custom slots',
  },
  {
    id: 'ss-round-pipes',
    name: 'SS Round Pipes',
    category: 'slot-pipe',
    grades: ['ASTM A312', 'TP304', 'TP316L', 'TP321'],
    image: '/imageofmaruti/pipe1.jpg',
    sizes: 'OD: 1/4" to 24", Schedule: 10S to XXS',
  },
  {
    id: 'ss-square-pipes',
    name: 'SS Square Pipes',
    category: 'slot-pipe',
    grades: ['304', '316', '202'],
    image: '/imageofmaruti/squarepipe1.jpg',
    sizes: '20x20mm to 150x150mm, Wall thickness: 1mm to 8mm',
  },
  {
    id: 'ss-rectangular-pipes',
    name: 'SS Rectangular Pipes',
    category: 'slot-pipe',
    grades: ['304', '316L', '310S'],
    image: '/imageofmaruti/rectangularpipe1.jpg',
    sizes: '20x10mm to 200x100mm, Wall thickness: 1.2mm to 10mm',
  },
  {
    id: 'seamless-pipes',
    name: 'Stainless Steel Seamless Pipes',
    category: 'slot-pipe',
    grades: ['ASTM A312', 'TP316/316L', 'TP304/304L', 'TP347H', 'UNS S31803 Duplex'],
    image: '/imageofmaruti/seamlesspipe1.jpg',
    sizes: '1/8" NB to 24" NB, SCH 5S to SCH 160 & XXS',
  },
  {
    id: 'welded-pipes',
    name: 'Stainless Steel Welded Pipes',
    category: 'slot-pipe',
    grades: ['ASTM A312', 'ASTM A358', '304', '316L', '321'],
    image: '/imageofmaruti/weldedpipe1.jpg',
    sizes: '1/2" NB to 48" NB, SCH 5S to SCH 40S',
  },

  // CATEGORY: PIPE FITTINGS (SS Elbows, Tees, Reducers, End Caps, Stub Ends, Pipe Nipples, Couplings, Unions, Cross Fittings)
  {
    id: 'ss-elbows-90',
    name: 'SS 90-Degree Elbows',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304L', 'WP316L', 'WP321'],
    image: '/imageofmaruti/ss90degreeelbow1.jpg',
    sizes: '1/2" to 36" (Sch 10s to Sch 80s)',
  },
  {
    id: 'ss-elbows-45',
    name: 'SS 45-Degree Elbows',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L'],
    image: '/imageofmaruti/ss45degreeelbow1.jpg',
    sizes: '1/2" to 24" NB',
  },
  {
    id: 'ss-tees',
    name: 'SS Equal & Reducing Tees',
    category: 'pipe-fittings',
    grades: ['WP304', 'WP316L', 'WP310', 'Duplex'],
    image: '/imageofmaruti/equalandreducingtee1.jpg',
    sizes: '1/2" to 24" NB',
  },
  {
    id: 'ss-reducers',
    name: 'SS Concentric & Eccentric Reducers',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L', 'WP321'],
    image: '/imageofmaruti/eccentricand concentricreducer1.jpg',
    sizes: '3/4" x 1/2" to 36" x 24" NB',
  },
  {
    id: 'ss-end-caps',
    name: 'SS End Caps',
    category: 'pipe-fittings',
    grades: ['WP304L', 'WP316L', '310S'],
    image: '/imageofmaruti/endcaps1.jpg',
    sizes: '1/2" to 24" NB',
  },
  {
    id: 'ss-stub-ends',
    name: 'SS Lap Joint Stub Ends',
    category: 'pipe-fittings',
    grades: ['ASTM A403', 'WP304', 'WP316L'],
    image: '/imageofmaruti/lapjointstubend1.jpg',
    sizes: '1/2" to 12" NB (Short/Long Type)',
  },
  {
    id: 'ss-pipe-nipples',
    name: 'SS Pipe Nipples',
    category: 'pipe-fittings',
    grades: ['304', '316', '316L (Threaded NPT/BSP)'],
    image: '/imageofmaruti/pipenipple1.jpg',
    sizes: 'Length: 2" to 12", OD: 1/8" to 4" NB',
  },
  {
    id: 'ss-couplings',
    name: 'SS Couplings (Full & Half)',
    category: 'pipe-fittings',
    grades: ['ASTM A182', 'F304', 'F316L', '3000 Class'],
    image: '/imageofmaruti/coupling1.jpg',
    sizes: '1/4" to 4" (Socket weld / Threaded)',
  },
  {
    id: 'ss-cross-fittings',
    name: 'SS Cross Fittings',
    category: 'pipe-fittings',
    grades: ['WP304', 'WP316L', 'F316'],
    image: '/imageofmaruti/crossfitting1.jpg',
    sizes: '1/2" to 12" NB',
  },

  // CATEGORY: INDUSTRIAL FITTINGS (Flanges, Valves, Fasteners, Accessories)
  {
    id: 'ss-flanges',
    name: 'Industrial SS Flanges',
    category: 'industrial-fittings',
    grades: ['ASTM A182', 'F304', 'F316L', 'F321', 'F310'],
    image: '/imageofmaruti/flanges1.jpg',
    sizes: '1/2" to 48", Class 150 to Class 2500',
  },
  {
    id: 'ss-ball-valves',
    name: 'SS Ball Valves (1/2/3 Piece)',
    category: 'industrial-fittings',
    grades: ['CF8', 'CF8M (316)', 'CF3M (316L)', 'PTFE Seats'],
    image: '/imageofmaruti/ballvalve1.jpg',
    sizes: '1/4" to 8" (Screwed, Flanged, Socket-weld)',
  },
  {
    id: 'ss-gate-valves',
    name: 'SS Gate Valves',
    category: 'industrial-fittings',
    grades: ['ASTM A351', 'CF8M', 'CF8', 'Stellite Faced'],
    image: '/imageofmaruti/gatevalve1.jpg',
    sizes: '1/2" to 24" (Class 150/300/600)',
  },
  {
    id: 'ss-check-valves',
    name: 'SS Non-Return Check Valves',
    category: 'industrial-fittings',
    grades: ['CF8', 'CF8M', 'Hastelloy Spring', 'Metal Seated'],
    image: '/imageofmaruti/nonreturnvalve1.jpg',
    sizes: '1/2" to 16" NB',
  },
  {
    id: 'ss-ferrules',
    name: 'SS Twin Ferrule Compression Fittings',
    category: 'industrial-fittings',
    grades: ['316 Cold Drawn Barstock', 'Dual Ferrule System'],
    image: '/imageofmaruti/ferrulacompressionfittings1.jpg',
    sizes: '1/16" to 1" Tube OD, 3mm to 25mm Tube OD',
  },


  {
    id: 'ss-fasteners',
    name: 'SS Industrial Fasteners',
    category: 'industrial-fittings',
    grades: ['A2-70', 'A4-80 (316)', 'Duplex S31803', 'Super Duplex'],
    image: '/imageofmaruti/fasners1.jpg',
    sizes: 'M3 to M64, custom lengths up to 3 meters',
  }
];
