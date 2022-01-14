
import parser from 'html-react-parser';

export async function getServerSideProps(context) {
  try {
      const response = await fetch('https://cno-documention.ghost.io/ghost/api/v4/content/posts/61c5cd69370fa3003b6a4399/?key=72bf9fc7b0aabcceec343c7eaa');
      const data = await response.json();

      return { props: {data} }
  } catch (err) {
      console.warn(err);
      return { notFound: true }
  }
}

const Documentation = ({data}) => {
  console.log(data.posts);
  const html = parser(data.posts[0].html);

  return (
   <>
    <div>
      {html}
    </div>
   </>
  )
}



export default Documentation;
