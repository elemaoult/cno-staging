import Image from "next/image";
import top_cloud from '../../img/cloud-02.svg';
import bottom_cloud from '../../img/cloud-02.svg';
import top_mobile_cloud from '../../img/cloud-02-mobile.svg';
import bottom_mobile_cloud from '../../img/cloud-02-mobile.svg';

export const CloudTrial = () => {

  return (
    <section className="cloud">
      <div className="container">
        <div className="top_cloud">
          <Image
            src={top_cloud}
            layout="fill"
          />
        </div>
        <div className="bottom_cloud">
          <Image
            src={bottom_cloud}
            layout="fill"
          />
        </div>
        <div className="top_mobile_cloud">
          <Image
            layout="fill"
            src={top_mobile_cloud}
          />
        </div>
        <div className="bottom_mobile_cloud">
          <Image
            layout="fill"
            src={bottom_mobile_cloud}
          />
        </div>
        
        
        
        <div className="cloud_content">
          <h2>Test & adopt the best Kubernetes framework for free !</h2>
          <p>Message for the cloud community, digital transformation stakeholders, your feedback on this free Beta version will help us to provide you an ideal tool to get the full potential of your Kubernetes projects.</p>
          <a className="btn btn--action" href="#">START FOR 60 DAYS FREE TRIAL</a>
          <a>Do you prefer a demo before start ? Yes !</a>
        </div>
      </div>
    </section>
  )
}