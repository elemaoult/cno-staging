

export const Breadcrumbs = ({data}) => {

  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs__title">DOCUMENTATION</div>
      <div className="breadcrumbs__links">
        <ul>
          {
            data.map((part, i) => {
              return (
                <li key={i}>{part}</li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}