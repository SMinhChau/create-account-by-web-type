import Footer from '@/component/footer';
import Header from '@/component/header';
import { ThemeContextOverFlow } from '@/context/overflow';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  const [isOverFlow, setIsOverFlow] = useState(false);

  useEffect(() => {
    if (isOverFlow) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOverFlow]);

  return (
    <ThemeContextOverFlow.Provider
      value={{
        isOverFlow: isOverFlow,
        setIsOverFlow: (isOverFlow: boolean) => setIsOverFlow(isOverFlow),
      }}
    >
      <div
        className={`container mx-auto h-dvh w-full flex flex-col items-start px-[10%] sm:px-[7%]`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContextOverFlow.Provider>
  );
};

export default BaseLayout;
