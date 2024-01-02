import React from 'react'; 
import HeroSection from './HeroSection';
import Catégorie from './Catégorie';  
import './Home.css';  
import Posts from './AllPosts';


const Home = () => {

  
const catégorie = [
  {title: "Articles" , page: "/articles"}, 
  {title: "Croissance" , page: "/category/croissance"}, 
  {title: "Bien-être" , page: "/category/bien-être"},
  {title: "Lifestyle" , page: "/category/lifestyle"},
  {title: "Cuisine" , page: "/category/cuisine"},
]; 



  return (
    <>
      <HeroSection />
      <section>
        <div className="homecards--section">
          <Catégorie  title={catégorie[0].title} page={catégorie[0].page} />
          <Catégorie  title={catégorie[1].title} page={catégorie[1].page} />
          <Catégorie  title={catégorie[2].title} page={catégorie[2].page} />
          <Catégorie  title={catégorie[3].title} page={catégorie[3].page} />
          <Catégorie  title={catégorie[4].title} page={catégorie[4].page} />
        </div>
      </section>
      <div className="posts--section"><Posts /></div>
    </>
  )
}

export default Home;