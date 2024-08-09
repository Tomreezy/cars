import subLinks from "../data/data"
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGlobalState } from "../context/ContextApi"

const NavBar = () => {
    const{setLocation,setOnePage,setOneObject,setSubMenu}=useGlobalState()

    function handleSubMenu(e){
        if(!e.target.classList.contains("show")){
          setSubMenu(false)
        }
      }
    

function handlePassing(e){
    const nodeTarget=e.target 
    const pageName = nodeTarget.textContent
    const noder =nodeTarget.getBoundingClientRect()
    const bottom =noder.bottom
    const center = (noder.left+noder.right)/2
    const foundObj = subLinks.find(item=>item.page == pageName)
    setOneObject(foundObj)
    setLocation({center,bottom})
    setOnePage(pageName)
    setSubMenu(true)
    
}


  return (
    <nav onMouseOver={handleSubMenu} className='bg-red-600 fixed w-[100vw] z-50 text-white'>
        <section className='mx-auto max-w-5xl p-3 flex justify-between items-center'>
            <p className='font-semibold cursor-pointer'><span className='font-serif  font-medium text-4xl'>Cars</span>.co.za</p>
            <div className="flex space-x-6 text-base">
                {subLinks.map((eachPage,index)=>{
                    return <p key={index}  onMouseOver={handlePassing} className="p-2  hover:bg-opacity-20 show cursor-pointer hover:bg-black rounded-md">{eachPage.page}</p>
                })}
            </div>
        </section>
    </nav>
  )
}

export default NavBar