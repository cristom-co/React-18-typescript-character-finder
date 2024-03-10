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
    <div className="relative">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Comments
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-1/2 h-2/3">
            <div className="flex border-b-2 mb-4 p-2 ">
              <h2 className='grow'>Comments</h2>
              <button onClick={closeModal} className="text-gray-500 grow-0">
                X
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