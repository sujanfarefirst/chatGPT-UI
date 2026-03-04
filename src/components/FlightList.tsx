import FlightCard from "./FlightCard";

export default function FlightList({ flights }: any) {
  return (
    <div>
      {flights.map((f: any, i: number) => (
        <FlightCard key={i} flight={f} />
      ))}
    </div>
  );
}