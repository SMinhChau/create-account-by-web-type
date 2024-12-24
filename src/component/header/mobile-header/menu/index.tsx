import React from 'react';
import './menu-mobile.css';
import { IoClose } from 'react-icons/io5';
import { GoProjectSymlink } from 'react-icons/go';
import { BsPersonWorkspace } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';

type Props = {
  handleMenu: () => void;
};
const HeaderMenus = [
  { id: 1, name: 'About me', url: '/#info', icon: <BsInfoCircle />, hash: '#info' },
  {
    id: 2,
    name: 'Experiences',
    url: '/#experiences',
    icon: <BsPersonWorkspace />,
    hash: '#experiences',
  },
  { id: 3, name: 'Projects', url: '/#projects', icon: <GoProjectSymlink />, hash: '#projects' },
  { id: 4, name: 'Contact', url: '/#contact', icon: <GrContact />, hash: '#contact' },
];

const MobileMenu: React.FC<Props> = ({ handleMenu }: Props) => {
  const location = useLocation();

  return (
    <div className="nar-mobile">
      <div className="content">
        <span className="close-icon">
          <IoClose onClick={handleMenu} />
        </span>

        <nav className="menus">
          {HeaderMenus.map(item => {
            return (
              <a className="item-menu" key={item.id} href={item.url || '#'}>
                <span className="icon">{item.icon}</span>
                <h3 className={`item-title ${item.hash == location?.hash && 'item-selected'}`}>
                  {item.name}
                </h3>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
