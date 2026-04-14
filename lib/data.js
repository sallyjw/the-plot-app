// ─── Sample data — replace with your real database later ─────────────────────

export const trips = [
  {
    id:     'euro-summer',
    number: '01',
    name:   'EURO SUMMER',
    active: true,
    destinations: [
      { id: 'milan',       name: 'MILAN',      start: 16, end: 17, img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=600&fit=crop' },
      { id: 'cinqueterre', name: 'CINQ TERRE', start: 18, end: 24, img: 'https://images.unsplash.com/photo-1571677246347-5040036a7bf3?w=600&fit=crop' },
      { id: 'florence',    name: 'FLORENCE',   start: 25, end: 27, img: 'https://images.unsplash.com/photo-1541370976299-4d24be5e0090?w=600&fit=crop' },
    ],
    events: {
      16: [
        { id: 'e1', label: '10AM FLIGHT LHR-MXP',            type: 'flight'  },
        { id: 'e2', label: '1PM HOTEL CHECK-IN FOUR SEASONS', type: 'hotel'   },
        { id: 'e3', label: '8PM DINNER TRIPPA',               type: 'dining'  },
      ],
    },
    restaurants: {
      milan:       [{ id: 'r1', name: 'Trippa' }],
      cinqueterre: [],
      florence:    [],
    },
    hotels: {
      milan:       [{ id: 'h1', name: 'Four Seasons Milano' }],
      cinqueterre: [],
      florence:    [],
    },
    logistics: [
      { id: 'l1', label: '✈ LHR → MXP', detail: 'Jun 16, 10:00am' },
    ],
    thingstodo: {
      milan:       [],
      cinqueterre: [],
      florence:    [],
    },
  },
  { id: 'trip-2', number: '02', name: 'TRIP 2', active: false, destinations: [], events: {}, restaurants: {}, hotels: {}, logistics: [], thingstodo: {} },
  { id: 'trip-3', number: '03', name: 'TRIP 3', active: false, destinations: [], events: {}, restaurants: {}, hotels: {}, logistics: [], thingstodo: {} },
];

export function getTripById(id) {
  return trips.find(t => t.id === id);
}

// Calendar weeks for Euro Summer (June 2026, starting Jun 15 = Sunday)
export const calendarWeeks = [
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
];

export function ordinal(n) {
  if (n % 10 === 1 && n % 100 !== 11) return n + 'ST';
  if (n % 10 === 2 && n % 100 !== 12) return n + 'ND';
  if (n % 10 === 3 && n % 100 !== 13) return n + 'RD';
  return n + 'TH';
}
