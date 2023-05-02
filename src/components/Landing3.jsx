import React from 'react'

const Landing3 = () => {
  return (
    <section  className="w-full phone:flex-col h-screen flex  phone:justify-center justify-between items-center  bg-gray-200">
        <img  className=" w-[90%]" src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2022/01/2022-Informed-Engaged-Productive-Safe-CombinedShadow-640x640.png" width="550" height="640" alt="Informed Engaged Productive Safe Combined Shadow" class="step-image"></img>
  
    <div className='w-[70%] phone:w-full phone:h-[50%] h-3/4 flex phone:flex-col  p-[30px] justify-evenly  items-center flex-col'>
        <span className='text-[40px] phone:text-[20px]  flex text-black font-bold '>
            <h1 className='text-blue-700 '>Solutions<h1 className='text-black'>that solve communication challenges</h1></h1> 
        </span>
<span className='text-[20px] phone:text-[10px] text-black mt-[20px] '>Employee and emergency communication can support an organization in many ways: during a merger or acquisition, to keep everyone on the same page in a hybrid workplace, change in leadership, during system outages, and even in case of a crisis. Discover our four pillars with a wide range of innovative solutions with which we can solve various communication challenges, and keep your employees measurably better informed, engaged, productive, and safe.


</span>
<span className='w-[95%] mt-[20px] flex justify-between   items-center '>
    <button className=' hover:bg-[white] hover:text-blue-700  w-[200px] font-bold h-[50px] p-[10px]  bg-blue-700 text-white rounded-md'>Discover Our Solutions</button>
   
    </span>
</div>

</section>
  )
}

export default Landing3