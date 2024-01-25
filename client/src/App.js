import React, { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { logIn } from './redux/authenticationSlice';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"; 
import Root from './components/Root'; 
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';
import Apropos from './pages/apropos';
import Login from './pages/login';
import Register from './pages/register'; 
import Articles from './pages/articles';
import PmCGV from './pages/cgv';
import Contact from './pages/contact';
import Article from './pages/article';
import PostsByCategory from './components/PostByCategory';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> } >
    <Route index element={ <Home /> } />
    <Route path="/article" element={ <Article /> } />
    <Route path="/article/:id" element={ <Article /> } />
    <Route path="/apropos" element={ <Apropos /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/register" element={ <Register /> } />
    <Route path="/category/:category" element={ <PostsByCategory />} />
    <Route path="/articles" element={ <Articles /> } />
    <Route path="/post/:id" element={ <ArticlePage /> } />
    <Route path="/cgv" element={ <PmCGV /> } />
    <Route path="/contact" element={ <Contact /> } /> 
  </Route>
))

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn'); 
    const usersRole = localStorage.getItem('users_role'); 

    if (loggedIn === 'true' && usersRole) {
      dispatch(logIn({users_role: usersRole})); 
    }; 

  }, [dispatch]); 

  return (
    <RouterProvider router={router} />
  );
}

export default App;
