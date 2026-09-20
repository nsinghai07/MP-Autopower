// ---------------------------------------------------------------
// EDIT ME: replace placeholder business details, phone numbers and
// office addresses below with your real information before launch.
// 'image' fields take a filename inside an images/ folder next to
// index.html (e.g. "BAT-001.jpg"); leave empty to show a placeholder.
// ---------------------------------------------------------------
const CONFIG = {
  "businessName": "MP AutoPower",
  "tagline": "Batteries & Tyres for Every Ride Across Madhya Pradesh",
  "phone": "+91 90000 00001",
  "phoneDial": "+919000000001",
  "whatsapp": "919893371053",
  "whatsappDisplay": "+91 98933 71053",
  "email": "care@mpautopower.example"
};

const REGIONS = [
  {
    "city": "Bhopal",
    "area": "MP Nagar Zone II",
    "pincode": "462011",
    "phone": "+91 90000 00011",
    "hours": "Mon–Sun, 9:30 AM – 8:30 PM"
  },
  {
    "city": "Indore",
    "area": "Bhawarkuan Main Road",
    "pincode": "452001",
    "phone": "+91 90000 00012",
    "hours": "Mon–Sun, 9:30 AM – 8:30 PM"
  },
  {
    "city": "Gwalior",
    "area": "City Centre, Gandhi Road",
    "pincode": "474011",
    "phone": "+91 90000 00013",
    "hours": "Mon–Sun, 9:30 AM – 8:00 PM"
  },
  {
    "city": "Ashoknagar",
    "area": "Station Road",
    "pincode": "473331",
    "phone": "+91 90000 00014",
    "hours": "Mon–Sat, 10:00 AM – 7:30 PM"
  },
  {
    "city": "Lalitpur",
    "area": "Jhansi Road, near Bus Stand",
    "pincode": "284403",
    "phone": "+91 90000 00015",
    "hours": "Mon–Sat, 10:00 AM – 7:30 PM"
  },
  {
    "city": "Satna",
    "area": "Rewa Road, Birla More",
    "pincode": "485001",
    "phone": "+91 90000 00016",
    "hours": "Mon–Sun, 9:30 AM – 8:00 PM"
  }
];

const BATTERY_CATEGORIES = {
  "car": "Car & SUV",
  "bike": "Two-Wheeler",
  "inverter": "Inverter & Home UPS",
  "commercial": "Commercial & Heavy Vehicle",
  "tractor": "Tractor & Farm Equipment"
};

const TYRE_CATEGORIES = {
  "car": "Car / SUV",
  "bike": "Two-Wheeler",
  "truck": "Truck & Bus",
  "tractor": "Tractor & Farm",
  "auto": "Three-Wheeler"
};

