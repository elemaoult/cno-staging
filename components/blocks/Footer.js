import Image from "next/image";
import cno from '../../img/cno-footer.svg';
import linkedin from '../../img/linkedin-footer.svg';
import slack from '../../img/slack-footer.svg';
import beopeni from '../../img/beopeni-footer.svg';
import Link from "next/link";

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="container"> 
        <div className="footer__inner">
          <div className="footer__main">
            <a className="footer__logo" href="#">
              <div className="footer__logoImg">
                <Image
                  src={cno}
                  alt=""
                />
              </div>
            </a>
            <div className="footer__description">Empower your engineers to drive your Kubernetes goals to completion or beyond.</div>
            <ul className="socials"> 
              <li>
                <a href="#">
                  <Image
                    src={linkedin}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src={slack}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="green_started">Get started for 6 month free trial</div>
          <div className="footer__lists">
            <div className="footer__list"> 
              <div className="footer__title">Platform</div>
              <ul> 
                <li> <a href="#">Get started</a></li>
                <li>
                  <Link href="/demonstration">
                    <a>Demonstration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation">
                    <a>Documentation</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__list"> 
              <div className="footer__title">Community</div>
              <ul> 
                <li> <a href="#">Slack channel</a></li>
                <li>
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__outer"> 
          <ul> 
            <li>© 2021 designed by beopen IT all rights reserved</li>
            <li>Thanks Freepik for vector ressources</li>
            <li><a href="#">Privacy Notice </a></li>
            <li> <a href="#">Site Terms </a></li>
            <li> <a href="#">Cookie Settings </a></li>
          </ul>
          <a className="powered" href="#">
            <div className="powered__img">
              <Image
                src={beopeni}
                layout="responsive"
                alt=""
              />
            </div>            
          </a>
        </div>
      </div>
    </footer>
  )
}