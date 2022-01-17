import Image from "next/image";
import Aws from '../../img/logos/Aws.svg';
import Gcp from '../../img/logos/Gcp.svg';
import Azure from '../../img/logos/Azure.svg';
import Tanzu from '../../img/logos/Tanzu.svg';


export const Technologies = () => {

  return (
    <section className="technology">
      <h3>What are your limits ?</h3>
      <p>None. All types of Kubernetes are supported, no more and no less !</p>
      <ul>
        <li>
          <div className="aws">
            <Image
              src={Aws}
              alt=""
            />
          </div>
        </li>
        <li>
          <div className="google">
            <Image
              src={Gcp}
              alt=""
            />
          </div>
        </li>
        <li>
          <div className="azure">
            <Image
              src={Azure}
              alt=""
            />
          </div>
        </li>
        <li>
          <div className="tanzo">
            <Image
              src={Tanzu}
              alt=""
            />
          </div>
        </li>
      </ul>
    </section>
  )
}