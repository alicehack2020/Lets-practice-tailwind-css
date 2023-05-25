import { NavLink } from 'react-router-dom'
import {useState} from "react"
const NavBar = () => {
    const navData = [
        {
            title: "Home",
            path:'/'
        },
        {
            title: "About",
            path:'/about'
        },
        {
            title: "Support",
            path:'/support'
        },
        {
            title: "Platform",
            path:'/platform'
        },
        {
            title: "Price",
            path:'/price'
        }
    ]

    const [open,setOpen]=useState(false)
  return (
      <div className="flex justify-between p-3 relative">
          <div className='p-3'>
              <img src="https://practice-react-landing-page.netlify.app/assets/logo-4096a4dd.svg" alt="" />
          </div>
 
          <div className={open?'absolute top-16 bg-white w-full p-5':'hidden md:flex items-cente w-full justify-evenly'}>
              <ul className={open?'flex  flex-col':'flex gap-4 pt-4'}>
                  {
                      navData.map((e, index) => {
                          return <>
                              <NavLink key={index} to={e.path} className={open?'hover:bg-slate-50 p-2':''}>{e.title}</NavLink>
                       </>
                      })    
                  }

              </ul>
               
              <div className={open?'flex items-center space-y-4 flex-col hover:cursor-pointer':'md:flex items-center space-x-8 hidden pt-2 text-center hover:cursor-pointer'}>
                  <div className={open?'flex space-x-1 border items-center mx-auto p-4 px-10' : 'flex space-x-1 items-center'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <p>login</p>
              </div>
              <button className='font-bold text-white bg-[#20B486] p-3 rounded-lg'>Sign Up For Free</button>
          </div>
          </div>
          
          
          
          {open===true?<div className='p-4 mr-6 md:hidden' onClick={() => { setOpen(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </div>:
              <div className='p-4 mr-6 md:hidden' onClick={()=>setOpen(true)}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
             </svg> 
            </div> 
          } 
      </div>
  )
}

export default NavBar