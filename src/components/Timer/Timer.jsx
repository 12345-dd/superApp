import { useEffect, useState } from "react";
import "./Timer.css";

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (isRunning) return;

    const totalTime =
      hours * 3600 +
      minutes * 60 +
      seconds;

    if (totalTime <= 0) return;

    setTimeLeft(totalTime);
    setIsRunning(true);
  };

  const displayTime = isRunning
    ? timeLeft
    : hours * 3600 + minutes * 60 + seconds;

  const displayHours = Math.floor(displayTime / 3600);

  const displayMinutes = Math.floor(
    (displayTime % 3600) / 60
  );

  const displaySeconds = displayTime % 60;

  return (
    <div className="timer-widget">

      <div className="timer-left">
        <div className="timer-circle">
          <div className="timer-inner-circle">
            <h1>
              {String(displayHours).padStart(2, "0")}:
              {String(displayMinutes).padStart(2, "0")}:
              {String(displaySeconds).padStart(2, "0")}
            </h1>
          </div>
        </div>
      </div>

      <div className="timer-right">

        {/* Hours */}

        <div className="time-selector">
          <p>Hours</p>

          <button
            className="arrow-btn"
            onClick={() => setHours(hours + 1)}
            disabled={isRunning}
          >
            <MdKeyboardArrowUp />
          </button>

          <h2>{hours}</h2>

          <button
            className="arrow-btn"
            onClick={() =>
              setHours(hours > 0 ? hours - 1 : 0)
            }
            disabled={isRunning}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>

        <div className="separator">:</div>

        {/* Minutes */}

        <div className="time-selector">
          <p>Minutes</p>

          <button
            className="arrow-btn"
            onClick={() =>
              setMinutes(
                minutes < 59 ? minutes + 1 : 59
              )
            }
            disabled={isRunning}
          >
            <MdKeyboardArrowUp />
          </button>

          <h2>{minutes}</h2>

          <button
            className="arrow-btn"
            onClick={() =>
              setMinutes(
                minutes > 0 ? minutes - 1 : 0
              )
            }
            disabled={isRunning}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>

        <div className="separator">:</div>

        {/* Seconds */}

        <div className="time-selector">
          <p>Seconds</p>

          <button
            className="arrow-btn"
            onClick={() =>
              setSeconds(
                seconds < 59 ? seconds + 1 : 59
              )
            }
            disabled={isRunning}
          >
            <MdKeyboardArrowUp />
          </button>

          <h2>{seconds}</h2>

          <button
            className="arrow-btn"
            onClick={() =>
              setSeconds(
                seconds > 0 ? seconds - 1 : 0
              )
            }
            disabled={isRunning}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>

        <button
          className="start-btn"
          onClick={startTimer}
        >
          Start
        </button>

      </div>
    </div>
  );
};

export default Timer;