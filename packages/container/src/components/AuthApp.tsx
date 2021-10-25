import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
// Reason to import mount function instead of MarketingApp as a component
// Near-zero coupling between container and child-apps
// Container shouldn't assume that a child is using particular framework
import { Location } from 'history';
import { useHistory } from 'react-router-dom';

interface IProps {
  onSignIn: () => void;
}

export default (props: IProps) => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location: Location) => {
        if (history.location.pathname !== location.pathname) {
          history.push(location.pathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn: () => {
        props.onSignIn();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
