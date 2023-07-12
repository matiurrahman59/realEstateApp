import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import DefaultText from '../../../components/defaulttext-componet';

const CustomCountDown = ({ initialTime, resetTimer, setResetTimer }) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const handleRestart = () => {
    setSeconds(initialTime);
    setIsRunning(true);
  };

  useEffect(() => {
    if (resetTimer) {
      handleRestart();
      setResetTimer(false); // Reset the restart prop value after calling the restart function
    }
  }, [resetTimer]);

  return (
    <View>
      <DefaultText className='font-montserrat font-medium text-sm'>
        {formatTime(seconds)}
      </DefaultText>
    </View>
  );
};

export default CustomCountDown;
