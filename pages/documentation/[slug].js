import { useState } from 'react';
import parser from 'html-react-parser';
import { Layout } from '../../components/layout/Layout';
// import { BreadCrumbs } from '../../components/blocks/BreadCrumbs';
import { SidebarLeft } from '../../components/blocks/sidebars/Left';
import { SidebarRight } from '../../components/blocks/sidebars/Right';
import { DocsContent } from '../../components/blocks/DocsContent';
import { Pagination } from '../../components/blocks/Pagination';
import { getAllPosts } from '../../api';



export async function getStaticPaths() {
  try {
    const data = await getAllPosts();
    const paths = data.posts.map(({slug}) => ( { params: { slug: slug.toString() } } ));

    return { paths, fallback: false }
  } catch (err) {
      console.warn(err);
      return { paths: [], fallback: false }
  }
}

export const getStaticProps = async (context) => {
  try {
      const data = await getAllPosts();
      const {slug} = context.params;
      const singlePostIndex = data.posts.findIndex(post => post.slug === slug);

      if (singlePostIndex < 0) throw 'invalid slug!'; // triger 404

      const singlePost = data.posts[singlePostIndex];      
      const prevPost = singlePostIndex !== 0 ? data.posts[singlePostIndex - 1] : null;
      const nextPost = singlePostIndex !== data.posts.length - 1 ? data.posts[singlePostIndex + 1] : null;

      return { props: {data, singlePost, prevPost, nextPost} }

  } catch (err) {
      console.warn(err);
      return { notFound: true }
  }
}

const DocumentationPage = ({data, singlePost, prevPost, nextPost}) => {

  const {html, title, id, meta_title, meta_description} = singlePost;
  const content = parser(html);  
  const docsData = {content, title};
  const breadcrumbsData = [
    singlePost.primary_tag ? singlePost.primary_tag.name : '',
    title
  ];
  const metas = { title: meta_title || title, description: meta_description || title };
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
     <Layout seo={metas} extHeader={false}>
      {/* <BreadCrumbs data={breadcrumbsData}/> */}
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


export default DocumentationPage;