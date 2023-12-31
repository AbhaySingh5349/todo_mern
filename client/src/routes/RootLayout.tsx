import React from 'react';
import { Outlet } from 'react-router-dom'; // to be rendered in place where nested route content needs to be rendered

import { Header } from '../components/index';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// export default RootLayout;
