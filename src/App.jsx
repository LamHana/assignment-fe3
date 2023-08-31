import "../src/CountDown/CountDown.css";
import FormDisplay from "./CountDown/FormDisplay";
import RecruitmentForm from "./Form/RecruitmentForm";

export default function App() {
  return (
    <>
      <div className="count-down-container">
        <h1 className="title">Countdown Timer</h1>
        <div className="count-down">
          <FormDisplay />
        </div>
      </div>
      <div className="form-container">
        <h1 className="title">Recruitment Form</h1>
        <div className="form">
          <RecruitmentForm />
        </div>
      </div>
    </>
  );
}
