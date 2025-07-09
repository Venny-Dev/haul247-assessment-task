const mockData = [
  {
    id: "TRK-001",
    driverName: "John Smith",
    status: "In Transit",
    location: {
      city: "Los Angeles, CA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    lastUpdate: "2024-01-15T10:30:00Z",
  },
  {
    id: "TRK-002",
    driverName: "Sarah Johnson",
    status: "Idle",
    location: {
      city: "Phoenix, AZ",
      coordinates: { lat: 33.4484, lng: -112.074 },
    },
    lastUpdate: "2024-01-15T09:15:00Z",
    idleTime: 45,
  },
  {
    id: "TRK-003",
    driverName: "Mike Davis",
    status: "Maintenance",
    location: {
      city: "Denver, CO",
      coordinates: { lat: 39.7392, lng: -104.9903 },
    },
    lastUpdate: "2024-01-15T08:00:00Z",
  },
  {
    id: "TRK-004",
    driverName: "Lisa Wilson",
    status: "In Transit",
    location: {
      city: "Dallas, TX",
      coordinates: { lat: 32.7767, lng: -96.797 },
    },
    lastUpdate: "2024-01-15T11:00:00Z",
  },
  {
    id: "TRK-005",
    driverName: "Robert Brown",
    status: "Idle",
    location: {
      city: "Miami, FL",
      coordinates: { lat: 25.7617, lng: -80.1918 },
    },
    lastUpdate: "2024-01-15T07:45:00Z",
    idleTime: 120,
  },
];

export const mockTrucks = [
  {
    id: "TRK-001",
    driverName: "John Smith",
    status: "In Transit",
    location: {
      city: "Los Angeles, CA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    lastUpdate: "2024-01-15T10:30:00Z",
    speed: 65,
    fuel: 78,
    mileage: 145230,
  },
  {
    id: "TRK-002",
    driverName: "Sarah Johnson",
    status: "Idle",
    location: {
      city: "Phoenix, AZ",
      coordinates: { lat: 33.4484, lng: -112.074 },
    },
    lastUpdate: "2024-01-15T09:15:00Z",
    idleTime: 45,
    speed: 0,
    fuel: 45,
    mileage: 98750,
  },
  {
    id: "TRK-003",
    driverName: "Mike Davis",
    status: "Maintenance",
    location: {
      city: "Denver, CO",
      coordinates: { lat: 39.7392, lng: -104.9903 },
    },
    lastUpdate: "2024-01-15T08:00:00Z",
    speed: 0,
    fuel: 92,
    mileage: 203450,
  },
  {
    id: "TRK-004",
    driverName: "Lisa Wilson",
    status: "In Transit",
    location: {
      city: "Dallas, TX",
      coordinates: { lat: 32.7767, lng: -96.797 },
    },
    lastUpdate: "2024-01-15T11:00:00Z",
    speed: 58,
    fuel: 67,
    mileage: 87650,
  },
  {
    id: "TRK-005",
    driverName: "Robert Brown",
    status: "Idle",
    location: {
      city: "Miami, FL",
      coordinates: { lat: 25.7617, lng: -80.1918 },
    },
    lastUpdate: "2024-01-15T07:45:00Z",
    idleTime: 120,
    speed: 0,
    fuel: 23,
    mileage: 156780,
  },
];
