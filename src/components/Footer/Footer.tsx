import './Footer.css';
import { FacebookFilled,YoutubeFilled,LinkedinFilled,PhoneFilled } from '@ant-design/icons';

const Footer = () => {
  return (
  <div className="footerConatiner">

  
    <footer className="footer">
    <div className="footer__top">
      <div className="iconSocailMedia">
      <FacebookFilled/>
      </div>
      <div className="iconSocailMedia">
      <LinkedinFilled/>
      </div>
      <div className="iconSocailMedia">
      <YoutubeFilled/>
      </div>
      <div className="iconSocailMedia">
      <PhoneFilled/>
      </div>
    
    
    </div>
    
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
    </ul>
    <p>&copy;2023 Gift Of Hope | All Rights Reserved</p>
  </footer>
  </div>
  );
};

export default Footer;
