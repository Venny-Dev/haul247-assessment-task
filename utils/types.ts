export interface TruckData {
  id: string;
  driverName: string;
  status: "In Transit" | "Idle" | "Maintenance";
  location: {
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  lastUpdate: string;
  idleTime?: number;
  speed: number;
  fuel: number;
  mileage: number;
}

export interface FleetStats {
  total: number;
  inTransit: number;
  idle: number;
  maintenance: number;
  averageIdleTime: number;
}
