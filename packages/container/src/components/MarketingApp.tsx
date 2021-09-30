import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
// Reason to import mount function instead of MarketingApp as a component
// Near-zero coupling between container and child-apps
// Container shouldn't assume that a child is using particular framework

export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
