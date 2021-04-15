import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, useLocation } from 'react-router-dom';

export const TrackedRoute = (props) => {
  const userId = localStorage.getItem('@compensar:identification');
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-186267229-1', {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: userId || 'out_identification',
      },
    });
  }, []);
  useEffect(() => {
    const page = props.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }, [location.pathname]);

  return (
    <Route {...props} />
  );
};

export default TrackedRoute;
