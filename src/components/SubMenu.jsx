import { useEffect, useRef } from "react"
import { useGlobalState } from "../context/ContextApi"


const SubMenu = () => {
    const{location,oneObject,subMenu}=useGlobalState()
    const menu=useRef(null)
    const{links}=oneObject
    
    useEffect(()=>{
        const{center,bottom}=location
        
            menu.current.style.left=`${center}px`
            menu.current.style.top=`${bottom}px`
        
    },[location])

  return (
    <div ref={menu} className={`${subMenu ? "absolute -translate-x-1/2  bg-white transparent hover:bg-white rounded-md p-4 border border-solid border-red-400" :"h-0" }`}>
        {links?.length>0 && subMenu && links.map((link,index)=>{
            return <p key={index} className="text-slate-600 cursor-pointer  text-sm p-2 hover:bg-blue-100  ">{link.label}</p>
        })}
    </div>
  )
}

export default SubMenu