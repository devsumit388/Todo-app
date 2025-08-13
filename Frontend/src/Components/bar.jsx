import React, { useEffect, useState } from 'react';

const Bar = () => {
  const text = "r Flow through your day";
  const words = text.split(" ");
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    // Always reset the visible array before starting animation
    setVisible([]);
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setVisible(prev => [...prev, words[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // runs only once when mounted

  return (
    <div className='my-[10px] font-quicksand'>
      <div className='text-white text-center text-[15px] sm:text-[14px] font-bold md:text-[15px] lg:text-[20px] px-[8px] mx-[10px]'>
        {visible.join(" ")}
      </div>
    </div>
  );
};

export default Bar;

