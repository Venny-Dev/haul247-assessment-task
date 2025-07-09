import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatusColor, getStatusIcon } from "@/utils/helpers";
import { Badge, Truck, User } from "lucide-react";

function TruckInfo({ truck }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Truck Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status</span>
          <Badge className={getStatusColor(truck.status)}>
            {getStatusIcon(truck.status)}
            <span className="ml-1">{truck.status}</span>
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Driver</span>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{truck.driverName}</span>
          </div>
        </div>

        {truck.idleTime && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Idle Time</span>
            <span className="text-sm">{truck.idleTime} minutes</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default TruckInfo;
