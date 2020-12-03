import { useRef, useEffect } from 'react';
import { node } from 'prop-types';
import { createPortal } from 'react-dom';

/**
 * Functional component that helps you to get rid of React.createPortal.
 * It will automatically creates and append the portal container to the body and then inject your element in it.
 * Portal container will automatically removed from body when the component will unmount.
 */
const Portal = ({ children }) => {
  const container = useRef(null);

  useEffect(() => {
    return () => {
      if (container.current) {
        document.body.removeChild(container.current);
      }
      container.current = null;
    };
  }, []);

  if (!container.current) {
    container.current = document.createElement('div');
    document.body.appendChild(container.current);
  }

  return createPortal(children, container.current);
};

Portal.propTypes = {
  children: node.isRequired,
};

export default Portal;
