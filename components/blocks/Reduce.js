import Image from "next/image";
import screens from '../../img/Home-Page-Scree-01.svg';

export const Reduce = () => {

  return (
    <div className="link_block">
      <div className="container">
        <div className="left_block">
          <Image
            src={screens}
            alt=""
          />
        </div>
        <div className="right_block">
          <h3>Just make benefits !</h3>
          <p> All that’s left is for you and  your teams, is to achieve business objectives. In a few clicks with CNO  deploy , you can choose  the  deployment model bests suited to your use cases for each application: Continuous Delivery, Continuous Deployment or Blue/Green.</p>
          <a href="#">CNO Deploy concept</a>
        </div>
      </div>
    </div>
  )
}