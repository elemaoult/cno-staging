import { useState } from 'react';
import parser from 'html-react-parser';
import { Layout } from '../../components/layout/Layout';
import { Breadcrumbs } from '../../components/blocks/Breadcrumbs';
import { SidebarLeft } from '../../components/blocks/sidebars/Left';
import { SidebarRight } from '../../components/blocks/sidebars/Right';
import { DocsContent } from '../../components/blocks/DocsContent';
import { Pagination } from '../../components/blocks/Pagination';
import { getAllPosts } from '../../api';
import mockup from '../../img/mockup.png';
import Image from "next/image";


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
   <div className="backdrop-static">
      <div>
        <div className="pop__view">
            <div className="title">
                <span>The product is not yet public, It will be thanks … to you 🤫</span>
            </div>
            <div className="content">
                <span>This pilot launch is an opportunity to gather feedback from our first users… You can be part of it as Beta tester ! For this no need for documentation as we our Kubernetes experts will walk you through your experience.</span>
            </div>
            <button>
              <span>BECOME BETA TESTER FOR 6 MONTH FREE</span>
            </button>
            <div className="info">
                <span>*Limited time offer, : 28/02/2022 and the 01/04/2022.</span>
            </div>
        </div>
        <div className="pop__image">
        <Image
          src={mockup}
          layout="responsive"
          placeholder="blur"
          priority={true}
          alt=""
        />
        </div>
      </div>
   </div>
   </>
  )
}



export default Documentation;
