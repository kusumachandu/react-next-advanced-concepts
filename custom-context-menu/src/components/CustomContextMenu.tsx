import useOnClickOutside from '@/utils/UseOnClickOutside';
import React, { useRef } from 'react'

interface ContextMenuProps {
  x: number,
  y: number,
  closeContextMenu: () => void,
}

function CustomContextMenu({ x, y, closeContextMenu }: ContextMenuProps) {

  const contextMenuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(contextMenuRef, closeContextMenu);

  return (
    <div 
      ref={contextMenuRef} 
      style={{ top: `${y}px`, left: `${x}px` }} 
      onClick={closeContextMenu} 
      className='absolute z-20'
    >
      <div className='border text-center rounded'>
        <p className='border-b py-2 px-10 cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-900 hover:text-gray-200 border-gray-500'>Heading</p>
        <p className='border-b py-2 px-10 cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-900 hover:text-gray-200 border-gray-500'>List</p>
        <p className='border-b py-2 px-10 cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-900 hover:text-gray-200 border-gray-500'>Bold</p>
        <p className='py-2 px-10 cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-900 hover:text-gray-200 border-gray-500'>Italic</p>
      </div>
    </div>
  )
}

export default CustomContextMenu
