import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from './assets/tailwindcss.svg';
import './App.postcss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-6'>
      <div className='flex'>
        <img
          src={viteLogo}
          className='logo logo-vite'
          alt='Vite logo'
        />

        <img
          src={reactLogo}
          className='logo logo-react'
          alt='React logo'
        />
        <img
          src={tailwindLogo}
          className='logo logo-tailwindcss'
          alt='TailwindCSS logo'
        />
      </div>
      <h1 className='h1'>Vite + React + tailwindcss</h1>
      <button
        className='btn'
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
