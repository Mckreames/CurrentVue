import React from 'react';
import "./NewsSect.css";

export default function NewsSect() {
  return (
    <section className="background-color">
        <div>
            <h2 className="d-flex justify-content-center pt-5 news-header">News Near You</h2>
        </div>
        <div className="row mt-4 pb-5 d-flex justify-content-center">
            <div className="story story1 col-3 offset-1 text-center">
                <h3 className="news-head">Alabama Supreme Court Rules That Frozen Burritos Are Children</h3>
                <p className="d">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
            <div className="story story2 col-4 text-center">
                <h3 className="news-head">Removed Notre Dame Scaffolding Reveals Construction Crew Accidentally Built Mosque</h3>
                <p className="d">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
            <div className="story story3 col-3 text-center">
                <h3 className="news-head">Amazon Fires Employee Who Tested Positive For Having Food In Their System</h3>
                <p className="d">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum corrupti ea qui explicabo aspernatur ipsum vero. Quo, ipsam rerum deleniti quisquam quaerat tempore officiis.</p>
            </div>
        </div>
    </section>
  )
}
