import { useEffect, useState } from "react";


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
    const target = document.querySelectorAll(`#${id}`);

    console.log(target, id);

    if (target.length) {
      window.scrollTo({
          top: (target[0].getBoundingClientRect().top - (target[0].clientHeight / 2)) + scrollY - 200,
          behavior: "smooth"
      });
    }
  }

  useEffect(() => {  
    const scrollHandler = () => {
      let newStep = 0;

      ids.forEach((id, i) => {
        const node = document.querySelector(`#${id}`);

        if (node) {
          const screenOffset = (node.getBoundingClientRect().top);

          if (screenOffset < 250) {
            newStep = i;
          };
        }

        
      });

      setStep(newStep); 
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
          <ul className="sidebar__list">
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
      </div>
    </aside>
  )
}