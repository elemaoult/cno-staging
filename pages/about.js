import { AboutContent } from '../components/blocks/AboutContent';
import { CloudGreen } from '../components/blocks/CloudGreen';
import { Layout } from '../components/layout/Layout';

const About = () => {

  const metas = {
    title: 'About page',
    description: 'About page description'
  };

  return (
    <Layout seo={metas} extHeader={false}>
      <CloudGreen/>
      <AboutContent/>
    </Layout>
  )
}

export default About;