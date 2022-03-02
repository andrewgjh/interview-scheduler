import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewerID, setInterviewerID] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setInterviewerID(null);
    setStudent("");
  };

  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };
  function validate(student) {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewerID);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={event => setStudent(event.target.value)}
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={chosenInterviewerID => {
            setInterviewerID(chosenInterviewerID);
          }}
          value={interviewerID}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button Button confirm onClick={() => validate(student)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

export default Form;
