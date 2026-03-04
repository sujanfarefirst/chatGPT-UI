import { useEffect, useState } from "react";

export interface MCPFlight {
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  stop: string;
  price: number;
}

export interface MCPPayload {
  from: string;
  to: string;
  date: string;
  flights: MCPFlight[];
  bookingUrl: string;
}

export function useMCPData() {
  const [data, setData] = useState<MCPPayload | null>(null);

  useEffect(() => {
    function handler(event: MessageEvent) {
      // ChatGPT sends tool data this way
      if (event.data?.type === "tool_data") {
        setData(event.data.payload);
      }
    }

    window.addEventListener("message", handler);

    return () => window.removeEventListener("message", handler);
  }, []);

  return data;
}