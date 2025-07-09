"use client";

import { API_ENDPOINT } from "@/lib/constants";
// import { API_BASE_URL } from "@/lib/constants";
import { TruckData } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// const API_ENDPOINT = `${API_BASE_URL}/api/trucks`;

interface AppContextTypes {
  filteredTrucks: any;
  trucks: any;
  setStatusFilter: (status: string) => void;
  statusFilter: string;
  loading: boolean;
  error: string | null;
  fetchTrucks: () => any;
}

const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [trucks, setTrucks] = useState<TruckData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  //   console.log(trucks);

  useEffect(() => {
    fetchTrucks();
  }, []);

  const filteredTrucks = useMemo(() => {
    if (statusFilter === "all") {
      return trucks;
    }
    return trucks.filter((truck) => truck.status === statusFilter);
  }, [trucks, statusFilter]);

  const fetchTrucks = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_ENDPOINT);
      if (!response.ok) throw new Error("Failed to fetch trucks");
      const data = await response.json();

      setTrucks(data);
      setError(null);
    } catch (err) {
      setError("Failed to load truck data. Please check API endpoint.");
      console.error("Error fetching trucks:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        filteredTrucks,
        trucks,
        setStatusFilter,
        statusFilter,
        loading,
        error,
        fetchTrucks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Context is used outside of it provider");
  }
  return context;
}

export { useAppContext, AppProvider };
