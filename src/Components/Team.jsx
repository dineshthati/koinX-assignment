import React from "react";

const Team = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "john smith",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi est quisquam ipsum, voluptatem sapiente debitis incidunt, ipsa enim atque a asperiores, aliquid consequatur voluptatum facilis nulla. Nam delectus praesentium totam. Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autemquam quod",
    },
    {
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Elina williams",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi est quisquam ipsum, voluptatem sapiente debitis incidunt, ipsa enim atque a asperiores, aliquid consequatur voluptatum facilis nulla. Nam delectus praesentium totam. Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autemquam quod",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "john smith",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi est quisquam ipsum, voluptatem sapiente debitis incidunt, ipsa enim atque a asperiores, aliquid consequatur voluptatum facilis nulla. Nam delectus praesentium totam. Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autem quam quod a, at deleniti similique omnis! deleniti similique omnis! Beatae autemquam quod",
    },
  ];
  return (
    <div className="p-2 bg-white mt-4 rounded-lg sm:p-5 sm:px-6 sm:mt-5">
      <p className="font-semibold text-xl py-2 sm:text-3xl ">Team</p>
      <p className="sm:mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, at
        inventore placeat numquam voluptas cum rem tenetur minima quibusdam,
        delectus nostrum optio
      </p>

      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="sm:flex-row flex flex-col rounded-lg  p-2 mt-5 bg-[#E8F4FD] items-center"
          >
            <div className="sm:flex sm:items-center sm:justify-center sm:flex-col sm:w-[20%]">
              <img className="w-24 h-24 rounded-lg" src={item.img} alt="" />
              <p className="capitalize mt-2 font-semibold text-sm sm:text-sm">
                {item.name}
              </p>
              <p className="capitalize text-[11px] text-[#98A2B0] font-semibold mt-1 sm:text-xs">
                designation here
              </p>
            </div>

            <p className="text-[13px] mt-3 sm:text-sm leading-relaxed sm:w-[80%]">
              {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
