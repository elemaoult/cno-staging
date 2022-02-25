import { useEffect } from 'react';
import HubspotForm from 'react-hubspot-form';
import Accordion from '../accordion/Accordion';

export const DemoForm = ({onSubmit}) => {

  return (
    <>
      <div className="beta-tester">
        <div className="details">
          <span>Why become a <span>Beta tester</span> ?</span>
          <span>It’s hard to find a better application orchestrator tool. Kubernetes is a very current technology that tends to be part of the IT engineering landscape for many years to come. Despite its hegemony, success stories remain isolated cases. Especially in Europe and Africa. If you achieved your Kubernetes migration, congratulations, if not, we strongly believe that CNO can help you reach this milestone.</span>
        </div>
        <div className="collapsion">
            <Accordion title="<span>By becoming an Beta tester you will benefit from the following advantages</span>" content="<span>• 6 month free trial with no access restrictions </span> <span>• Implementation of the product by our engineers</span> <span>• Kubernetes trainings if needed </span><span>• Permanent monitoring throughout the contract period </span><span>• Highlighting of all Beta testers on our communication supports in case of fund raising, European, African or global expansion </span>" />
            <Accordion title="By becoming an Beta tester you will collaborate with" content="<span>• Experienced engineers in the field of the cloud migration & DevSecOps challenges (Hermès, BNPP, Natixis…) </span> <span> • A start-up whose ambition is to found the largest Franco-African cloud community.</span><span> • The first French and African company to be Kubernetes Training Partners by the CNCF.</span><span> • An Agile team able to do a lot in little time.</span>" />
            <Accordion title="By becoming an Beta tester you will choose the new features of CNO" content="<span>• Product improvements based on your feedback </span> <span>• Optimize the existing features and implementing new features</span> <span>• CNO Deploy: Canary, A/B Testing</span> <span>• CNO Secure: Policies, Governance, Scans</span> <span>• Develop the Saas version in accordance with your needs.</span>" />
        </div>
      </div>
      <div className="demo__section">
          <div className="demostration__tags_num">
                    <div className="circle">
                      <span>1</span>
                    </div>
                    <div className="content">
                      <span>Let’s get to know each other to make sure we can meet your challenges.</span>
                    </div>
                    <p>Take 1 minute to fill out the form. We will send you a meeting proposal (we answer in a matter of minutes) to get to know more about your current context, your objectives and technical challenges.</p>
                    <div className="form">
                        <HubspotForm
                          portalId='8613364'
                          formId='23318cee-c186-4bb0-b4f1-2a85f6f6fac5'
                          onSubmit={() => onSubmit(true)}
                          onReady={(form) => console.log('Form ready!')}
                          loading={<div>Loading...</div>}
                        />
                    </div>
                    <div className="demonstration__subs">
                        <p>Your data is protected. See our privacy policy and our commitment here.</p>
                        <p>The collection of the requested information is necessary for CNO to process your request. It will allow you to be contacted in connection with your request. The information collected may be used for prospecting purposes.</p>
                        <p>You have the right to access, rectify, oppose and delete data concerning you. To exercise these rights, please consult our page management of my personal data.</p>
                    </div>
          </div>
          <div className="demostration__tags_num">
                    <div className="circle">
                      <span>2</span>
                    </div>
                    <div className="content">
                      <span>Get a personalized tour of CNO, and ask all the questions you might have.</span>
                    </div>
          </div>
          <div className="demostration__tags_num">
                  <div className="circle">
                    <span>3</span>
                  </div>
                  <div className="content">
                    <span>Test accompanied, criticize without reserve, and adopt the results of our common work.</span>
                  </div>
          </div>
      </div>
    </>
  )
}