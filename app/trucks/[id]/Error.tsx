import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

function Error({ truckId }: any) {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Truck Details</h1>
      </div>
      <Card>
        <CardContent className="p-8 text-center">
          <Truck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Truck Not Found</h3>
          <p className="text-muted-foreground mb-4">
            The truck with ID "{truckId}" could not be found.
          </p>
          <Button onClick={() => router.push("/dashboard")}>
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Error;
