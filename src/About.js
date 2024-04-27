import React from 'react'

function About(about,image){
image="https://via.placeholder.com/215"
  return (
    <aside>
        <div className="about">

        <img src={image} alt="blog logo" />
        <p> {about}</p>
        </div>
    </aside>

  );}


export default About
