import React from 'react';
import "./NewsSect.css";

export default function NewsSect() {
  return (
    <section>
        <div>
            <h2 className="d-flex justify-content-center mt-5 news-head">News Near You</h2>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
            <div className="story story1 col-3 offset-1">
              <h3 className="text-align-center news-head">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
            <div className="story story2 col-4">
            <h3 className="text-align-center news-head">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
            <div className="story story3 col-3">
            <h3 className="text-align-center news-head">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
        </div>
    </section>
  )
}
