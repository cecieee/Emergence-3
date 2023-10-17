import { useCallback, useEffect, useState } from "react";

const Timer = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

      setCountDownTime({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }
  };

  const startCountDown = useCallback(() => {
    // Set the target date to November 4, 2023, 00:00:00
    const countDownDate = new Date(2023, 10, 4, 9, 0, 0).getTime();

    const interval = setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="bg-[#fff] my-10 pt-14 max-[450px]:my-0 font-montserrat">
      <div className="flex flex-col items-center justify-center w-full h-50% gap-8 sm:gap-16" data-aos="fade-in" data-aos-duration="1000">
        <span className="text-2xl sm:text-3xl font-semibold text-[#db5237] text-center tracking-widest px-2">
          Act Now, Time is Short
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#fff]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#fff]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days === 1 ? "Day" : "Days"}
            </span>
          </div>
          <h1 className="text-[7.5vw]">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#fff]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#fff]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.hours === 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <h1 className="text-[7.5vw]">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#fff]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#fff]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <h1 className="text-[7.5vw]">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#fff]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#fff]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;