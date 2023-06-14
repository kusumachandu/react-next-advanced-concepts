import CustomContextMenu from "@/components/CustomContextMenu";
import { useState } from "react";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0
}
export default function Home() {
  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  function handleContextMenu(
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    e.preventDefault();

    const { pageX, pageY } = e;

    setContextMenu({show: true, x: pageX, y:pageY})

  }

  function closeContextMenu() {
    setContextMenu(initialContextMenu)
  }
  return (
    <div>
      {contextMenu.show && <CustomContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={closeContextMenu}  />}
      <div
        onContextMenu={handleContextMenu}
        className="h-screen"
      >
        <textarea placeholder="write something" className="h-screen w-full bg-black px-5 py-5 outline-none" />
      </div>
    </div>
  )
}
