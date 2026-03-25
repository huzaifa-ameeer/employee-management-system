import React from 'react'

const TaskList = () => {
  return (
    <div className='flex overflow-x-auto items-center justify-start gap-10 flex-nowrap h-[55%] w-full py-5 mt-10'>
      
        <div className='h-full w-[300px] flex-shrink-0 p-5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-xl'>
          <div className='flex items-center justify-between'>
            <h2 className='px-4 py-2 text-sm bg-black text-white rounded-xl'>High</h2>
            <h4>25 March, 2026</h4>
          </div>
          <h2 className='mt-7 font-bold text-2xl'>Make a React project</h2>
          <p className='mt-2 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis!</p>
        </div>
        
    </div>
  )
}

export default TaskList