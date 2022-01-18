import Image from "next/image";
import top_cloud from '../../img/cloud-02.svg';
import bottom_cloud from '../../img/cloud-02.svg';
import top_mobile_cloud from '../../img/cloud-02-mobile.svg';
import bottom_mobile_cloud from '../../img/cloud-02-mobile.svg';
import microphone from '../../img/microphone.svg';


export const CloudGreen = () => {

  return (
    <section className="cloud cloud--top cloud--green">
      <div className="container">
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
        <div className="cloud_content" data-aos="fade-top">
          <h2>WE STRONGLY BELIEVE</h2>
          <p>in the exponential opportunities that cloud technologies offer us. Recently, these technologies are still far too complex. Therefore, we strive to open this field of possibilities to you by providing simple, secure, without compromise solutions - starting with the orchestration standard: Kubernetes.</p>
        </div>
      </div>
    </section>
  )
}