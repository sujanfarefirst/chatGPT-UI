export default function FlightCard({ flight }: any) {
  return (
    <div className="border rounded-xl p-4 shadow-sm mb-3">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{flight.airline}</h3>
          <p className="text-sm text-gray-500">
            {flight.departure} → {flight.arrival}
          </p>
          <p className="text-sm">
            {flight.duration} • {flight.stop}
          </p>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold">${flight.price}</div>
        </div>
      </div>
    </div>
  );
}