import { useMCPData } from "./hooks/useChatGPTData";
import FlightList from "./components/FlightList";

export default function App() {
  const data = useMCPData();

  if (!data) {
    return (
      <div className="p-6 text-center">
        Loading flight results...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">
        ✈️ {data.from} → {data.to}
      </h1>

      <FlightList flights={data.flights} />

      <a
        href={data.bookingUrl}
        target="_blank"
        className="block mt-6"
      >
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          View All Results
        </button>
      </a>
    </div>
  );
}