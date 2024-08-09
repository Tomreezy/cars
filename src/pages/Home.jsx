import Hero from "../components/Hero"
import { useGlobalState } from "../context/ContextApi"

const Home = () => {
    const{setSubMenu}=useGlobalState()

  return (
    <div onMouseEnter={()=>setSubMenu(false)} className='w-screen h-screen'>
      <Hero />
    </div>
  )
}

export default Home