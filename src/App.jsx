import "../src/CountDown/CountDown.css";
import FormDisplay from "./CountDown/FormDisplay";

export default function App() {
  return (
    <>
      <div className="count-down-container">
        <h1 className="title">Countdown Timer</h1>
        <div className="count-down">
          <FormDisplay />
        </div>
      </div>
    </>
  );
}
