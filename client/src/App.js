import React from 'react'; 
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"; 
import Root from './components/Root'; 
import Home from './components/Home';
import PostPage from './components/PostPage';
import Apropos from './pages/apropos';
import Login from './pages/login';
import Register from './pages/register'; 
import DeveloppementPersonnel from './pages/développementpersonnel'; 
import BienÊtre from './pages/bienêtre';
import Lifestyle from './pages/lifestyle'; 
import Cuisine from './pages/cuisine'; 
import PolitiquesDeConfidentialité from './pages/politiques-de-confidentialité'; 
import MentionsLégales from './pages/mentions-légales'; 
import Contact from './pages/contact';
import Article from './pages/article';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> } >
    <Route index element={ <Home /> } />
    <Route path="/article" element={ <Article /> } />
    <Route path="/apropos" element={ <Apropos /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/register" element={ <Register /> } />
    <Route path="/développementpersonnel" element={ <DeveloppementPersonnel /> } />
    <Route path="/bien-être" element={ <BienÊtre /> } />
    <Route path="/lifestyle" element={ <Lifestyle /> } />
    <Route path="/post/:id" element={ <PostPage /> } />
    <Route path="/cuisine" element={ <Cuisine /> } />
    <Route path="/politiques-de-confidentialité" element={ <PolitiquesDeConfidentialité /> } />
    <Route path="/mentions-légales" element={ <MentionsLégales /> } />
    <Route path="/contact" element={ <Contact /> } /> 
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
