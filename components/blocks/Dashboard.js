import Image from "next/image";
import shema from '../../img/shema-n01.svg';

export const Dashboard = () => {

  return (
    <section className="dashboard">
      <div className="container">
        <p>
          Designed by Kubernetes experts and IT managers in order to  
          <span> empower IT teams in day-to-day Kubernetes usage </span>
          without dealing with its complexity.
        </p>
        <div className="dashboard__img">
          <Image
            src={shema}
          />
        </div>
      </div>
    </section>
  )
}