const BATTERIES = [
  {
    "id": "BAT-001",
    "brand": "Exide",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Exide Xpress 75",
    "ah": 75,
    "warrantyMonths": 36,
    "mrp": 15750,
    "priceWithExchange": 14650,
    "image": ""
  },
  {
    "id": "BAT-002",
    "brand": "Exide",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Exide Mileage 35",
    "ah": 35,
    "warrantyMonths": 24,
    "mrp": 7350,
    "priceWithExchange": 6710,
    "image": ""
  },
  {
    "id": "BAT-003",
    "brand": "Exide",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Exide Xpress 65",
    "ah": 65,
    "warrantyMonths": 24,
    "mrp": 13650,
    "priceWithExchange": 12510,
    "image": ""
  },
  {
    "id": "BAT-004",
    "brand": "Exide",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Exide Mileage 2.5",
    "ah": 2.5,
    "warrantyMonths": 18,
    "mrp": 650,
    "priceWithExchange": 600,
    "image": ""
  },
  {
    "id": "BAT-005",
    "brand": "Exide",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Exide Mileage 9",
    "ah": 9,
    "warrantyMonths": 18,
    "mrp": 2340,
    "priceWithExchange": 2130,
    "image": ""
  },
  {
    "id": "BAT-006",
    "brand": "Exide",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Exide Xpress 7",
    "ah": 7,
    "warrantyMonths": 30,
    "mrp": 1820,
    "priceWithExchange": 1690,
    "image": ""
  },
  {
    "id": "BAT-007",
    "brand": "Exide",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Exide Mileage 180",
    "ah": 180,
    "warrantyMonths": 42,
    "mrp": 29700,
    "priceWithExchange": 27090,
    "image": ""
  },
  {
    "id": "BAT-008",
    "brand": "Exide",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Exide Matrix 150",
    "ah": 150,
    "warrantyMonths": 48,
    "mrp": 24750,
    "priceWithExchange": 23110,
    "image": ""
  },
  {
    "id": "BAT-009",
    "brand": "Exide",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "Exide Mileage 120",
    "ah": 120,
    "warrantyMonths": 18,
    "mrp": 23400,
    "priceWithExchange": 21910,
    "image": ""
  },
  {
    "id": "BAT-010",
    "brand": "Exide",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "Exide Matrix 88",
    "ah": 88,
    "warrantyMonths": 24,
    "mrp": 17160,
    "priceWithExchange": 15950,
    "image": ""
  },
  {
    "id": "BAT-011",
    "brand": "Exide",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "Exide Matrix 88",
    "ah": 88,
    "warrantyMonths": 30,
    "mrp": 18040,
    "priceWithExchange": 16870,
    "image": ""
  },
  {
    "id": "BAT-012",
    "brand": "Exide",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "Exide Matrix 120",
    "ah": 120,
    "warrantyMonths": 18,
    "mrp": 24600,
    "priceWithExchange": 22580,
    "image": ""
  },
  {
    "id": "BAT-013",
    "brand": "Amaron",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Amaron Black 75",
    "ah": 75,
    "warrantyMonths": 30,
    "mrp": 17010,
    "priceWithExchange": 15510,
    "image": ""
  },
  {
    "id": "BAT-014",
    "brand": "Amaron",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Amaron Pro 65",
    "ah": 65,
    "warrantyMonths": 30,
    "mrp": 14740,
    "priceWithExchange": 13400,
    "image": ""
  },
  {
    "id": "BAT-015",
    "brand": "Amaron",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Amaron Pro 44",
    "ah": 44,
    "warrantyMonths": 30,
    "mrp": 9980,
    "priceWithExchange": 9040,
    "image": ""
  },
  {
    "id": "BAT-016",
    "brand": "Amaron",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Amaron Black 5",
    "ah": 5,
    "warrantyMonths": 24,
    "mrp": 1400,
    "priceWithExchange": 1310,
    "image": ""
  },
  {
    "id": "BAT-017",
    "brand": "Amaron",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Amaron Go 4",
    "ah": 4,
    "warrantyMonths": 18,
    "mrp": 1120,
    "priceWithExchange": 1020,
    "image": ""
  },
  {
    "id": "BAT-018",
    "brand": "Amaron",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "Amaron Black 9",
    "ah": 9,
    "warrantyMonths": 12,
    "mrp": 2530,
    "priceWithExchange": 2320,
    "image": ""
  },
  {
    "id": "BAT-019",
    "brand": "Amaron",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "Amaron Black 100",
    "ah": 100,
    "warrantyMonths": 12,
    "mrp": 21060,
    "priceWithExchange": 19660,
    "image": ""
  },
  {
    "id": "BAT-020",
    "brand": "Amaron",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "Amaron Go 150",
    "ah": 150,
    "warrantyMonths": 18,
    "mrp": 31590,
    "priceWithExchange": 28440,
    "image": ""
  },
  {
    "id": "BAT-021",
    "brand": "SF Sonic",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "SF Sonic Green 75",
    "ah": 75,
    "warrantyMonths": 36,
    "mrp": 14960,
    "priceWithExchange": 13560,
    "image": ""
  },
  {
    "id": "BAT-022",
    "brand": "SF Sonic",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "SF Sonic Shoferz 65",
    "ah": 65,
    "warrantyMonths": 30,
    "mrp": 12970,
    "priceWithExchange": 11770,
    "image": ""
  },
  {
    "id": "BAT-023",
    "brand": "SF Sonic",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "SF Sonic Storm 38",
    "ah": 38,
    "warrantyMonths": 42,
    "mrp": 7580,
    "priceWithExchange": 7040,
    "image": ""
  },
  {
    "id": "BAT-024",
    "brand": "SF Sonic",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "SF Sonic Shoferz 3",
    "ah": 3,
    "warrantyMonths": 30,
    "mrp": 740,
    "priceWithExchange": 680,
    "image": ""
  },
  {
    "id": "BAT-025",
    "brand": "SF Sonic",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "SF Sonic Green 7",
    "ah": 7,
    "warrantyMonths": 30,
    "mrp": 1730,
    "priceWithExchange": 1620,
    "image": ""
  },
  {
    "id": "BAT-026",
    "brand": "SF Sonic",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Motorcycle",
      "Electric Scooter (12V aux)"
    ],
    "model": "SF Sonic Shoferz 4",
    "ah": 4,
    "warrantyMonths": 18,
    "mrp": 990,
    "priceWithExchange": 900,
    "image": ""
  },
  {
    "id": "BAT-027",
    "brand": "SF Sonic",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "SF Sonic Green 150",
    "ah": 150,
    "warrantyMonths": 24,
    "mrp": 27790,
    "priceWithExchange": 25650,
    "image": ""
  },
  {
    "id": "BAT-028",
    "brand": "SF Sonic",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "SF Sonic Green 120",
    "ah": 120,
    "warrantyMonths": 18,
    "mrp": 22230,
    "priceWithExchange": 20570,
    "image": ""
  },
  {
    "id": "BAT-029",
    "brand": "SF Sonic",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "SF Sonic Storm 100",
    "ah": 100,
    "warrantyMonths": 18,
    "mrp": 19480,
    "priceWithExchange": 17720,
    "image": ""
  },
  {
    "id": "BAT-030",
    "brand": "SF Sonic",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "SF Sonic Shoferz 120",
    "ah": 120,
    "warrantyMonths": 18,
    "mrp": 23370,
    "priceWithExchange": 21380,
    "image": ""
  },
  {
    "id": "BAT-031",
    "brand": "Livguard",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Livguard LGS 75",
    "ah": 75,
    "warrantyMonths": 42,
    "mrp": 14490,
    "priceWithExchange": 13280,
    "image": ""
  },
  {
    "id": "BAT-032",
    "brand": "Livguard",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Livguard LGS 55",
    "ah": 55,
    "warrantyMonths": 48,
    "mrp": 10630,
    "priceWithExchange": 9890,
    "image": ""
  },
  {
    "id": "BAT-033",
    "brand": "Livguard",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Livguard Xtra 35",
    "ah": 35,
    "warrantyMonths": 24,
    "mrp": 6760,
    "priceWithExchange": 6170,
    "image": ""
  },
  {
    "id": "BAT-034",
    "brand": "Livguard",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Livguard LGS 100",
    "ah": 100,
    "warrantyMonths": 48,
    "mrp": 15180,
    "priceWithExchange": 14200,
    "image": ""
  },
  {
    "id": "BAT-035",
    "brand": "Livguard",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Livguard LGS 180",
    "ah": 180,
    "warrantyMonths": 42,
    "mrp": 27320,
    "priceWithExchange": 25180,
    "image": ""
  },
  {
    "id": "BAT-036",
    "brand": "Okaya",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Okaya Power Stat 220",
    "ah": 220,
    "warrantyMonths": 36,
    "mrp": 31940,
    "priceWithExchange": 28910,
    "image": ""
  },
  {
    "id": "BAT-037",
    "brand": "Okaya",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Okaya Jumbo Tubular 150",
    "ah": 150,
    "warrantyMonths": 42,
    "mrp": 21780,
    "priceWithExchange": 20340,
    "image": ""
  },
  {
    "id": "BAT-038",
    "brand": "Luminous",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Luminous SC 120",
    "ah": 120,
    "warrantyMonths": 36,
    "mrp": 19010,
    "priceWithExchange": 17410,
    "image": ""
  },
  {
    "id": "BAT-039",
    "brand": "Luminous",
    "category": "inverter",
    "categoryLabel": "Inverter & Home UPS",
    "vehicles": [
      "Home Inverter",
      "Small Office UPS"
    ],
    "model": "Luminous ILTT 180",
    "ah": 180,
    "warrantyMonths": 36,
    "mrp": 28510,
    "priceWithExchange": 26670,
    "image": ""
  },
  {
    "id": "BAT-040",
    "brand": "Luminous",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Luminous Red Charge 44",
    "ah": 44,
    "warrantyMonths": 30,
    "mrp": 8870,
    "priceWithExchange": 8030,
    "image": ""
  },
  {
    "id": "BAT-041",
    "brand": "Luminous",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Luminous Red Charge 75",
    "ah": 75,
    "warrantyMonths": 24,
    "mrp": 15120,
    "priceWithExchange": 13770,
    "image": ""
  },
  {
    "id": "BAT-042",
    "brand": "Luminous",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Luminous Red Charge 38",
    "ah": 38,
    "warrantyMonths": 48,
    "mrp": 7660,
    "priceWithExchange": 6970,
    "image": ""
  },
  {
    "id": "BAT-043",
    "brand": "Bosch",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Bosch S5 AGM 38",
    "ah": 38,
    "warrantyMonths": 48,
    "mrp": 9180,
    "priceWithExchange": 8310,
    "image": ""
  },
  {
    "id": "BAT-044",
    "brand": "Bosch",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Bosch S5 AGM 55",
    "ah": 55,
    "warrantyMonths": 30,
    "mrp": 13280,
    "priceWithExchange": 11990,
    "image": ""
  },
  {
    "id": "BAT-045",
    "brand": "Bosch",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "Bosch S4 75",
    "ah": 75,
    "warrantyMonths": 36,
    "mrp": 18110,
    "priceWithExchange": 16730,
    "image": ""
  },
  {
    "id": "BAT-046",
    "brand": "ACDelco",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "ACDelco Excel 75",
    "ah": 75,
    "warrantyMonths": 24,
    "mrp": 16540,
    "priceWithExchange": 15380,
    "image": ""
  },
  {
    "id": "BAT-047",
    "brand": "ACDelco",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "ACDelco Rapido 44",
    "ah": 44,
    "warrantyMonths": 36,
    "mrp": 9700,
    "priceWithExchange": 9110,
    "image": ""
  },
  {
    "id": "BAT-048",
    "brand": "ACDelco",
    "category": "car",
    "categoryLabel": "Car & SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "model": "ACDelco Rapido 55",
    "ah": 55,
    "warrantyMonths": 48,
    "mrp": 12130,
    "priceWithExchange": 11300,
    "image": ""
  },
  {
    "id": "BAT-049",
    "brand": "ACDelco",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "ACDelco Rapido 88",
    "ah": 88,
    "warrantyMonths": 12,
    "mrp": 18020,
    "priceWithExchange": 16290,
    "image": ""
  },
  {
    "id": "BAT-050",
    "brand": "ACDelco",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "ACDelco Excel 180",
    "ah": 180,
    "warrantyMonths": 12,
    "mrp": 36860,
    "priceWithExchange": 33890,
    "image": ""
  },
  {
    "id": "BAT-051",
    "brand": "HBL",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "HBL EnerG 120",
    "ah": 120,
    "warrantyMonths": 24,
    "mrp": 25740,
    "priceWithExchange": 24060,
    "image": ""
  },
  {
    "id": "BAT-052",
    "brand": "HBL",
    "category": "commercial",
    "categoryLabel": "Commercial & Heavy Vehicle",
    "vehicles": [
      "Mini Truck",
      "Bus",
      "Tempo/LCV",
      "HCV Truck"
    ],
    "model": "HBL Endura 140",
    "ah": 140,
    "warrantyMonths": 12,
    "mrp": 30030,
    "priceWithExchange": 27290,
    "image": ""
  },
  {
    "id": "BAT-053",
    "brand": "HBL",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "HBL EnerG 135",
    "ah": 135,
    "warrantyMonths": 18,
    "mrp": 30440,
    "priceWithExchange": 27810,
    "image": ""
  },
  {
    "id": "BAT-054",
    "brand": "HBL",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm Equipment",
    "vehicles": [
      "Tractor",
      "Harvester",
      "Power Tiller"
    ],
    "model": "HBL Endura 88",
    "ah": 88,
    "warrantyMonths": 24,
    "mrp": 19840,
    "priceWithExchange": 18320,
    "image": ""
  }
];

