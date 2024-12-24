import { Outlet } from 'react-router-dom';

const LayoutNonNavbar = () => {
  return (
    <div className="container mx-auto h-dvh w-full flex flex-col items-start px-[2%] lg:px-[2%]">
      <Outlet />
    </div>
  );
};

export default LayoutNonNavbar;
