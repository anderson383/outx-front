import { useEffect } from 'react';

const useOnEvent = (toggle: any, handleToggle: any, event = 'click', closeable = true) => {
  useEffect(() => {
    const removeEvent = () => window.removeEventListener(event, handleToggle);

    if (!closeable) {
      return () => {};
    }

    if (toggle) {
      window.addEventListener(event, handleToggle);
    } else {
      removeEvent();
    }

    return () => removeEvent();
  }, [toggle]);
};

export default useOnEvent;
