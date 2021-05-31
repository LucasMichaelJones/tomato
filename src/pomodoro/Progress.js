import React from "react";
import { secondsToDuration } from "../utils/duration";

function Progress({ session, focusDuration, breakDuration, isTimerRunning }) {

//   var date = new Date(0);
// date.setSeconds(45); // specify value for SECONDS here
//   let timeString = date.toISOString().substr(11, 8);
// console.log(timeString)

  if (!session) {
    return null;
  }

  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session.label} for{" "}
            {session.label === "Focusing" ? secondsToDuration(focusDuration*60) : secondsToDuration(breakDuration*60)}{" "}
            minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
          {!isTimerRunning ? <h3>PAUSED</h3> : null}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={isTimerRunning ? `${(session.timeRemaining)/60}` : "0"} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
