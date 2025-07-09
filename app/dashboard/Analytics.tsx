import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Navigation, Truck } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";

function Analytics() {
  const { trucks } = useAppContext();
  //   const calculateStats = () => {
  const total = trucks.length;
  const inTransit = trucks.filter((t: any) => t.status === "In Transit").length;
  const idle = trucks.filter((t: any) => t.status === "Idle").length;
  const maintenance = trucks.filter(
    (t: any) => t.status === "Maintenance"
  ).length;

  const idleTrucks = trucks.filter(
    (t: any) => t.status === "Idle" && t.idleTime
  );
  const averageIdleTime =
    idleTrucks.length > 0
      ? idleTrucks.reduce(
          (sum: any, truck: any) => sum + (truck.idleTime || 0),
          0
        ) / idleTrucks.length
      : 0;

  // setStats({ total, inTransit, idle, maintenance, averageIdleTime });
  //   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Trucks</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{total}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Transit</CardTitle>
          <Navigation className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{inTransit}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Idle</CardTitle>
          <Clock className="h-4 w-4 text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600">{idle}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Idle Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(averageIdleTime)}m
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Analytics;
