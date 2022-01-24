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
          <h3>Improve your multi-tenancy organisation</h3>
          <p> On the way to a full-scale adoption, you onboard all your teams in a framework, thought on the basis of the best practices of DevOps agility, in which is considered a transversal collaboration by project and a regulation without waste of your resources across all your existing environments.</p>
          <a href="#">CNO Onboard concept</a>
        </div>
      </div>
    </section>
  )
}