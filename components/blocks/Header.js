import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import burger from '../../img/burger.svg';
import close from '../../img/close.svg';
import menu from '../../img/cno-menu.svg';


export const Header = () => {

  const [active, setActive] = useState(false);

  return (
    <header className={`header${active ? ' active' : ''}`}>
      <div className="header__inner"> 
        <button className="btn header__burger">
          <div className="header__opener--default" onClick={() => setActive(true)}>
            <Image
              src={burger}
              alt=""
              priority={true}
            />
          </div>
          <div className="header__opener--active" onClick={() => setActive(false)}>
            <Image
              src={close}
              alt=""
              priority={true}
            />
          </div> 
        </button>
        <div className="header__logo">
          <Link href="/">
            <a> 
              <div className="header__logoImg">
                <Image
                  src={menu}
                  width={130}
                  height={44}
                  className="header__opener--active"
                  alt=""
                  priority={true}
                />
              </div>            
            </a>
          </Link>           
        </div>
        <div className="header__slogan">Release 0.1</div>
        <div className="header__buttons"> 
          <Link href="/documentation">
            <a className="btn btn--primary">DOCUMENTATION</a>
          </Link>          
          <a className="btn btn--secondary" href="#">START FOR FREE</a>
        </div>
      </div>
      <div className="headerMobile"> 
        <ul className="headerMobile__links"> 
          <li> <a href="#">Get started</a></li>
          <li> <a href="#">Documentation</a></li>
          <li> <a href="#">About us</a></li>
          <li> <a href="#">Slack channel</a></li>
        </ul>
        <ul className="headerMobile__actions"> 
          <li> 
            <a href="#">
              <span>
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0H27C27.5531 0 28 0.446875 28 1V21C28 21.5531 27.5531 22 27 22H1C0.446875 22 0 21.5531 0 21V1C0 0.446875 0.446875 0 1 0ZM2.25 3.4625V19.75H25.75V3.4625L26.6125 2.79063L25.3844 1.2125L24.0469 2.25313H3.95L2.6125 1.2125L1.38437 2.79063L2.25 3.4625ZM3.95 2.25L14 10.0625L24.05 2.25L25.3875 1.20937L26.6156 2.7875L25.7531 3.45938L15.0781 11.7594C14.7711 11.9979 14.3934 12.1273 14.0047 12.1273C13.6159 12.1273 13.2382 11.9979 12.9312 11.7594L2.25 3.4625L1.3875 2.79063L2.61563 1.2125L3.95 2.25Z" fill="black"></path>
                </svg>
              </span>
              Ask for demonstration
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}