const TYRES = [
  {
    "id": "TYR-001",
    "brand": "MRF",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "ZLX",
    "size": "215/60 R17",
    "mrp": 3240,
    "image": ""
  },
  {
    "id": "TYR-002",
    "brand": "MRF",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Nylogrip Zapper",
    "size": "195/55 R16",
    "mrp": 4150,
    "image": ""
  },
  {
    "id": "TYR-003",
    "brand": "MRF",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "ZLX",
    "size": "145/80 R12",
    "mrp": 3470,
    "image": ""
  },
  {
    "id": "TYR-004",
    "brand": "MRF",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "ZVTV",
    "size": "90/90-18",
    "mrp": 1670,
    "image": ""
  },
  {
    "id": "TYR-005",
    "brand": "MRF",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Nylogrip Zapper",
    "size": "120/70-17",
    "mrp": 1690,
    "image": ""
  },
  {
    "id": "TYR-006",
    "brand": "MRF",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "ZLX",
    "size": "110/70-17",
    "mrp": 1680,
    "image": ""
  },
  {
    "id": "TYR-007",
    "brand": "MRF",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "ZLX",
    "size": "12.00-20",
    "mrp": 10180,
    "image": ""
  },
  {
    "id": "TYR-008",
    "brand": "MRF",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "ZLX",
    "size": "7.50-16",
    "mrp": 11180,
    "image": ""
  },
  {
    "id": "TYR-009",
    "brand": "MRF",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Muscle Grip",
    "size": "7.50-16",
    "mrp": 11180,
    "image": ""
  },
  {
    "id": "TYR-010",
    "brand": "MRF",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "ZVTV",
    "size": "16.9-28",
    "mrp": 12570,
    "image": ""
  },
  {
    "id": "TYR-011",
    "brand": "MRF",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Muscle Grip",
    "size": "4.00-8",
    "mrp": 2080,
    "image": ""
  },
  {
    "id": "TYR-012",
    "brand": "MRF",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Muscle Grip",
    "size": "6.00-9",
    "mrp": 2290,
    "image": ""
  },
  {
    "id": "TYR-013",
    "brand": "CEAT",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Czar HP",
    "size": "215/60 R17",
    "mrp": 3660,
    "image": ""
  },
  {
    "id": "TYR-014",
    "brand": "CEAT",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Czar HP",
    "size": "175/65 R14",
    "mrp": 3050,
    "image": ""
  },
  {
    "id": "TYR-015",
    "brand": "CEAT",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Gripp XL",
    "size": "165/80 R14",
    "mrp": 3120,
    "image": ""
  },
  {
    "id": "TYR-016",
    "brand": "CEAT",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Gripp XL",
    "size": "80/100-18",
    "mrp": 1330,
    "image": ""
  },
  {
    "id": "TYR-017",
    "brand": "CEAT",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Czar HP",
    "size": "120/70-17",
    "mrp": 1560,
    "image": ""
  },
  {
    "id": "TYR-018",
    "brand": "CEAT",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "SecuraDrive",
    "size": "140/60-17",
    "mrp": 1330,
    "image": ""
  },
  {
    "id": "TYR-019",
    "brand": "CEAT",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "SecuraDrive",
    "size": "12.00-20",
    "mrp": 7580,
    "image": ""
  },
  {
    "id": "TYR-020",
    "brand": "CEAT",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Milaze",
    "size": "7.50-16",
    "mrp": 9320,
    "image": ""
  },
  {
    "id": "TYR-021",
    "brand": "CEAT",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Milaze",
    "size": "4.00-10",
    "mrp": 2580,
    "image": ""
  },
  {
    "id": "TYR-022",
    "brand": "CEAT",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "SecuraDrive",
    "size": "6.00-9",
    "mrp": 2320,
    "image": ""
  },
  {
    "id": "TYR-023",
    "brand": "Apollo Tyres",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Kruzer",
    "size": "145/80 R12",
    "mrp": 3690,
    "image": ""
  },
  {
    "id": "TYR-024",
    "brand": "Apollo Tyres",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Actigrip",
    "size": "185/65 R15",
    "mrp": 4010,
    "image": ""
  },
  {
    "id": "TYR-025",
    "brand": "Apollo Tyres",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Alnac 4G",
    "size": "215/60 R17",
    "mrp": 3700,
    "image": ""
  },
  {
    "id": "TYR-026",
    "brand": "Apollo Tyres",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Actigrip",
    "size": "9.00-20",
    "mrp": 8690,
    "image": ""
  },
  {
    "id": "TYR-027",
    "brand": "Apollo Tyres",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Actigrip",
    "size": "8.25-16",
    "mrp": 8870,
    "image": ""
  },
  {
    "id": "TYR-028",
    "brand": "Apollo Tyres",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Kruzer",
    "size": "6.00-16",
    "mrp": 10830,
    "image": ""
  },
  {
    "id": "TYR-029",
    "brand": "Apollo Tyres",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Amazer 4G",
    "size": "16.9-28",
    "mrp": 8970,
    "image": ""
  },
  {
    "id": "TYR-030",
    "brand": "JK Tyre",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Vectra",
    "size": "155/65 R13",
    "mrp": 3770,
    "image": ""
  },
  {
    "id": "TYR-031",
    "brand": "JK Tyre",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Ultima Neo",
    "size": "185/65 R15",
    "mrp": 3710,
    "image": ""
  },
  {
    "id": "TYR-032",
    "brand": "JK Tyre",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Blaze",
    "size": "165/80 R14",
    "mrp": 3070,
    "image": ""
  },
  {
    "id": "TYR-033",
    "brand": "JK Tyre",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Blaze",
    "size": "10.00-20",
    "mrp": 8770,
    "image": ""
  },
  {
    "id": "TYR-034",
    "brand": "JK Tyre",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Ultima Neo",
    "size": "12.00-20",
    "mrp": 8920,
    "image": ""
  },
  {
    "id": "TYR-035",
    "brand": "JK Tyre",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Ultima Neo",
    "size": "14.9-28",
    "mrp": 11210,
    "image": ""
  },
  {
    "id": "TYR-036",
    "brand": "JK Tyre",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Vectra",
    "size": "9.5-24",
    "mrp": 9050,
    "image": ""
  },
  {
    "id": "TYR-037",
    "brand": "JK Tyre",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Vectra",
    "size": "4.00-8",
    "mrp": 2010,
    "image": ""
  },
  {
    "id": "TYR-038",
    "brand": "JK Tyre",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Vectra",
    "size": "5.00-10",
    "mrp": 2320,
    "image": ""
  },
  {
    "id": "TYR-039",
    "brand": "Bridgestone",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Duravis",
    "size": "155/65 R13",
    "mrp": 3730,
    "image": ""
  },
  {
    "id": "TYR-040",
    "brand": "Bridgestone",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Ecopia",
    "size": "195/55 R16",
    "mrp": 3520,
    "image": ""
  },
  {
    "id": "TYR-041",
    "brand": "Bridgestone",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Duravis",
    "size": "165/80 R14",
    "mrp": 4490,
    "image": ""
  },
  {
    "id": "TYR-042",
    "brand": "Bridgestone",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Turanza",
    "size": "80/100-18",
    "mrp": 1920,
    "image": ""
  },
  {
    "id": "TYR-043",
    "brand": "Bridgestone",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "B290",
    "size": "140/60-17",
    "mrp": 1640,
    "image": ""
  },
  {
    "id": "TYR-044",
    "brand": "Bridgestone",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Duravis",
    "size": "100/80-17",
    "mrp": 1870,
    "image": ""
  },
  {
    "id": "TYR-045",
    "brand": "Michelin",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Energy XM2",
    "size": "175/65 R14",
    "mrp": 3850,
    "image": ""
  },
  {
    "id": "TYR-046",
    "brand": "Michelin",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Pilot Sport",
    "size": "185/65 R15",
    "mrp": 5060,
    "image": ""
  },
  {
    "id": "TYR-047",
    "brand": "Michelin",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Pilot Sport",
    "size": "145/80 R12",
    "mrp": 3800,
    "image": ""
  },
  {
    "id": "TYR-048",
    "brand": "Goodyear",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Assurance",
    "size": "165/80 R14",
    "mrp": 3760,
    "image": ""
  },
  {
    "id": "TYR-049",
    "brand": "Goodyear",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Assurance",
    "size": "185/65 R15",
    "mrp": 3610,
    "image": ""
  },
  {
    "id": "TYR-050",
    "brand": "Goodyear",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Assurance",
    "size": "195/55 R16",
    "mrp": 4350,
    "image": ""
  },
  {
    "id": "TYR-051",
    "brand": "Goodyear",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Eagle",
    "size": "8.25-16",
    "mrp": 8600,
    "image": ""
  },
  {
    "id": "TYR-052",
    "brand": "Goodyear",
    "category": "truck",
    "categoryLabel": "Truck & Bus",
    "vehicles": [
      "Mini Truck/LCV",
      "HCV Truck",
      "Bus"
    ],
    "pattern": "Eagle",
    "size": "295/95 R20",
    "mrp": 11110,
    "image": ""
  },
  {
    "id": "TYR-053",
    "brand": "Continental",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "UltraContact",
    "size": "175/65 R14",
    "mrp": 4690,
    "image": ""
  },
  {
    "id": "TYR-054",
    "brand": "Continental",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "UltraContact",
    "size": "185/65 R15",
    "mrp": 4720,
    "image": ""
  },
  {
    "id": "TYR-055",
    "brand": "Continental",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "UltraContact",
    "size": "155/65 R13",
    "mrp": 3760,
    "image": ""
  },
  {
    "id": "TYR-056",
    "brand": "Yokohama",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Earth-1",
    "size": "165/80 R14",
    "mrp": 3520,
    "image": ""
  },
  {
    "id": "TYR-057",
    "brand": "Yokohama",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Advan",
    "size": "175/65 R14",
    "mrp": 3450,
    "image": ""
  },
  {
    "id": "TYR-058",
    "brand": "Yokohama",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "BluEarth",
    "size": "155/65 R13",
    "mrp": 4420,
    "image": ""
  },
  {
    "id": "TYR-059",
    "brand": "Yokohama",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Earth-1",
    "size": "90/90-18",
    "mrp": 1680,
    "image": ""
  },
  {
    "id": "TYR-060",
    "brand": "Yokohama",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "BluEarth",
    "size": "140/60-17",
    "mrp": 1630,
    "image": ""
  },
  {
    "id": "TYR-061",
    "brand": "Yokohama",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Advan",
    "size": "110/70-17",
    "mrp": 1610,
    "image": ""
  },
  {
    "id": "TYR-062",
    "brand": "Falken",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Sincera",
    "size": "165/80 R14",
    "mrp": 3440,
    "image": ""
  },
  {
    "id": "TYR-063",
    "brand": "Falken",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Sincera",
    "size": "215/60 R17",
    "mrp": 3820,
    "image": ""
  },
  {
    "id": "TYR-064",
    "brand": "Falken",
    "category": "car",
    "categoryLabel": "Car / SUV",
    "vehicles": [
      "Hatchback",
      "Sedan",
      "SUV/MUV"
    ],
    "pattern": "Sincera",
    "size": "145/80 R12",
    "mrp": 4130,
    "image": ""
  },
  {
    "id": "TYR-065",
    "brand": "TVS Eurogrip",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Pro Series",
    "size": "80/100-18",
    "mrp": 1190,
    "image": ""
  },
  {
    "id": "TYR-066",
    "brand": "TVS Eurogrip",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Pro Series",
    "size": "100/80-17",
    "mrp": 1330,
    "image": ""
  },
  {
    "id": "TYR-067",
    "brand": "TVS Eurogrip",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Pro Series",
    "size": "90/90-18",
    "mrp": 1370,
    "image": ""
  },
  {
    "id": "TYR-068",
    "brand": "TVS Eurogrip",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Protorq Extreme",
    "size": "4.00-8",
    "mrp": 1870,
    "image": ""
  },
  {
    "id": "TYR-069",
    "brand": "TVS Eurogrip",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Pro Series",
    "size": "4.00-10",
    "mrp": 1700,
    "image": ""
  },
  {
    "id": "TYR-070",
    "brand": "BKT",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Power Trac",
    "size": "14.9-28",
    "mrp": 10780,
    "image": ""
  },
  {
    "id": "TYR-071",
    "brand": "BKT",
    "category": "tractor",
    "categoryLabel": "Tractor & Farm",
    "vehicles": [
      "Tractor Front",
      "Tractor Rear",
      "Trailer"
    ],
    "pattern": "Sonarrudra",
    "size": "7.50-16",
    "mrp": 12540,
    "image": ""
  },
  {
    "id": "TYR-072",
    "brand": "Metro Tyres",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Milestone",
    "size": "120/70-17",
    "mrp": 1330,
    "image": ""
  },
  {
    "id": "TYR-073",
    "brand": "Metro Tyres",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Milestone",
    "size": "100/80-17",
    "mrp": 1250,
    "image": ""
  },
  {
    "id": "TYR-074",
    "brand": "Metro Tyres",
    "category": "bike",
    "categoryLabel": "Two-Wheeler",
    "vehicles": [
      "Scooter",
      "Commuter Motorcycle",
      "Sports Motorcycle"
    ],
    "pattern": "Milestone",
    "size": "80/100-18",
    "mrp": 1350,
    "image": ""
  },
  {
    "id": "TYR-075",
    "brand": "Metro Tyres",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Milestone",
    "size": "4.00-10",
    "mrp": 2030,
    "image": ""
  },
  {
    "id": "TYR-076",
    "brand": "Metro Tyres",
    "category": "auto",
    "categoryLabel": "Three-Wheeler",
    "vehicles": [
      "Auto Rickshaw",
      "E-Rickshaw",
      "Loader Auto"
    ],
    "pattern": "Trail Blazer",
    "size": "6.00-9",
    "mrp": 1990,
    "image": ""
  }
];
