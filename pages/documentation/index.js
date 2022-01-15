import parser from 'html-react-parser';
import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/blocks/Header';
import { BreadCrumbs } from '../../components/blocks/BreadCrumbs';
import { SidebarLeft } from '../../components/blocks/sidebars/Left';
import { SidebarRight } from '../../components/blocks/sidebars/Right';
import { DocsContent } from '../../components/blocks/DocsContent';
import { Pagination } from '../../components/blocks/Pagination';

export const getServerSideProps = async (context) => {
  try {
      const response = await fetch('https://cno-documention.ghost.io/ghost/api/v4/content/posts/?key=72bf9fc7b0aabcceec343c7eaa&include=tags&order=published_at%20asc');
      const data = await response.json();

      const prevPost = null;
      const nextPost = data.posts.length > 1 ? data.posts[1] : null;

      return { props: {data, prevPost, nextPost} }

  } catch (err) {
      console.warn(err);
      return { notFound: true }
  }
}


const Documentation = ({data, prevPost, nextPost}) => {

  const {html, title, id, meta_title, meta_description} = data.posts[0];
  const content = parser(html);  
  const docsData = {content, title};
  const breadcrumbsData = [
    data.posts[0].primary_tag ? data.posts[0].primary_tag.name : '',
    title
  ];
  const metas = { title: meta_title || title, description: meta_description || title };

  return (
   <>
    <Layout seo={metas}>
      <Header/>
      <BreadCrumbs data={breadcrumbsData}/>
      <div className="docsWrap">
        <SidebarLeft data={data} currentPost={id}/>
        <div className="documentation">
          <DocsContent {...docsData}/>
          <Pagination next={nextPost} prev={prevPost}/>
         </div> 
        <SidebarRight/>
      </div>
    </Layout>
   </>
  )
}



export default Documentation;
