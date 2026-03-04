import FlightTable from "./components/FlightTable";
import { useChatGPTData } from "./hooks/useChatGPTData";

type ToolData = {
  title: string;
  flights: any[];
  bookingUrl: string;
};

export default function App() {
  const data = useChatGPTData<ToolData>();

  if (!data) return <div>Loading flights...</div>;

  return (
    <div>
      <h1>{data.title}</h1>

      <FlightTable
        flights={data.flights}
        bookingUrl={data.bookingUrl}
      />
    </div>
  );
}