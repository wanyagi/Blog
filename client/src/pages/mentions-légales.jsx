import React from 'react';
import FooterPages from '../components/FooterPages';


const MentionsLégales = () => {

  const mData = {
    title: "Mentions Légales", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime iste porro culpa id. Nulla quos nihil quas iure porro quibusdam, placeat id repudiandae. Accusantium, corporis. Unde aliquid recusandae sunt accusamus excepturi esse non, doloribus iusto quidem commodi, nulla in inventore libero maxime facilis enim totam. Dolorum a doloribus dicta.",
  }
  return (
    <section className="container">
      <FooterPages title={mData.title} content={mData.content} />
    </section>
  )
}

export default MentionsLégales; 