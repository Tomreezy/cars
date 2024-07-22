import { useGlobalState } from "../context/ContextApi"

const Home = () => {
    const{setSubMenu}=useGlobalState()

  return (
    <div onMouseEnter={()=>setSubMenu(false)} className='w-screen h-screen'>Home</div>
  )
}

export default Home