import Image from "next/image";
import top_cloud from '../../img/cloud-03-black.svg';
import bottom_cloud from '../../img/cloud-02.svg';
import top_mobile_cloud from '../../img/cloud-02-mobile.svg';
import bottom_mobile_cloud from '../../img/cloud-02-mobile.svg';
import microphone from '../../img/microphone.svg';


export const CloudDemo = ({children}) => {

  return (
    <section className="cloud cloud--demo">
      <div className="container">
        <div className="top_cloud">
          <Image src={top_cloud} layout="fill" alt="" />
        </div>
        <div className="bottom_cloud">
          <Image src={bottom_cloud} ayout="fill" alt="" />
        </div>
        <div className="top_mobile_cloud">
          <Image layout="fill" src={top_mobile_cloud} alt="" />
        </div>
        <div className="bottom_mobile_cloud">
          <Image layout="fill" src={bottom_mobile_cloud} alt="" />
        </div>
        <div className="cloud_content" data-aos="fade-top">
          <h2>Personalized demo with our engineers</h2>
          <p>Take 1 minute to fill out the form. Our experts will contact you to better understand your situation and set up a demo according to your use cases.</p>

          {children}
        </div>
      </div>
    </section>
  )
}