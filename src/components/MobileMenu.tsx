import { useState, useEffect, type ReactNode } from 'react';

interface MobileMenuProps {
  children: ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('max-mobile:!overflow-hidden');
    } else {
      document.body.classList.remove('max-mobile:!overflow-hidden');
    }
    return () => {
      document.body.classList.remove('max-mobile:!overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          className="btn-brand flex h-10 w-10 items-center justify-center"
          onClick={toggleIsOpen}
        >
          <div>
            {!isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H21V9H3V7ZM3 11H21V13H3V11ZM3 15H21V17H3V15Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {isOpen && <>{children}</>}
    </>
  );
};
