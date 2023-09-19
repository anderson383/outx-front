import useOnEvent from './use-on-event';

const useOnClickOutTarget = (id: any, toggle: any, setToggle: any, closeable = true) => {
  const setFromEvent = (path: any) => {
    if (path.path && !path.path.find((element: { id: any; }) => element.id === id)) {
      setToggle();
    }
  };

  useOnEvent(toggle, setFromEvent, 'click', closeable);
};

export default useOnClickOutTarget;
