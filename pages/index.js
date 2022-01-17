import { HeroHome } from '../components/blocks/HeroHome';
import { CloudCapture } from '../components/blocks/CloudCapture';
import { Dashboard } from '../components/blocks/Dashboard';
import { Enduring } from '../components/blocks/Enduring';
import { Technologies } from '../components/blocks/Technologies';
import { Improved } from '../components/blocks/Improved';
import { Reduce } from '../components/blocks/Reduce';
import { CloudTrial } from '../components/blocks/CloudTrial';
import { StoryCards } from '../components/blocks/StoryCards';
import { Layout } from '../components/layout/Layout';

const Home = () => {

  const metas = {
    title: 'Home page',
    description: 'Home page description'
  };

  return (
    <Layout seo={metas} extHeader={true}>
      <HeroHome/>
      <CloudCapture/>
      <Dashboard/>
      <Enduring/>
      <Technologies/>
      <Improved/>
      <Reduce/>
      <CloudTrial/>
      <StoryCards/>
    </Layout>
  )
}

export default Home;