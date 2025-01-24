import Countdown from "react-countdown";
import Question from "./Question";
import { useEffect, useState } from "react";

export default function Timer() {
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [countdownDate] = useState(() => {
    const savedDate = localStorage.getItem("countdownDate");

    return savedDate ? new Date(savedDate) : new Date("2025-01-27T12:00:00");
  });

  useEffect(() => {
    localStorage.setItem("countdownDate", countdownDate.toISOString());
  }, [countdownDate]);

  return (
    <>
      {!isTimerComplete && (
        <h1 className="text-black text-7xl -mt-20 mb-5">
          <span className="text-[#fdbdc2]">The</span> BIG Question
        </h1>
      )}
      <Countdown
        date={countdownDate}
        onComplete={() => setIsTimerComplete(true)}
        className="text-7xl text-[#fdbdc2]"
      >
        <Question />
      </Countdown>
    </>
  );
}
