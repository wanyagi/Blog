import React from 'react'; 
import HeroSection from './HeroSection';
import Catégorie from './Catégorie';  
import './Home.css';  
import Posts from './AllPosts';


const Home = () => {

  
const catégories = [
  {title: "Articles" , page: "/articles"}, 
  {title: "Croissance" , page: "/category/croissance"}, 
  {title: "Bien-être" , page: "/category/bien-être"},
  {title: "Lifestyle" , page: "/category/lifestyle"},
  {title: "Cuisine" , page: "/category/cuisine"},
]; 



  return (
    <>
      <HeroSection />
      <section className='catégories--sec'>
        <div className="catégorie--home--section">
          {catégories.map((catégorie, index) => (
            <Catégorie key={index} title={catégorie.title} page={catégorie.page} />
          ))}
        </div>
      </section>
      <div className="posts--section"><Posts /></div>
    </>
  )
}

export default Home;