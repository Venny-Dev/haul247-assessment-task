import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function VehicleStats({ truck }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Current Speed</span>
          <span className="text-sm font-mono">{truck.speed || 0} mph</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Fuel Level</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  (truck.fuel || 0) > 50
                    ? "bg-green-500"
                    : (truck.fuel || 0) > 25
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${truck.fuel || 0}%` }}
              />
            </div>
            <span className="text-sm font-mono">{truck.fuel || 0}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Mileage</span>
          <span className="text-sm font-mono">
            {truck.mileage?.toLocaleString() || 0} mi
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default VehicleStats;
