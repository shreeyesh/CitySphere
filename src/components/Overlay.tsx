
export function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white">
          Manchester City FC
        </h1>
        <p className="text-[#6CABDD] mt-2">
          Triple Champions 2023
        </p>
      </div>
      
      <div className="absolute bottom-8 left-8 text-white text-sm">
        <p>Interact with the 3D scene using your mouse</p>
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  )
}
