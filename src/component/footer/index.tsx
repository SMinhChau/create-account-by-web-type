import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import Link from '../common/link';

const Footer = () => {
  return (
    <footer className="footer-content">
      <span className="">@2024</span>

      <div className="group-icon">
        <Link href="https://github.com/SMinhChau">
          <FaGithub className="icon-footer" />
        </Link>
        <Link href="https://www.facebook.com/minhchau.141">
          <FaFacebook className="icon-footer" />
        </Link>

        <FaPhone className="icon-footer" />
      </div>
    </footer>
  );
};

export default Footer;
