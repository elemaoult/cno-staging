import { useState } from 'react';
import parser from 'html-react-parser';
import { Layout } from '../../components/layout/Layout';
import { Breadcrumbs } from '../../components/blocks/Breadcrumbs';
import { SidebarLeft } from '../../components/blocks/sidebars/Left';
import { SidebarRight } from '../../components/blocks/sidebars/Right';
import { DocsContent } from '../../components/blocks/DocsContent';
import { Pagination } from '../../components/blocks/Pagination';
import { getAllPosts } from '../../api';

export const getServerSideProps = async (context) => {
  try {
      const data = await getAllPosts();
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
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
   <>
    <Layout seo={metas} extHeader={false}>
      <Breadcrumbs data={breadcrumbsData}/>
      <div className="docsWrap">
        <SidebarLeft data={data} currentPost={id} active={sidebarActive}/>
        <div className="documentation">
          <DocsContent {...docsData}/>
          <Pagination next={nextPost} prev={prevPost}/>
        </div>
        <button className={`btn sidebarOpener${sidebarActive ? ' active' : ''}`} onClick={() => setSidebarActive(!sidebarActive)}></button>  
        <SidebarRight content={content} title={title}/>
      </div>
    </Layout>
   </>
  )
}



export default Documentation;
