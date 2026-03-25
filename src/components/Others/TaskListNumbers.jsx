import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 flex-wrap justify-between gap-5">
      <div className="rounded-xl sm:w-[45%] lg:w-[22%] py-6 px-9 bg-gradient-to-r from-[#6D28D9] to-[#2563EB] text-white cursor-default">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl sm:w-[45%] cursor-default lg:w-[22%] py-6 px-9 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl sm:w-[45%] cursor-default lg:w-[22%] py-6 px-9 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl sm:w-[45%] cursor-default lg:w-[22%] py-6 px-9 bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
