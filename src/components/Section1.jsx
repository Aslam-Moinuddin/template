// src/components/Section.js
import React from 'react';
import "../App.css"

function Section({ title, content, bg, id }) {
  return (
    <section id={id} className="text-center" style={{ backgroundColor: bg }}>
      <div className="container">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default Section;