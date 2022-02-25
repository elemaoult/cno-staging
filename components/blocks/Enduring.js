import Image from "next/image";
import screens from '../../img/Home-Page-Scree-02.svg';

export const Enduring = () => {

  return (
    <section className="link_block">
      <div className="container">
        <div className="left_block">
          <Image
            src={screens}
            alt=""
          />
        </div>
        <div className="right_block">
          <h3>Unify your multi-cloud ecosystem on a single console</h3>
          <p> Stop enduring the scattering of multi-cloud. CNOHub Seamless and secure availability of your clusters - cloud based and/or on premises - by centralizing their governance on a single console</p>
          <a href="#">CNOhub concept</a>
        </div>
      </div>
    </section>
  )
}