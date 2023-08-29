import { useEffect, useState } from "react";

const useCountdown = (targetDate, isStop, setTimeLeft) => {
  // get count down date in millisecond
  var countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    let interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    if (isStop == "stop") {
      clearInterval(interval);
      interval = null;
    }

    // start count down in 1000 milliseconds
    return () => clearInterval(interval); // stop count down (clean up function)
  }, [countDownDate, isStop, targetDate]);

  return getReturnValues(countDown, setTimeLeft);
};

const getReturnValues = (countDown, setTimeLeft) => {
  setTimeLeft(countDown);
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
