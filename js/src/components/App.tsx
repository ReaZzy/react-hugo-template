import React, { useState } from 'react';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className='text-3xl lg:text-5xl font-extrabold text-blue-500 gap-10 my-10 flex flex-col items-center'>
      &#10094; React Component &#10095;
      <button type='button' onClick={handleDecrement} className='outline-none'>
        -
      </button>
      <div className='font-extrabold text-2xl lg:text-3xl'>{counter}</div>
      <button type='button' onClick={handleIncrement} className='outline-none'>
        +
      </button>
      &#10094; React Component /&#10095;
    </div>
  );
};

export default App;
