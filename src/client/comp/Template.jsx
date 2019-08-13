import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MappedRoutes from './MappedRoutes';
import NavBar from './NavBar';
import routes from '../routes';
import css from './css/template.css';

const Template = () => {

  return (
    <section className = 'template'>
      <BrowserRouter>
        <NavBar />
        <div className = 'temp-wrapper'>
          <MappedRoutes routes = { routes } />
        </div>
      </BrowserRouter>
    </section>
  )
}

export default Template;
