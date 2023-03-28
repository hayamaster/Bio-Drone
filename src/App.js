// import "./App.css";
import Map from "./Map";
import DeliveryTime from "./DeliveryTime";

function App() {
  return (
    <div className="App">
      <DeliveryTime drugLat={37.4484002} drugLon={127.1271451} />
      <Map drugLat={37.4484002} drugLon={127.1271451} />
    </div>
  );
}

export default App;
