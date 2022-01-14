import Image from "next/image";
import screens from '../../img/screens.svg';

export const Enduring = () => {

  return (
    <section className="link_block">
      <div className="container">
        <div className="left_block">
          <Image
            src={screens}
          />
        </div>
        <div className="right_block">
          <h3>Stop enduring the lock-in effects</h3>
          <p>  Seamless and secure availability is the key to your productivity ! From CNOhub, Help your teams fill the multi-cloud gap by centralizing the management of cloud-based and/or on-premises clusters on a single console.</p>
          <a href="#">CNOhub concept</a>
        </div>
      </div>
    </section>
  )
}