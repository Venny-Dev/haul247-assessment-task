"use client";

import { Button } from "@/components/ui/button";
import { API_ENDPOINT } from "@/lib/constants";
import SkeletonLoader from "../ui/SkeletonLoader";
import TruckItem from "./TruckItem";
import EmptyTruckContainer from "./EmptyTruckContainer";
import Analytics from "./Analytics";
import Filter from "./Filter";
import ErrorComponent from "../ui/ErrorComponent";
import { useAppContext } from "../contexts/AppContext";
import { TruckData } from "@/utils/types";

export default function Dashboard() {
  const { loading, error, fetchTrucks, filteredTrucks, statusFilter } =
    useAppContext();

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Fleet Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your fleet operations in real-time
          </p>
        </div>
        <Button onClick={fetchTrucks} variant="outline">
          Refresh Data
        </Button>
      </div>

      {error && <ErrorComponent error={error} endpoint={API_ENDPOINT} />}

      <Analytics />
      <Filter />

      {/* Truck List */}
      <div className="grid gap-4">
        {filteredTrucks.map((truck: TruckData) => (
          <TruckItem key={truck.id} truck={truck} />
        ))}
      </div>

      {filteredTrucks.length === 0 && !loading && (
        <EmptyTruckContainer statusFilter={statusFilter} />
      )}
    </div>
  );
}
