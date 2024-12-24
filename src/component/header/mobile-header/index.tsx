import './mobile-header.css';
import ToggleMode from '@/component/common/toggle-mode';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

type Props = {
  handleMenu: () => void;
};

const MobileHeader: React.FC<Props> = ({ handleMenu }: Props) => {
  return (
    <div className="wrapper">
      <div className="content">
        <ToggleMode />
      </div>

      <button onClick={handleMenu}>
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default MobileHeader;
