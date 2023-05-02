import React, { useState } from 'react'

const Header = () => {




// JS Part
const[Showdropdown,SetDropdown]=useState()


const DropDown=()=>{

  SetDropdown(!Showdropdown)
}
 const Cancel =()=>
{
  SetDropdown(!Showdropdown)
}



  return (
    <div className='flex w-full h-24 realtive flex-col'>
   <section className='w-full   h-24 flex justify-between  p-[20px] items-center'>
   
   <img width='200px'   className='phone:w-[100px]' src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/svg/logo-new.svg"  alt="Logo" class="main-logo"/>



   <span className='w-[35%] flex justify-evenly items-center'>
   <i  class="fa fa-search" aria-hidden="rue"></i>
   <button className='w-[130px] h-[40px] phone:w-[60px] phone:h-[30px] phone:text-[10px] phone:font-bold rounded-md flex justify-center phone:hidden hover:bg-black hover:text-white items-center text-black bg-yellow-300'> Request Demo</button>
   <i onClick={DropDown} className= "cursor-pointer  phone:text-[20px]  text-[30px]  text-black fa fa-bars" aria-hidden="true"></i>
   </span>
   </section>

   { Showdropdown ? <div    className='w-[60%] phone:justify-center phone:w-full phone:p-[10px] phone:h-[250px] phone:ml-[0px] ml-[250px] text-center h-[300px] bg-no-repeat border-8 border-white bg-cover bg-center flex-col justify-evenly  rounded-md shadow-lg shadow-purple-800 absolute flex   top-36 bg-[url(https://img.freepik.com/premium-vector/textured-background-with-gradient-dark-purple-ntvoyuzh-shades-horizontal-curtains-dull-mosaic_481866-1513.jpg)] font-bold text-[25px] text-white'>
  <span onClick={Cancel}  className='flex  hover:text-red-600 justify-end items-end pr-[20px] phone:pr-[0px] phone:justify-end phone:items-start phone:flex  '>  <i  class="fa-sharp fa-solid fa-xmark"></i></span>
<span> Hello Welcome to the Java Script World ! we are here to Make you Masters in  JS </span>
<span className='text-[15px] text-yellow-400 font-semibold'> Here NetPresenter Presenting you the Free Course of JS with our Well experienced tutors </span>
   </div>:''}
   </div>
 






  

  )
}

export default Header