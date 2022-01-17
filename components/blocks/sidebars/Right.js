import Image from "next/image";
import { useEffect, useState } from "react";
import github from '../../../img/github.svg';
import slack from '../../../img/slack-footer.svg';
import mail from '../../../img/mail-round.svg';



export const SidebarRight = ({content, title}) => {
  const [step, setStep] = useState(0);
  const anchors = [];
  const ids = ['page-title'];

  content.forEach(el => {
    if (el.type === 'h2') {
      anchors.push(el);
      ids.push(el.props.id);
    }
  });

  const anchorHandler = (id) => {
    const target = document.getElementById(`${id}`);

    console.log(target);

    if (target) {
      window.scrollTo({
          top: (target.getBoundingClientRect().top - (target.clientHeight / 2)) + scrollY - 200,
          behavior: "smooth"
      });
    }
  }

  useEffect(() => {  
    const scrollHandler = () => {
      try {
        let newStep = 0;

        ids.forEach((id, i) => {
          const node = document.getElementById(`${id}`);

          if (node) {
            const screenOffset = (node.getBoundingClientRect().top);

            if (screenOffset < 250) {
              newStep = i;
            };
          }        
        });

        setStep(newStep); 
      } catch(err) {
        console.warn(err);
      }
    }

    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  });

  return (
    <aside className="sidebar sidebar--right">
      <div className="sidebar__content">
        <div className="sidebar__part">
          <div className="sidebar__title">{title}</div>
          <ul className={`sidebar__list sidebar__list--step${step}`} style={{['--step']: step}}>
            <li className={step == 0 ? 'active' : null}>
              <button className="btn anchor" onClick={() => anchorHandler('page-title')}>{title}</button>
            </li>
            {
              anchors.map((anchor, i) => {
                return (
                  <li key={anchor.props.id} className={step == i + 1 ? 'active' : null}>
                    <button className="btn anchor" onClick={() => anchorHandler(anchor.props.id)}>{anchor.props.children}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="sidebar__part">
          <div className="sidebar__title">SUPPORT</div>
          <div className="supportLinks">
            <a href="#" className="btn btn--link supportLinks__link" target="_blank">
              <Image width={30} height={30} src={github} alt="" />
              <p>Create doc. Issue</p>
            </a>
            <a href="#" className="btn btn--link supportLinks__link" target="_blank">
              <Image width={30} height={30} src={slack} alt="" />
              <p>Join us on Slack</p>
            </a>
            <a href="#" className="btn btn--link supportLinks__link" target="_blank">
              <Image width={30} height={30} src={mail} alt="" />
              <p>Ask for demo</p>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}