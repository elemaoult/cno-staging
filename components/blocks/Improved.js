import Image from "next/image";
import screens from '../../img/Home-Page-Scree-03.svg';

export const Improved = () => {

  return (
    <section className="link_block_reverse">
      <div className="container">
        <div className="left_block">
          <Image
            src={screens}
            alt=""
          />
        </div>
        <div className="right_block">
          <h3>Onboard all your organizational teams and projects in minutes</h3>
          <p> On the way to a full-scale adoption, you will onboard all your teams in a common framework, based on the best pratices od DevSecOps agility. CNO thought on the basis of the best practices of DevOps agility.CNO onboard considers  a transversal collaboration by project and a regulation without waste of your resources across all your existing environments.</p>
          <a href="#">CNO Onboard concept</a>
        </div>
      </div>
    </section>
  )
}