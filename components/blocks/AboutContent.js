import Image from "next/image";
import member from '../../img/member.jpeg';
import linkedin from '../../img/linkedin-colored.svg';
import slack from '../../img/slack.svg';




export const AboutContent = () => {

  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__intro">
            <h2 className="about__title">THE HUMANS BEHIND THE MACHINE</h2>
            <ol className="install">
              <li style={{ ['--stage']: 0 }}><span>Import</span> CNO_Team</li>
              <li style={{ ['--stage']: 1 }}><span>Thinking big</span> = main</li>
              <li style={{ ['--stage']: 1 }}><span>Excelling</span> =/control-success/</li>
              <li style={{ ['--stage']: 1 }}><span>Deepen</span> = {'< user_key >'}</li>
            </ol>
          </div>
          <div className="members">
            {
              Array.from({length: 16}).map((el, i) => {
                return (
                  <div className="member" key={i}>
                    <div className="member__photo">
                      <Image layout="fill" src={member} alt="" />
                    </div>
                    <div className="member__caption">
                      <div className="member__name">Mody Sow</div>
                      <div className="member__pos">Software Engineer</div>
                      <div className="member__links">
                        <a href="#" className="member__link">
                          <Image
                            layout=""
                            src={linkedin}
                            alt=""
                          />
                        </a>
                      </div>                
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="storys">
            <div className="red_block">
              <div className="overlay"></div>
              <div className="red_left">
                <h3>JOIN ADVENTURE</h3>
                <p>CNO Slack is a collaborative gathering place where questions are always answered. Discuss your issues with its creators and learn more about the platform !</p>
              </div>
              <div className="red_right">
                <Image
                  src={slack}
                  alt=""
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}