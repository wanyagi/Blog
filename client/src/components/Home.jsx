import React from 'react'; 
import HeroSection from './HeroSection';
import Card from './Card';  
import './Home.css';  
import Croissance from '../assets/Croissance.jpg'; 
import Bienêtre from '../assets/Bienêtre.jpg'; 
import Lifestyle from '../assets/Lifestyle.jpg'; 
import Cuisine  from '../assets/Cuisine.jpg'; 


const Home = () => {

  
const CardsData = [
  {
      image: Croissance, 
      title:"Développement Personnel :" ,
      resume:'Mieux comprendre notre cerveau, nos pensées, nos émotions et celles de nos tout petits je te fais découvrir à travers différentes situationscomment analyser ce qui se passe dans nos têtes.',
      page: "/développementpersonnel",  
  },
  { 
      image: Bienêtre, 
      title:"BIEN-ÊTRE :",
      resume:"En savoir plus sur les différentes manières de prendre soin de son corps etde son esprit : retrouves ici plusieurs conseils et astuces beauté quipourront te servir au quotidien.",
      page: "/bien-être",
  },
  {
      image: Lifestyle, 
      title:"LIFESTYLE :",
      resume:"Voyages, bons plans, astuces... sont rassemblé dans cette catégorie tout ce qui pourrait t’être utile dans la vie quotidienne.",
      page: "/lifestyle",
  },
  {
      image: Cuisine, 
      title:"CUISINE :",
      resume:"Rien de mieux que les recettes simples, gourmandes et rapides à cuisiner ! Alors je partage ici plusieurs recettes que j’adore manger et toujours toutes aussi faciles les unes des autres.",
      page: "/cuisine",
  },

]; 



  return (
    <>
      <HeroSection />
      <section>
        <div className="homecards--section">
          <Card image={CardsData[0].image} title={CardsData[0].title} resume={CardsData[0].resume} page={CardsData[0].page} />
          <Card image={CardsData[1].image} title={CardsData[1].title} resume={CardsData[1].resume} page={CardsData[1].page} />
          <Card image={CardsData[3].image} title={CardsData[3].title} resume={CardsData[3].resume} page={CardsData[3].page} />
          <Card image={CardsData[2].image} title={CardsData[2].title} resume={CardsData[2].resume} page={CardsData[2].page} />
        </div>
      </section>
    </>
  )
}

export default Home;