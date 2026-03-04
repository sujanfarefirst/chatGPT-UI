type Flight = {
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  stop: string;
  price: number;
};

export default function FlightTable({
  flights,
  bookingUrl,
}: {
  flights: Flight[];
  bookingUrl: string;
}) {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>✈️ Flight Results</h2>

      <table width="100%" border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Duration</th>
            <th>Stop</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((f, i) => (
            <tr key={i}>
              <td>{f.airline}</td>
              <td>{f.departure}</td>
              <td>{f.arrival}</td>
              <td>{f.duration}</td>
              <td>{f.stop}</td>
              <td>${f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <a href={bookingUrl} target="_blank">
        <button>🔎 View & Book</button>
      </a>
    </div>
  );
}