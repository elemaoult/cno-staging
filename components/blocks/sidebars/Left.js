import Link from "next/link";


export const SidebarLeft = ({data: { posts }, currentPost, active}) => {

  if (!posts) return null;

  let tags = [];

  // {
  //   id,
  //   name,
  //   posts: []
  // }

  posts.forEach(post => {
    if (!post.primary_tag) return null;

    const tag = post.primary_tag.id;
    const tagsIndex = tags.findIndex(({id}) => id === tag);

    if (tagsIndex >= 0) { // if exists
      tags[tagsIndex].posts.push({name: post.title, slug: post.slug, id: post.id})
    } else {
      tags.push({
        id: tag,
        name: post.primary_tag.name,
        posts: [{name: post.title, slug: post.slug, id: post.id}]
      })
    }
  });

  

  return (
    <aside className={`sidebar sidebar--left${active ? ' active' : ''}`}>
      <div className="sidebar__content">
        {
          tags.map(({id, name, posts}) => {
            return (
              <div className="sidebar__part" key={id}>
                <div className="sidebar__title">{name}</div>
                <ul className="sidebar__list">
                  {
                    posts.map(post => {
                      return (
                        <li key={post.id} className={currentPost == post.id ? "active" : ""}>
                          <Link href={'/documentation/' + post.slug}>
                            <a>{post.name}</a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }        
      </div>
    </aside>
  )
}