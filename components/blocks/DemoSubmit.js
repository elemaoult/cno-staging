import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import link_home from '../../img/submit-1.svg';
import link_docs from '../../img/submit-2.svg';
import link_linkedin from '../../img/submit-3.svg';



export const DemoSubmit = () => { 

  useEffect(() => {
    window.scrollTo({
      top: (formRef.current.getBoundingClientRect().top - (formRef.current.clientHeight / 2)),
      behavior: "smooth"
    });
  }, []);

  const formRef = useRef(null);
  const links = [
    {href: '/', img: link_home, label: 'Back to square one Home page'},
    {href: '/documentation', img: link_docs, label: 'Discover our documentation'},
    {href: '#', img: link_linkedin, label: 'Let’s keep in touch, join us on Linkedin.'}
  ]

  return (
    <div className="formSubmit" ref={formRef}>
      <div className="formSubmit__title">Your request has been received !</div>
      <div className="formSubmit__subtitle">You will receive an answer within 48 working hours.</div>
      <div className="links">
        {
          links.map(({href, img, label}, i) => (
            <div className="links__link" key={i}>
              <Link href={href}>
                <a>
                  <Image src={img} layout="fixed" alt="" width={116} height={116} />
                  <p>{label}</p>
                </a>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}