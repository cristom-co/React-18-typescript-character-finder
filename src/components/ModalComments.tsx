import React, { ReactNode, useState } from 'react';

const ModalComments: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={openModal}
        className="bg-secondary600 text-white px-4 py-2 rounded-md text-sm"
      >
        Comments
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg md:w-1/2 md:h-2/3 sm:w-11/12 sm:h-2/3">
            <div className="flex border-b-2 mb-4 p-2 ">
              <h2 className="grow text-gray-500">Comments</h2>
              <button onClick={closeModal} className="text-gray-500 grow-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComments;