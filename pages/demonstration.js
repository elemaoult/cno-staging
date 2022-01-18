import { Layout } from '../components/layout/Layout';
import HubspotForm from 'react-hubspot-form';
import { CloudDemo } from '../components/blocks/CloudDemo';

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
      </CloudDemo>
    </Layout>
  )
}

export default Demonstration;