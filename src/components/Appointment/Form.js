import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewerID, setInterviewerID] = useState(props.interviewer || null);

  const reset = () => {
    setInterviewerID(null);
    setStudent("");
  };

  const cancel = () => {
    props.onCancel();
    reset();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={(chosenInterviewerID) => {
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
          <Button
            Button
            confirm
            onClick={() => props.onSave(student, interviewerID)}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

export default Form;
