import TypeIt from "typeit";
import Image from "next/image";
import mockup from '../../img/mockup.png';
import { useEffect, useRef } from "react";

export const HeroHome = () => {

  const headingRef = useRef(null);

  useEffect(() => {
    try {
      const typeitData = headingRef.current.dataset.content;
      const typeitSplitted = typeitData.split(" | ");
      const typePart1 = typeitSplitted[0] || '';
      const typePart2 = typeitSplitted[1] || '';

      const typeitInst = new TypeIt(headingRef.current, { speed: 140, loop: true })
        .type(typePart1, {delay: 300})
        .pause(500)
        .delete(14)
        .pause(500)
        .type(typePart2, {delay: 100})
        .pause(500)
        .go()


      return () => typeitInst.destroy();
    } catch (err) {
      console.warn('error in typeit in home hero --- ', err);
    }
  });

  return (
    <section className="hero_section"> 
      <div className="container"> 
        <div className="hero_content" data-aos="fade-right"> 
          <div className="content_hero">
            <h2 id="typeit_hero">
              Reduce your time to <br />
              <span ref={headingRef} data-content="tedious tasks. | production."></span>
            </h2>
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
          priority={true}
          alt=""
        />
      </div>      
    </section>
  )
}