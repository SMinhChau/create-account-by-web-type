import React, { useContext, useEffect, useMemo, useState } from 'react';
import './header.css';
import { useWindowSize } from '@/hook/useWindowSize';
import ToggleMode from '../common/toggle-mode';
import MobileHeader from './mobile-header';
import { ThemeContextOverFlow } from '@/context/overflow';
import { useIsMobile } from '@/hook/useIsMobile';
import MobileMenu from './mobile-header/menu';
import { useLocation } from 'react-router-dom';

type Props = {
  nonNavbar?: boolean;
};

export const HeaderMenus = [
  { id: 1, name: 'About me', url: '/#info', hash: '#info' },
  { id: 2, name: 'Experiences', url: '/#experiences', hash: '#experiences' },
  { id: 3, name: 'Projects', url: '/projects', hash: '#projects' },
  { id: 4, name: 'Contact', url: '/#contact', hash: '#contact' },
];

const Header: React.FC<Props> = ({ nonNavbar }: Props) => {
  const { width } = useWindowSize();
  const [isMenu, setIsMenu] = useState(false);
  const { setIsOverFlow } = useContext(ThemeContextOverFlow);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    if (!isMobile) {
      setIsMenu(false);
      setIsOverFlow?.(false);
    }
  }, [isMobile]);

  const handleMenu = () => {
    setIsOverFlow?.(!isMenu);
    setIsMenu(!isMenu);
  };

  const renderNavbar = useMemo(() => {
    return (
      <div className="center-box justify-end ">
        {isMobile ? (
          <>
            {nonNavbar ? (
              <>
                <span className="relative pl-4 before:contents-[' '] before:bg-blue_border before:w-[2px] before:h-full before:absolute before:left-0">
                  <ToggleMode />
                </span>
              </>
            ) : (
              <>
                <div className="icon-menu" aria-controls="mobile-menu" aria-expanded="false">
                  <MobileHeader handleMenu={handleMenu} />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {!nonNavbar && (
              <nav className="menu-list flex sm:justify-center space-x-4">
                {HeaderMenus.map(item => (
                  <a
                    key={item.id}
                    href={item.url || '#'}
                    className={`rounded-lg px-3 py-2 menu-item ${
                      item.hash == location?.hash && 'item-selected'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            )}
            <span className="relative pl-4 before:contents-[' '] before:bg-blue_border before:w-[2px] before:h-full before:absolute before:left-0">
              <ToggleMode />
            </span>
          </>
        )}
      </div>
    );
  }, [width, isMenu, isMobile, location]);

  return (
    <div className="container min-h-[70px] w-full grid grid-cols-[30%_minmax(70%,_1fr)_100px] border-solid border-b-[1px]  lg:border-b-2  border-blue_border">
      <div className="wrapper-logo flex items-center">
        <a href="/">
          <img src="/images/sky-life-logo.png" alt="logo" className="logo" />
        </a>
      </div>
      {renderNavbar}
      {isMenu && <MobileMenu handleMenu={handleMenu} />}
    </div>
  );
};

export default Header;
