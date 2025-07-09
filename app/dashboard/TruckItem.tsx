import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getStatusColor, getStatusIcon } from "@/utils/helpers";
import { Badge, MapPin } from "lucide-react";
import Link from "next/link";

function TruckItem({ truck }: any) {
  return (
    <Card key={truck.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{truck.id}</h3>
              <Badge className={getStatusColor(truck.status)}>
                {getStatusIcon(truck.status)}
                <span className="ml-1">{truck.status}</span>
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium">Driver:</span>
                <span>{truck.driverName}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{truck.location.city}</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              Last updated: {new Date(truck.lastUpdate).toLocaleString()}
              {truck.idleTime && (
                <span className="ml-4">Idle for: {truck.idleTime} minutes</span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/trucks/${truck.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TruckItem;
