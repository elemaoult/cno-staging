import Image from "next/image";
import slack from '../../img/slack.svg';

export const StoryCards = () => {

  return (
    <section className="storys">
      <div className="yellow_block">
        Let’s preserve our precious resources, CPU, memo…
        <strong>especially time and people behind the machine !</strong>
      </div>
      <div className="blue_block">
        <div className="overlay"></div>
        <h3> OUR LITTLE HISTORY</h3>
        <p>CNO is two years of hard work. Starting in the cloud era, our engineers and managers have capitalized on the best … and the worst of a transition to Kubernetes with the largest companies. After a few thousand hours of code, agile points, and a common “We can do IT”, we have come to the beginning of the most ambitious project we have undertaken : The Cloud-Native Onboarding, born in the corridors of the leading African telecommunication company Orange Sonatel.</p>
      </div>
      <div className="green_block">
        <h3>WE STRONGLY BELIEVE</h3>
        <p>that the cloud offers exponential opportunities. Even today, these technologies are complex and restrictive. That’s why we’re working to open up this field of possibilities for you by developing simple, secure and uncompromising solutions - starting with the orchestration standard : Kubernetes.</p>
      </div>
      <div className="red_block">
        <div className="overlay"></div>
        <div className="red_left">
          <h3>JOIN ADVENTURE</h3>
          <p>CNO Slack is a collaborative gathering place where questions are always answered. Discuss your issues with its creators and learn more about the platform !</p>
        </div>
        <div className="red_right">
          <Image
            src={slack}
          />
        </div>
      </div>
    </section>
  )
}