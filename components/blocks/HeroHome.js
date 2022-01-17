import Image from "next/image";
import mockup from '../../img/mockup.png';

export const HeroHome = () => {

  return (
    <section className="hero_section"> 
      <div className="container"> 
        <div className="hero_content" data-aos="fade-right"> 
          <div className="content_hero">
            <h2>Reduce your time to <span>tedious tasks.</span></h2>
            <p>No code, no compromise, no waste… only Kubernetes benefits.</p>
          </div>
          <div className="content_buttons"> 
            <a className="btn btn--secondary" href="#">START FOR FREE</a>
            <span className="button-subs">FOR 6 MONTHS FREE TRIAL</span>
          </div>
        </div>
      </div>
      <div className="background_wrap" data-aos="fade-left">
        <Image
          src={mockup}
          layout="responsive"
          placeholder="blur"
          alt=""
        />
      </div>      
    </section>
  )
}