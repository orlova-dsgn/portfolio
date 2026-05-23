import { useState } from 'react';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="flex justify-end">
      {!isOpen && (
        <button
          className="btn-brand flex h-10 w-10 items-center justify-center"
          onClick={toggleIsOpen}
        >
          <div>
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
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex flex-col justify-between bg-white p-4">
          <div className="flex justify-end">
            <button
              className="btn-brand flex h-10 w-10 items-center justify-center"
              onClick={toggleIsOpen}
            >
              <div>
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
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <a className="btn-brand" href="/" onClick={toggleIsOpen}>
              проекты
            </a>
            <a className="btn-brand" href="/about" onClick={toggleIsOpen}>
              обо мне
            </a>
            <button className="btn-brand" onClick={toggleIsOpen}>
              cv
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-default">Свяжитесь со мной</p>
            <div className="flex gap-3">
              <button className="btn-brand">телеграм</button>
              <button className="btn-brand">почта</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
