import React from 'react'
const NavBar = () => {
  return (
    <div>
    <nav className = "text-white pt-9 md:px-20 flex justify-between items-center sm:px-5 mx-w-screen-lg" >
      <a href='#'> 
        <img className=' w-40 ' src='navbar_360.png'></img>
      </a>
      <a href='#' className=' hover:text-blue-500' > Countries </a>
    </nav>
    </div>
  );
}
export default NavBar