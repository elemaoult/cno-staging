


export const CloudDemo = ({children}) => {

  return (
    <section className="cloud cloud--demo">
      <div className="container">
        <div className="cloud_content" data-aos="fade-top">
          <h2>Personalized demo with our engineers</h2>
          <p>Take 1 minute to fill out the form. Our experts will contact you to better understand your situation and set up a demo according to your use cases.</p>

          {children}
        </div>
      </div>
    </section>
  )
}