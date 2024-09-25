import { useState, useEffect } from 'react';


import '../styles/timer.css';
const Timer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Aktualizacja czasu co sekundę
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Czyszczenie interwału po odmontowaniu komponentu
    return () => clearInterval(intervalId);
  }, []);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  let result = (hours / minutes / seconds).toFixed(4);

  return (
    <div className="timer">
      {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} = {result}
    </div>
  );
};

export default Timer;