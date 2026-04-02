import { useEffect, useState } from "react"

function CursorGlow() {

  const [pos,setPos] = useState({x:0,y:0})

  useEffect(()=>{

    const move = (e)=>{
      setPos({x:e.clientX,y:e.clientY})
    }

    window.addEventListener("mousemove",move)

    return ()=>window.removeEventListener("mousemove",move)

  },[])

  return (
    <div
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full blur-[120px] opacity-40 bg-blue-500"
      style={{
        transform:`translate(${pos.x-150}px,${pos.y-150}px)`
      }}
    />
  )
}

export default CursorGlow