import React from 'react'

export default function NewsSect() {
  return (
    <section>
        <div>
            <h2 className="d-flex justify-content-center news-head">News Near You</h2>
        </div>
        <div className="row mt-5">
            <div className="story story1 col-3 offset-1"></div>
            <div className="story story2 col-4"></div>
            <div className="story story3 col-3"></div>
        </div>
    </section>
  )
}
