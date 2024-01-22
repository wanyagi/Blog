import React from 'react';
import { NavLink } from 'react-router-dom';  
import apropos from '../assets/Apropos.jpg'; 
import './apropos.css'; 

const Apropos = () => {
  return (
    <section className="apropos">
      <div className="apropos-content">
        <img src={apropos} alt="Lindsay" aria-label="La raison de ce blog" />
        <h4>
          Qui suis-je ?
        </h4>
        <p>
          Je suis Lindsay, une jeune maman de 24 ans amoureuse de la vie : voyager, profiter de mes proches, faire
          des balades en famille, sortir avec mes amis, cuisiner, prendre des photos pour immortaliser les bons
          moments... voici tout ce que j’aime.
        </p>
        <p>
          Mon adorable poupée s’appelle Sydney que vous aurez l’habitude de connaître sous le surnom de Baby
          Syd. Elle est une petite fille de 1 an pleine de vie et très sociable qui adore faire coucou aux personnes que
          l’on croise dans la rue. J’aime la voir grandir, s’épanouir de jour en jour et apprendre des nouvelles
          choses.
        </p>
        <h4>
          Pourquoi ce blog ?
        </h4>
        <p>
          J’ai décidé de me lancer dans cette nouvelle aventure pour devenir la personne dont j’avais besoin lorsque
          j’étais enceinte. Je me posais beaucoup de questions sur ce qui m’attendais et me nourrissais de
          témoignages de femmes qui n’étaient pas toujours les meilleurs, car oui malheureusement tout ne se passe
          pas toujours comme on l’imagine. 
        </p>
        <p>
          C’est pour cela qu’il est important pour moi désormais de vous partager mon expérience dans le but de
          rassurer, informer et déculpabiliser les personnes qui en ont besoin.
          Cette Safe Place est donc principalement destinée aux parents, futurs parents et curieux de la maternité
          mais aussi à toute personne pouvant être intéressées par les bons plans et astuces que je partagerai avec
          vous.
        </p>
        <p>
          Alors bienvenue à vous et commençons cette nouvelle aventure tous ensemble dans le respect et la
          bienveillance !
        </p>
    
        <button>
          <NavLink to="/" className="btn--apropos">
            Accueil
          </NavLink>
        </button>
      </div>
    </section>
  )
}

export default Apropos; 