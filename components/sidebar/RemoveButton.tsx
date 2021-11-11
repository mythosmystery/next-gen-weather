import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface RemoveButtonProps {}

export const RemoveButton: React.FC<RemoveButtonProps> = () => {
   return (
      <button>
         <FaTrash />
      </button>
   );
};
