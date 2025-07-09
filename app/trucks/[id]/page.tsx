"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ArrowLeft, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useAppContext } from "@/app/contexts/AppContext";
import { mockTrucks } from "@/utils/dats";
import Loader from "./Loader";
import Error from "./Error";
import VehicleStats from "./VehicleStats";
import TruckInfo from "./TruckInfo";
import Actions from "./Actions";

// Dynamically import the map component to avoid SSR issues
const TruckMap = dynamic(() => import("@/components/truck-map"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function TruckDetail() {
  const params = useParams();
  const router = useRouter();
  const [truck, setTruck] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const truckId = params.id as string;

  useEffect(() => {
    fetchTruckDetails();

    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      if (truck && truck.status === "In Transit") {
        simulateLocationUpdate();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [truckId]);

  const fetchTruckDetails = async () => {
    try {
      setLoading(true);

      const foundTruck = mockTrucks.find((t) => t.id === truckId);

      if (!foundTruck) {
        throw Error("Truck not found");
      }

      setTruck(foundTruck);
      setError(null);
    } catch (err) {
      setError("Failed to load truck details");
      console.error("Error fetching truck:", err);
    } finally {
      setLoading(false);
    }
  };

  const simulateLocationUpdate = () => {
    if (!truck) return;

    // Simulate small movement for in-transit trucks
    const newLat =
      truck.location.coordinates.lat + (Math.random() - 0.5) * 0.01;
    const newLng =
      truck.location.coordinates.lng + (Math.random() - 0.5) * 0.01;

    console.log("running");
    setTruck((prev: any) =>
      prev
        ? {
            ...prev,
            location: {
              ...prev.location,
              coordinates: { lat: newLat, lng: newLng },
            },
            lastUpdate: new Date().toISOString(),
          }
        : null
    );
  };

  if (loading) {
    return <Loader />;
  }

  if (error || !truck) {
    return <Error truckId={truckId} />;
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">{truck.id}</h1>
          <p className="text-muted-foreground">Truck Details & Location</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TruckMap truck={truck} height="400px" />
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium">
                  Location: {truck.location.city}
                </p>
                <p className="text-xs text-muted-foreground">
                  Coordinates: {truck.location.coordinates.lat.toFixed(4)},{" "}
                  {truck.location.coordinates.lng.toFixed(4)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(truck.lastUpdate).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          {/* Basic Info */}
          <TruckInfo truck={truck} />

          {/* Vehicle Stats */}
          <VehicleStats truck={truck} />

          {/* Actions */}
          <Actions />
        </div>
      </div>
    </div>
  );
}
