import Image from "next/image";
import top_cloud from '../../img/cloud-02.svg';
import bottom_cloud from '../../img/cloud-02.svg';
import top_mobile_cloud from '../../img/cloud-02-mobile.svg';
import bottom_mobile_cloud from '../../img/cloud-02-mobile.svg';
import microphone from '../../img/microphone.svg';


export const CloudCapture = () => {

  return (
    <section className="cloud">
      <div className="container">
        <div className="top_cloud">
          <Image
            src={top_cloud}
            layout="fill"
            alt=""
          />
        </div>
        <div className="bottom_cloud">
          <Image
            src={bottom_cloud}
            layout="fill"
            alt=""
          />
        </div>
        <div className="top_mobile_cloud">
          <Image
            layout="fill"
            src={top_mobile_cloud}
            alt=""
          />
        </div>
        <div className="bottom_mobile_cloud">
          <Image
            layout="fill"
            src={bottom_mobile_cloud}
            alt=""
          />
        </div>
        <div className="cloud_content" data-aos="fade-top">
          <h2>Welcome, how I can help you ?</h2>
          <p>I’m a unified Kubernetes management platform completing scale-up adoption and day-to-day usage of the famous rudder in a multi-cloud ecosystem. Through my intuitive interface, you will sweep away the natural complexity of Kubernetes by unifying the management of your DevOps workflow, environments, and ultimately, deployments in an agile project management based framework.</p>
          {/* <div className="microphone">
            <Image
              src={microphone}
              layout=""
              alt=""
            />
          </div> */}
          <a className="btn btn--action" href="#">LET’S TAKE A CLOSER LOOK !</a>
        </div>
      </div>
    </section>
  )
}