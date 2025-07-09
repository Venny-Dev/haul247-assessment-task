import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Actions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button className="w-full bg-transparent" variant="outline">
          Contact Driver
        </Button>
        <Button className="w-full bg-transparent" variant="outline">
          View Route History
        </Button>
        <Button className="w-full bg-transparent" variant="outline">
          Schedule Maintenance
        </Button>
      </CardContent>
    </Card>
  );
}

export default Actions;
