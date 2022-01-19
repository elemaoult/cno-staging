import { Layout } from '../components/layout/Layout';
import HubspotForm from 'react-hubspot-form';
import { CloudDemo } from '../components/clouds/CloudDemo';

const Demonstration = () => {

  const metas = {
    title: 'Demonstration page',
    description: 'Demonstration page description'
  };

  return (
    <Layout seo={metas} extHeader={false}>
      <CloudDemo>
        <div className="form">
          <HubspotForm
            portalId='8613364'
            formId='23318cee-c186-4bb0-b4f1-2a85f6f6fac5'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
        </div>
        <div className="demonstration__subs">
          <p>Your data is protected. See our privacy policy and our commitment here.</p>
          <p>The collection of the requested information is necessary for CNO to process your request. It will allow you to be contacted in connection with your request. The information collected may be used for prospecting purposes.</p>
          <p>You have the right to access, rectify, oppose and delete data concerning you. To exercise these rights, please consult our page management of my personal data.</p>
        </div>
      </CloudDemo>
    </Layout>
  )
}

export default Demonstration;