import { Clock, Navigation, Truck, Wrench } from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "In Transit":
      return <Navigation className="h-4 w-4" />;
    case "Idle":
      return <Clock className="h-4 w-4" />;
    case "Maintenance":
      return <Wrench className="h-4 w-4" />;
    default:
      return <Truck className="h-4 w-4" />;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "In Transit":
      return "bg-green-100 text-green-800 border-green-200";
    case "Idle":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Maintenance":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getMarkerColor = (status: string) => {
  switch (status) {
    case "In Transit":
      return "green";
    case "Idle":
      return "orange";
    case "Maintenance":
      return "red";
    default:
      return "blue";
  }
};
