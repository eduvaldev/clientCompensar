import React from 'react';
import '../assets/styles/Footer.css';
import logo from '../assets/images/compensar_logo-white.png';
import FooterGloves from '../assets/images/Footer_gloves.png';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-information">
          <figure>
            <img src={logo} alt="compensarLogo" />
          </figure>
          <h2 className="footer-container__title">Legal</h2>
          <a
            href="https://corporativo.compensar.com/politicas-privacidadcondiciones-uso"
            className="footer-container__link link1"
          >
            Politicas de Privacidad y condiciones de uso

          </a>
          <a href="https://corporativo.compensar.com/politicas-privacidadcondiciones-uso" className="footer-container__link ">Términos y condiciones</a>
          <br />
          <figure className="footer-gloves">
            <img src={FooterGloves} alt="" />
          </figure>
        </div>

        <div className="container__footer">
          <div className="social-icons">
            <a href="https://twitter.com/Compensar_info" className="footer-container__link ">
              {' '}
              <i className="icon-twitter" />
            </a>
            <a href="https://www.instagram.com/compensar_info/" className="footer-container__link ">
              {' '}
              <i className="icon-instagram" />
            </a>
            <a href="https://www.facebook.com/Compensarinfo#xd_co_f=ZGViMGEzYzgtNjljZC00ZTY1LWI2MjMtODJiYWIyYTk3OGZj~" className="footer-container__link ">
              {' '}
              <i className="icon-facebook2" />
            </a>
            {/* <a href='https://www.youtube.com/user/Compensarinfo' className='footer-container__link '> <i className='icon-youtube'></i></a> */}
            {/* <a href='https://www.linkedin.com/company/compensar' className='footer-container__link '> <i className='icon-linkedin'></i></a> */}
          </div>
        </div>
      </div>
    </>

  );
};

export default Footer;
