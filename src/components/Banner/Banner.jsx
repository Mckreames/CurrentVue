import React from 'react';
import "./Banner.css"

export default function Banner() {
  return (
    <div className="row container-fluid banner">
        <h1 className="d-flex justify-content-center">Weather Today, Your Way!</h1>
        <p className="d-flex justify-content-center">(Today's Date)</p>
    </div>
  )
}
