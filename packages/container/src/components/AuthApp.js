import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          // Tells React-Router-DOM to navigate
          // This will update the url in the browser
          history.push(nextPathname);
        }
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
