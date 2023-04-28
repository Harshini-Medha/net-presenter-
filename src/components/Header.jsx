import React from 'react'

const Header = () => {
  return (
  <section className='w-full  h-24 flex justify-between p-[20px] items-center'>
   
  <img  src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/svg/logo-new.svg" width="270" height="40" alt="Logo" class="main-logo"/>
  <span className='w-[35%] flex justify-evenly items-center'>
  <i class="fa fa-search" aria-hidden="true"></i>
  <button className='w-[130px] h-[40px] rounded-md flex justify-center items-center text-black bg-yellow-300'> Request Demo</button>
  <i className= "text-[30px]  text-black fa fa-bars" aria-hidden="true"></i>
  </span>
  </section>
  

  )
}

export default Header