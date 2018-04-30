import React from 'react';

import { About, Startups, Home, Sponsors } from '../pages';

const pages = [
  { view: () => <Home /> },
  { view: () => <About /> },
  { view: () => <Sponsors /> },
  { view: () => <Startups /> },
];

export const InfoContainer = (props) => {
  return pages[props.page - 1].view();
};
