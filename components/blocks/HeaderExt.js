import Image from "next/image";
import beopen from '../../img/beopen.svg';
import linux from '../../img/linux.svg';


export const HeaderExt = () => {

  return (
    <div className="headerExt">
      <div className="container"> 
        <div className="headerExt__inner">
          <div className="headerExt__txt">
            <p>Product presented by</p>
            <p> <a href="#" target="_blank">www.beopenit.com</a></p>
          </div>
          <div className="headerExt__logo">
            <a href="#" target="_blank">
              <Image
                src={beopen}
                width={310}
                height={68}
                alt=""
                priority={true}
              />
            </a>
          </div>
          <div className="headerExt__img">
            <a href="#" target="_blank">
              <Image
                src={linux}
                width={187}
                height={75}
                alt=""
                priority={true}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}