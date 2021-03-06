import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
// Reason to import mount function instead of MarketingApp as a component
// Near-zero coupling between container and child-apps
// Container shouldn't assume that a child is using particular framework
import { Location } from 'history';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location: Location) => {
        if (history.location.pathname !== location.pathname) {
          history.push(location.pathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
