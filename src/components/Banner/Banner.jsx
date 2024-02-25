import React from 'react';
import "./Banner.css"
import LocalDateTime from '../LocalDateTime/LocalDateTime';

export default function Banner() {
  return (
    <div className="row container-fluid banner">
        <h1 className="d-flex justify-content-center">Weather Today, Your Way!</h1>
        <LocalDateTime />
    </div>
  )
}
