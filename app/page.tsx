import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, BarChart3, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Fleet Management System</h1>
          <p className="text-xl text-muted-foreground">
            Monitor and manage your logistics fleet in real-time
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="mt-4">
              Go to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Truck className="h-8 w-8 mx-auto text-primary" />
              <CardTitle className="text-lg">Fleet Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Real-time tracking of all vehicles in your fleet
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <MapPin className="h-8 w-8 mx-auto text-primary" />
              <CardTitle className="text-lg">Live Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Interactive maps showing current truck positions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <BarChart3 className="h-8 w-8 mx-auto text-primary" />
              <CardTitle className="text-lg">Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Comprehensive fleet performance analytics
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 mx-auto text-primary" />
              <CardTitle className="text-lg">Status Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Monitor truck status and idle times
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
