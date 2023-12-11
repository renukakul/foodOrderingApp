import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Modal component using the createPortal function to render content outside the main React tree
export default function Modal({ children, open, className = '' }) {
  // Create a ref for the dialog element
  const dialog = useRef();

  // useEffect to handle modal open and close based on the 'open' prop
  useEffect(() => {
    // Access the dialog element from the ref
    const modal = dialog.current;

    // Show the modal if 'open' is true
    if (open) {
      modal.showModal();
    }

    // Cleanup function to close the modal when the component is unmounted or 'open' changes
    return () => modal.close();
  }, [open]); // Dependency array includes 'open' to trigger the effect when it changes

  // Use createPortal to render the dialog outside the main React tree
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById('modal') // The target DOM element to render the portal content
  );
}
