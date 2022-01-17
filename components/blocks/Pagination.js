import Link from "next/link";


export const Pagination = ({prev, next}) => {

  return (
    
    <section className="pagination">

      {
        prev ?
          <Link href={'/documentation/' + prev.slug}>
            <a className="btn btn--link pagination__btn pagination__btn--prev">
              <div className="pagination__title">Previous</div>
              <p>{prev.title}</p>
            </a>
          </Link>
        : null
      }

      {
        next ?
          <Link href={'/documentation/' + next.slug}>
            <a className="btn btn--link pagination__btn pagination__btn--next">
              <div className="pagination__title">Next</div>
              <p>{next.title}</p>
            </a>
          </Link> 
        : null
      }        
           
    </section>
  )
}