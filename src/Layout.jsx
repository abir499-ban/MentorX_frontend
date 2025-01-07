import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout = ({children}) => {
  return (
    <>
      <header><Header/></header>
      <main>
        <Outlet />{children}
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
