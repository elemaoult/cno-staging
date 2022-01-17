import Image from "next/image";
import screens from '../../img/screens.svg';

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
          <h3>Reduce your time to market by 5</h3>
          <p> All that’s left is for your teams to sustain your momentum and achieve business objectives. In a few clicks, they will have access to the deployment strategies best suited to your use cases as continuous delivery, continuous deployment, or even Blue/Green.</p>
          <a href="#">CNO Deploy concept</a>
        </div>
      </div>
    </div>
  )
}