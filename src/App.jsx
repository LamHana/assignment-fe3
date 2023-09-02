import "../src/CountDown/CountDown.css";
import CallAPI from "./CallAPI/CallAPI";
import FormDisplay from "./CountDown/FormDisplay";
import RecruitmentForm from "./Form/RecruitmentForm";
import ToDoList from "./ToDoList/ToDoList";

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
      <div className="api-container">
        <h1 className="title">Call API</h1>
        <div className="call-api">
          <CallAPI />
        </div>
      </div>
      <div className="to-do-container">
        <h1 className="title">To Do List</h1>
        <div>
          <ToDoList />
        </div>
      </div>
    </>
  );
}
