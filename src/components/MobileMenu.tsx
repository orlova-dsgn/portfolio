import { useState, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  children: ReactNode;
  className?: string;
}

export const MobileMenu = ({ children, className }: MobileMenuProps) => {
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
      <div className={cn('fixed top-4 right-4 z-50', className)}>
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

      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={toggleIsOpen}
      />

      <div
        className={cn(
          'max-mobile:max-w-240 max-mobile:px-6 fixed top-0 right-0 bottom-0 z-45 w-full max-w-90 bg-white px-15 py-6 shadow-xl',
          'flex flex-col justify-between',
          'transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {children}
      </div>
    </>
  );
};
