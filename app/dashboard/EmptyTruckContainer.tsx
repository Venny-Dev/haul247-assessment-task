import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";

function EmptyTruckContainer({ statusFilter }: { statusFilter: string }) {
  return (
    <Card>
      <CardContent className="p-8 text-center">
        <Truck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No trucks found</h3>
        <p className="text-muted-foreground">
          {statusFilter === "all"
            ? "No trucks available in the system."
            : `No trucks with status "${statusFilter}" found.`}
        </p>
      </CardContent>
    </Card>
  );
}

export default EmptyTruckContainer;
