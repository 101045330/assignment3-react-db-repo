import React from 'react'
import Article from './Article'

const Main = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        
        {/* Content (70%) */}
        <section className="col-md-8 col-12">
          {/* Article */}
          <Article />
        </section>

        {/* Form (30%) */}
        <section className="col-md-4 col-12">
          <FeedbackForm />
        </section>
      </div>
    </main>
  )
}

export default Main