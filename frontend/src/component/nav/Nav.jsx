import { useState,useRef,useEffect } from 'react';
import { CircleLoader, ClockLoader} from 'react-spinners';
import {NavLink, useNavigate} from 'react-router-dom'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import DialpadIcon from '@mui/icons-material/Dialpad';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import   AccountCircleSharpIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactDOM from "react-dom";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FaMoon } from "react-icons/fa";
import { dark } from '@mui/material/styles/createPalette';
import { FiSun } from "react-icons/fi";
const Nav = () => {
  const navigatte=useNavigate();
  const [isdark,setisdark]=useState(true);
  const nav=[
    
    {
    name:'home',icon: <RoofingSharpIcon/>,
    },
    {
      name:'About',icon:  <AccountCircleSharpIcon/>,
      }, {
        name:'project',icon: <AccountTreeIcon/>,
        }, {
          name:'payment',icon: <RoofingSharpIcon/>,
          }, {
            name:'contact',icon: <DialpadIcon/>,
            },


]



    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = nav.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const inputref=useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {

        setIsOpen(!isOpen);
        if(inputref.current){
          inputref.current.focus()

        }

      };
      useEffect(() => {
        if (isOpen && inputref.current) {
          inputref.current.focus();
        }
      }, [isOpen]);
   const displaymenu=()=>{
     const a=document.getElementById('menu');
      a.classList.remove("hidden")
   }
   const remove=()=>{
    const a=document.getElementById('menu');
     a.classList.add("hidden")
  }

 const toogletheme=()=>{
 document.documentElement.classList.toggle("dark")
    setisdark(!isdark)
 }
 const navv=()=>{
  setIsOpen(!isOpen);


 }    
  const submit=(e)=>{
    e.preventDefault()
    setIsOpen(false)
    if(inputref.current.value=='home'){
      navigatte('/')

    }else if(inputref.current.value=='about'){
      navigatte('about')
    }else if(inputref.current.value=='project'){
      navigatte('about')
    }else if(inputref.current.value=='contact'){
      navigatte('about')
    }else{
      navigatte('/')
    }

    
  }
    

  return (
    
    
     <div  className=" sticky top-0  bg-[url(/blur1.avif)] z-40  bg-cover" >

        <nav  className=" top-0 left-0 w-full  backdrop-blur-lg    p-4 shadow-lg z-50">
      <div   className="flex justify-between items-center max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <div onMouseOver={displaymenu} onMouseLeave={remove} className="h-12 group ">
        <div    className=" group text-white  ">
          <img src="/favicon.ico" alt="" className='' />
          <div  className="  flex   text-white text-opacity-70 ">
           {/* {loading?<div><CircleLoader/></div>:<div></div>} */}
   <div id="menu" className=" group-hover:block  hidden h-36 absolute z-50   top-18   sm:top-14 w-36  justify-center items-center  rounded  bg-gray-900 shadow-lg shadow-purple-600">
  <a  href="https://drive.google.com/file/d/1PxRjrZYzmkhSQYnNrUpqer1HM_UWgdHT/view?usp=drive_link" target="blank"  className=" flex m-4 justify-center items-center bg-black border-2 border-gray-600 p-1 rounded-2xl bottom-4 hover:border-blue-700 transition ">download cv  </a>
       </div>

 </div>


        </div>
        </div>
   
      

       <div className=' border border-white/30 rounded-xl bg-cove flex justify-center items-center '>
       <div className='backdrop-blur-lg hidden rounded-xl bg-white/10 justify-center items-center   text-white text-opacity-60  sm:flex gap-4 px-6   '>
        
       <NavLink to={'/'} name="about"   className={({ isActive }) =>
    `px-3 py-2 rounded-md transition hover:scale-110 duration-300 ease-in-out ${
      isActive ? "text-white border-b-2 border-red-300" : "text-white/60"
    }` }>
            Home
          </NavLink>


          <NavLink to={'/about'} name="about"   className={({ isActive }) =>
    `px-3 py-2 rounded-md transition hover:scale-110 duration-300 ease-in-out ${
      isActive ? " border-b-2 border-red-300 text-white" : "text-white/60"
    }` }>
            About
          </NavLink>


                  <NavLink to={'/project'} name="about"   className={({ isActive }) =>
    `px-3 py-2 rounded-md transition hover:scale-110 duration-300 ease-in-out ${
      isActive ? " border-b-2 border-red-300 text-white" : "text-white/60"
    }` }>
            projects
          </NavLink>

          <NavLink to={'/contact'} name="about"   className={({ isActive }) =>
    `px-3 py-2 rounded-md transition duration-300 hover:scale-110 ease-in-out ${
      isActive ? " border-b-2 border-red-300 text-white" : "text-white/60"
    }` }>
            contact
          </NavLink>



          <NavLink to={'/payment'} name="about"   className={({ isActive }) =>
    `px-3 py-2 rounded-md transition duration-300 hover:scale-110 ease-in-out ${
      isActive ? " border-b-2 border-red-300 text-white" : "text-white/60"
    }` }>
            links
          </NavLink>

         
        </div>
       </div>
          
 
      
          
       
        


        {/* Hamburger Menu Icon: Only visible on small screens */}
       <button className="block mr-8 hover:scale-110 transition-all duration-200 " onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5  bg-white/80 mb-1 transition-all hover:bg-white duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 bg-white/80 mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 mb-1  bg-white/80 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></div>
        </button>


        <button onClick={toogletheme} className='absolute sm:right-20 right-32'>
          {isdark?<FiSun className='sm:text-xl  dark:text-white' />:<FaMoon className='text-orange-300 font-bold sm:text-xl' />

          }

        </button>
         
      
      </div>


      {isOpen &&
        ReactDOM.createPortal(
          <div>
          <div className="fixed inset-0 flex z-50 justify-center items-center backdrop-blur-sm bg-[url(/blur.avi)] bg-cover bg-opacity-40  text-white">

               <div className="bg-[url(/blur1.avif)]  backdrop-blur-md p-5 rounded-lg max-w-md w-full max-h-[90vh] ">
               <button className='absolute  right-1 top-0 text-white ' onClick={toggleMenu} ><CancelSharpIcon/></button>

   <form onSubmit={(e)=>{submit(e)}} className="relative sm:flex hidden items-center">
  <input  
   value={searchTerm}
   onChange={(e) => setSearchTerm(e.target.value)}
    type="text"
    ref={inputref}
    placeholder="Search..."
    className="w-full  px-2 py-1 mt-2 rounded-full outline-none bg-white/40 text-white/90 border-white border "
  />
  <button type='submit' className="absolute top-3 right-2 text-center bg-gray-100   text-black px-2 hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 rounded-full">
  <SearchSharpIcon/>
  </button>
</form>
<div className=''>

  
{  filteredItems.length>0? filteredItems.map((data,index)=>(
  <div className='w-full ' key={index}>
    <NavLink to={`${data.name=='home'?'/':data.name}`} onClick={navv} className='flex opacity-80 mt-3 hover:opacity-100 hover:bg-black/50 hover:rounded-xl  px-1 transition-all duration-300'>
    <button className='w-8'>
    {data.icon}

    </button>
    <div>
      
    <p>{data.name}</p>
    <p className='text-xs'>welocme to my forever work progres</p>
      </div>
    
    </NavLink> 
  
    
  


  </div>
)):<div className='flex justify-center items-center '>
  <p className='text-xs bg-black py-2 '>No search result
  </p>
  <div className='absolute bottom-1  flex  gap-2 left-3'>
  <GitHubIcon sx={{ fontSize: 20 }} />
<AlternateEmailIcon sx={{ fontSize: 20 }} />
  </div>
  
  </div>}

</div>

               </div>
             </div>
             </div>,          document.body // Render outside of the parent component
        )}

    </nav>
 
     </div>



    
  );
};

export default Nav;
