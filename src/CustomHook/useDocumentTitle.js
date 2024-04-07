import { useEffect, useRef } from 'react';

function useDocumentTitle(title) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    const newTitle = title ? `${title} - Quintessential` : 'Quintessential';
    document.title = newTitle;
    const currentTitle = defaultTitle.current

    return () => {
      // Optional: Reset title on unmount to avoid conflicts
      document.title = currentTitle;
    };
  }, [title]);
}

export default useDocumentTitle;
