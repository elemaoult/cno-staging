
export const DocsContent = (props) => {

  const title = props.title || 'Empty title.';
  const content = props.content || 'Empty content.';

  return (
    <main className="content">
      <h1 id="page-title">{title}</h1>
      
      {content}
    </main>
  )
}