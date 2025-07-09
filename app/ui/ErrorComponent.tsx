import { Card, CardContent } from "@/components/ui/card";

function ErrorComponent({ error, endpoint }: any) {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="p-4">
        <p className="text-red-800">{error}</p>
        <p className="text-sm text-red-600 mt-2">
          Something went wrong with Beeceptor endpoint at:{" "}
          <code className="bg-red-100 px-1 rounded">{endpoint}</code>
        </p>
      </CardContent>
    </Card>
  );
}

export default ErrorComponent;
