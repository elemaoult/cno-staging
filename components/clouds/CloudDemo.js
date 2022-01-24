


export const CloudDemo = ({children}) => {

  return (
    <section className="cloud cloud--demo">
      <div className="container">
        <div className="cloud_content" data-aos="fade-top">
          {children}
        </div>
      </div>
    </section>
  )
}