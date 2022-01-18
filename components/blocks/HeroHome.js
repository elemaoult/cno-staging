import TypeIt from "typeit";
import Image from "next/image";
import mockup from '../../img/mockup.png';
import { useEffect, useRef } from "react";

export const HeroHome = () => {

  const headingRef = useRef(null);

  useEffect(() => {

    try {
      const typeitData = headingRef.current.dataset.content;
      const [typePart1, typePart2, ...typeOthers] = typeitData.split(" | ");
      const typeitResult = `
        ${typePart1 || 'Hello world!'} 
        ${typePart2 ? `<br/><span>${typePart2}</span>` : ''} 
        ${typeOthers || ''}
      `;

      const typeitInst = new TypeIt(headingRef.current, { speed: 80, loop: true })
        .type(typeitResult, {delay: 100})
        .go()


      return () => typeitInst.destroy();

    } catch (err) {
      console.warn('error in typeit in home hero', err);
    }



  });

  return (
    <section className="hero_section"> 
      <div className="container"> 
        <div className="hero_content" data-aos="fade-right"> 
          <div className="content_hero">
            <h2 id="typeit_hero" ref={headingRef} data-content="Reduce your time to | tedious tasks."></h2>
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