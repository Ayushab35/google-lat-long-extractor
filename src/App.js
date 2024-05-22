import React, { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const extractLatLong = (url) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);
    if (match) {
      return {
        latitude: match[1],
        longitude: match[2],
      };
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const coords = extractLatLong(url);
    setCoordinates(coords);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps Coordinates Extractor</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Google Maps URL"
            style={{ width: "400px", padding: "10px" }}
          />
          <button type="submit" style={{ padding: "10px" }}>
            Get Coordinates
          </button>
        </form>
        {coordinates && (
          <div>
            <h2>Coordinates</h2>
            <p>Latitude: {coordinates.latitude}</p>
            <p>Longitude: {coordinates.longitude}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
