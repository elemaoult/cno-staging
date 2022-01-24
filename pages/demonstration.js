import { Layout } from '../components/layout/Layout';
import { CloudDemo } from '../components/clouds/CloudDemo';
import { DemoForm } from '../components/blocks/DemoForm';
import { useState } from 'react';
import { DemoSubmit } from '../components/blocks/DemoSubmit';

const Demonstration = () => {

  const [isSubmited, setIsSubmited] = useState(false);
  const metas = {
    title: 'Demonstration page',
    description: 'Demonstration page description'
  };

  const submitHandler = (result) => {
    setIsSubmited(result)
  }

  return (
    <Layout seo={metas} extHeader={false}>
      <CloudDemo>
        {
          isSubmited ?
          <DemoSubmit/> :
          <DemoForm onSubmit={submitHandler}/>
        }
        
      </CloudDemo>
    </Layout>
  )
}

export default Demonstration;