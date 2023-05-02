import React from 'react'

const Landing = () => {
  return (
  <section  className="w-full phone:flex-col   h-screen flex justify-between items-center  bg-gray-200">
    <div className='w-[45%] phone:w-full  phone:h-screen  h-3/4 flex  p-[30px] justify-evenly  items-center flex-col'>
        <span className='text-[60px] phone:text-[30px] phone:leading-[40px] phone:text-center  leading-[67px]  text-black font-bold '>The employee
and emergency <h1 className='text-blue-700 '>communications</h1> platform</span>
<span className='text-[25px] text-black mt-[20px] phone:text-[20px] phone:text-center '>The world’s first employee communication platform with built-in AI and OpenAI GPT

</span>

<span className='w-[95%] mt-[20px] flex justify-between phone:justify-between    items-center '>
    <button className=' hover:bg-[white] phone:w-[100px] phone:text-[12px]  hover:text-blue-700  w-[200px] font-bold h-[50px] p-[10px]  bg-blue-700 text-white rounded-md'>Discover Netpresenter</button>
    <button className='  w-[200px] phone:w-[150px] hover:bg-blue-700 hover:text-white   h-[50px] p-[10px]  text-blue-700 font-bold border-2 border-blue-700 rounded-md'>
    Request Demo</button>
    </span>
</div>

<img  className=' mt-[50px] phone:w-[90%]   phone:mt-[0px]  w-[40%]  h-[80%] 'src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2022/04/2022-Home-Header-Employee-Communication-Alerting-EN-a-640x640.png"  alt="employee communication emergency communication"></img>
  </section>
  )
}

export default Landing