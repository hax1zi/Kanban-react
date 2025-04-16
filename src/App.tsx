import React, { useEffect } from 'react';
import Aside from './components/Aside';
import useDarkModeStore from './store/useDarkModeStore';
import MainArea from './components/cards/areas/MainArea';

function App() {
  const {darkmode} = useDarkModeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkmode)
  }, [darkmode])

  return (
    <main className="font-roboto w-full h-screen flex flex-col bg-background dark:bg-background-dark text-primaryText dark:text-primaryText-dark">
      <Aside/>
      <MainArea/>
      </main>
  );
}

export default App;
